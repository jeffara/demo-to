import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

import { ICON_MANIFEST_EXPORTS } from './icon-manifest-exports.mjs'
import {
  buildIconNamesSource,
  extractIconNamesFromManifest,
  mergeIconNamesFromManifests,
} from './icon-names-from-manifests.mjs'

const require = createRequire(import.meta.url)
const scriptsLibDir = dirname(fileURLToPath(import.meta.url))

describe('icon-names-from-manifests', () => {
  it('should extract icon names from a valid manifest', () => {
    const names = extractIconNamesFromManifest(
      {
        icons: [
          { name: 'ic_b', path: 'toranja/assets/ic_b' },
          { name: 'ic_a', path: 'toranja/assets/ic_a' },
        ],
      },
      'test',
    )

    expect(names).toEqual(['ic_b', 'ic_a'])
  })

  it('should merge, dedupe and sort names from multiple manifests', () => {
    const names = mergeIconNamesFromManifests([
      {
        label: 'first',
        manifest: {
          icons: [
            { name: 'ic_zebra', path: 'a' },
            { name: 'ic_apple', path: 'b' },
          ],
        },
      },
      {
        label: 'second',
        manifest: {
          icons: [
            { name: 'ic_apple', path: 'c' },
            { name: 'ic_mango', path: 'd' },
          ],
        },
      },
    ])

    expect(names).toEqual(['ic_apple', 'ic_mango', 'ic_zebra'])
  })

  it('should throw when a manifest is empty', () => {
    expect(() => extractIconNamesFromManifest({ icons: [] }, 'empty')).toThrow(
      /icons list is empty/,
    )
  })

  it('should throw when a manifest entry has no name', () => {
    expect(() =>
      extractIconNamesFromManifest({ icons: [{ path: 'missing-name' }] }, 'broken'),
    ).toThrow(/non-empty name/)
  })

  it('should build a TypeScript source with as const and IconName', () => {
    const source = buildIconNamesSource(['ic_add', 'ic_orange'])

    expect(source).toContain('export const ICON_NAMES = [')
    expect(source).toContain("  'ic_add'")
    expect(source).toContain("  'ic_orange'")
    expect(source).toContain('] as const')
    expect(source).toContain('export type IconName = (typeof ICON_NAMES)[number]')
    expect(source).toContain('const ICON_NAME_SET')
    expect(source).not.toContain('export const ICON_NAME_SET')
    expect(source).toContain('export const isIconName')
    expect(source).toContain('value is IconName')
  })

  it('should stay synced with installed @interco/icons manifests', () => {
    const manifests = ICON_MANIFEST_EXPORTS.map((exportEntry) => ({
      label: exportEntry.label,
      manifest: JSON.parse(readFileSync(require.resolve(exportEntry.exportPath), 'utf8')),
    }))

    const expectedNames = mergeIconNamesFromManifests(manifests)
    const generatedSource = readFileSync(
      resolve(scriptsLibDir, '../../src/components/Atoms/Icon/constants/iconNames.ts'),
      'utf8',
    )

    expect(generatedSource).toBe(buildIconNamesSource(expectedNames))
  })
})
