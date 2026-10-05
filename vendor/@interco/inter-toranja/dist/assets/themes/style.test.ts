import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const THEMES_STYLE_PATH = resolve(__dirname, 'style.css')
const TORANJA_CSS_PATH = resolve(__dirname, '../toranja.css')

const readThemesStyle = (): string => readFileSync(THEMES_STYLE_PATH, 'utf8')
const readToranjaCss = (): string => readFileSync(TORANJA_CSS_PATH, 'utf8')

describe('themes/style.css document surface', () => {
  it('should apply theme background and text when toranja-theme is set', () => {
    const css = readThemesStyle()

    expect(css).toMatch(
      /:root\[toranja-theme\](?:\s*,\s*:root\[toranja-theme\] body)?\s*\{[^}]*background-color:\s*var\(--color-background-neutral-default\)/,
    )
    expect(css).toMatch(
      /:root\[toranja-theme\](?:\s*,\s*:root\[toranja-theme\] body)?\s*\{[^}]*color:\s*var\(--color-text-neutral-primary\)/,
    )
  })

  it('should allow transparent escape hatch on root and body', () => {
    const css = readThemesStyle()

    expect(css).toMatch(/:root\[toranja-theme\]\.toranja-transparent/)
    expect(css).toMatch(/:root\[toranja-transparent\]/)
    expect(css).toMatch(/background-color:\s*transparent/)
  })

  it('should remain part of the default toranja.css entry via themes/style.css', () => {
    const toranjaEntry = readToranjaCss()

    expect(toranjaEntry).toMatch(/themes\/style\.css/)
    expect(toranjaEntry).not.toMatch(/document\.css/)
  })
})
