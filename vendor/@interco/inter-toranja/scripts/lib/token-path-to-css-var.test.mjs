import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const require = createRequire(import.meta.url)
const { toCssVarFromTokenPath } = require('./token-path-to-css-var.cjs')

const scriptsLibDir = dirname(fileURLToPath(import.meta.url))

describe('toCssVarFromTokenPath', () => {
	it('should convert Color.Styles paths to kebab-case CSS variables', () => {
		expect(toCssVarFromTokenPath('Color.Styles.Brand.Default')).toBe('--color-styles-brand-default')
		expect(toCssVarFromTokenPath('Color.Styles.AI.Soft')).toBe('--color-styles-ai-soft')
	})

	it('should stay synced with mode pipeline CSS variable names', () => {
		const modeCss = readFileSync(
			resolve(scriptsLibDir, '../../src/styles/modes/PF/light.css'),
			'utf8',
		)
		const expectedVars = [
			toCssVarFromTokenPath('Color.Styles.Brand.Default'),
			toCssVarFromTokenPath('Color.Styles.AI.Soft'),
		]

		for (const varName of expectedVars) {
			expect(modeCss).toContain(`${varName}:`)
		}
	})
})
