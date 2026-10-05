#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import fs from 'fs'
import path from 'path'

const extractNamedExports = (content, exportPattern) => {
	const matches = content.matchAll(exportPattern)
	const names = new Set()

	for (const match of matches) {
		const block = match[1]
		block
			.split(',')
			.map((name) => name.trim())
			.filter(Boolean)
			.forEach((name) => names.add(name.replace(/ as .+$/, '').trim()))
	}

	return Array.from(names).sort((a, b) => a.localeCompare(b))
}

export const loadFile = (filePath) =>
	fs.readFileSync(path.resolve(filePath), 'utf-8')

export const parseComponents = (content) =>
	extractNamedExports(content, /export\s+{\s*([^}]+)\s*}\s+from/g)

export const parseTypes = (content) =>
	extractNamedExports(content, /export\s+type\s+{\s*([^}]+)\s*}\s+from/g)
