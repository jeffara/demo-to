/* eslint-disable @typescript-eslint/explicit-function-return-type */

/**
 * Extracts and merges icon names from @interco/icons manifest JSON payloads.
 */

/**
 * @param {unknown} manifest
 * @param {string} label
 * @returns {string[]}
 */
export const extractIconNamesFromManifest = (manifest, label) => {
  if (!manifest || typeof manifest !== 'object' || !Array.isArray(manifest.icons)) {
    throw new Error(`Invalid icon manifest "${label}": expected { icons: [...] }`)
  }

  if (manifest.icons.length === 0) {
    throw new Error(`Invalid icon manifest "${label}": icons list is empty`)
  }

  const names = []

  for (const entry of manifest.icons) {
    if (
      !entry ||
      typeof entry !== 'object' ||
      typeof entry.name !== 'string' ||
      entry.name.length === 0
    ) {
      throw new Error(`Invalid icon manifest "${label}": each icon must have a non-empty name`)
    }
    names.push(entry.name)
  }

  return names
}

/**
 * @param {Array<{ label: string, manifest: unknown }>} manifests
 * @returns {string[]}
 */
export const mergeIconNamesFromManifests = (manifests) => {
  if (!Array.isArray(manifests) || manifests.length === 0) {
    throw new Error('At least one icon manifest is required')
  }

  const uniqueNames = new Set()

  for (const { label, manifest } of manifests) {
    for (const name of extractIconNamesFromManifest(manifest, label)) {
      uniqueNames.add(name)
    }
  }

  return [...uniqueNames].sort()
}

/**
 * @param {string[]} iconNames
 * @returns {string}
 */
export const buildIconNamesSource = (iconNames) => {
  const quotedNames = iconNames.map((name) => `  '${name}'`).join(',\n')

  return `/**
 * Auto-generated from @interco/icons manifests.
 * Do not edit manually — run \`yarn generate:icon-names\`.
 */

export const ICON_NAMES = [
${quotedNames},
] as const

export type IconName = (typeof ICON_NAMES)[number]

const ICON_NAME_SET: ReadonlySet<IconName> = new Set(ICON_NAMES)

export const isIconName = (value: string): value is IconName =>
  (ICON_NAME_SET as ReadonlySet<string>).has(value)
`
}
