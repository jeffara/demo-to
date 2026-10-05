/* eslint-disable @typescript-eslint/explicit-function-return-type */
 
import fs from 'fs'
import path from 'path'

const REFERENCE_REGEX = /^\{(.+)\}$/

const toKebabCase = (value) =>
	value
		.replace(/[_\s]+/g, '-')
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.replace(/-+/g, '-')
		.toLowerCase()

const toCssVarName = (tokenPath) => `--${toKebabCase(tokenPath.replace(/\./g, '-'))}`

const flattenTokens = (node, prefix = '', map = {}) => {
	if (node && typeof node === 'object' && !Array.isArray(node)) {
		if (Object.prototype.hasOwnProperty.call(node, '$value')) {
			const key = prefix
			map[key] = node.$value
			return map
		}

		Object.entries(node).forEach(([key, value]) => {
			if (key.startsWith('$')) {
				return
			}
			const nextPrefix = prefix ? `${prefix}.${key}` : key
			flattenTokens(value, nextPrefix, map)
		})
	}
	return map
}

const buildTokenMap = (tokens) => {
	const map = {}

	tokens.forEach((token) => {
		flattenTokens(token.json, '', map)
	})

	const resolveValue = (rawValue, visited = new Set()) => {
		if (typeof rawValue !== 'string') {
			return rawValue
		}

		const match = rawValue.match(REFERENCE_REGEX)
		if (!match) {
			return rawValue
		}

		const referencePath = match[1]
		if (visited.has(referencePath)) {
			return rawValue
		}

		const referenced = map[referencePath]
		if (!referenced) {
			return rawValue
		}

		visited.add(referencePath)
		return resolveValue(referenced, visited)
	}

	const resolved = {}
	Object.entries(map).forEach(([tokenPath, rawValue]) => {
		resolved[tokenPath] = resolveValue(rawValue)
	})

	return resolved
}

export const loadTokenFile = (tokensDir, fileName) => {
	const filePath = path.join(tokensDir, fileName)
	return {
		name: fileName,
		json: JSON.parse(fs.readFileSync(filePath, 'utf-8')),
	}
}

export const parseGlobalTokens = (globalJson) => {
	const [resolved] = [
		buildTokenMap([
			{
				name: 'global',
				json: globalJson,
			},
		]),
	]

	return Object.entries(resolved)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([tokenPath, value]) => ({
			name: toCssVarName(tokenPath),
			value,
		}))
}

export const parseThemeTokens = ({ pfLight, pfDark, pjLight, pjDark, globalJson }) => {
	const baseTokens = globalJson ? [{ name: 'global', json: globalJson }] : []

	const maps = {
		pfLight: buildTokenMap([...baseTokens, { name: 'pfLight', json: pfLight }]),
		pfDark: buildTokenMap([...baseTokens, { name: 'pfDark', json: pfDark }]),
		pjLight: buildTokenMap([...baseTokens, { name: 'pjLight', json: pjLight }]),
		pjDark: buildTokenMap([...baseTokens, { name: 'pjDark', json: pjDark }]),
	}

	const allKeys = new Set(
		Object.values(maps).flatMap((tokenMap) => Object.keys(tokenMap)),
	)

	return Array.from(allKeys)
		.sort((a, b) => a.localeCompare(b))
		.map((tokenPath) => ({
			name: toCssVarName(tokenPath),
			pfLight: maps.pfLight[tokenPath],
			pfDark: maps.pfDark[tokenPath],
			pjLight: maps.pjLight[tokenPath],
			pjDark: maps.pjDark[tokenPath],
		}))
}

export const formatThemeLine = (token) =>
	`${token.name}: pf-light=${token.pfLight ?? '-'} | pf-dark=${token.pfDark ?? '-'} | pj-light=${
		token.pjLight ?? '-'
	} | pj-dark=${token.pjDark ?? '-'}`
