#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */
 
import fs from 'fs'
import path from 'path'

import { loadFile } from './component-parser.mjs'

const resolveStoryFilePath = (componentDir) => {
	if (!componentDir || !fs.existsSync(componentDir)) {
		return null
	}
	
	const componentName = path.basename(componentDir)
	const storyFile = path.join(componentDir, `${componentName}.stories.tsx`)
	if (fs.existsSync(storyFile)) {
		return storyFile
	}
	return null
}

const extractBlockByDepth = (content, startKeyword) => {
	const keywordIndex = content.indexOf(startKeyword)
	if (keywordIndex === -1) {
		return null
	}

	const openBraceIndex = content.indexOf('{', keywordIndex + startKeyword.length)
	if (openBraceIndex === -1) {
		return null
	}

	let depth = 1
	let pos = openBraceIndex + 1

	while (pos < content.length && depth > 0) {
		if (content[pos] === '{') {depth++}
		else if (content[pos] === '}') {depth--}
		pos++
	}

	return content.slice(openBraceIndex + 1, pos - 1)
}

const extractFieldBlocks = (block) => {
	const fields = {}
	let pos = 0

	while (pos < block.length) {
		const remaining = block.slice(pos)
		const fieldMatch = remaining.match(/^\s*(\w+)\s*:\s*\{/)
		if (!fieldMatch) {
			const skipMatch = remaining.match(/^\s*(\w+)\s*:/)
			pos += skipMatch ? skipMatch[0].length : 1
			continue
		}

		const fieldName = fieldMatch[1]
		const braceStart = pos + fieldMatch[0].length

		let depth = 1
		let endPos = braceStart

		while (endPos < block.length && depth > 0) {
			if (block[endPos] === '{') {depth++}
			else if (block[endPos] === '}') {depth--}
			endPos++
		}

		fields[fieldName] = block.slice(braceStart, endPos - 1)
		pos = endPos
	}

	return fields
}

const parseArgTypes = (content) => {
	const argTypes = {}

	const argTypesBlock = extractBlockByDepth(content, 'argTypes:')
	if (!argTypesBlock) {
		return argTypes
	}

	const fieldBlocks = extractFieldBlocks(argTypesBlock)

	for (const [fieldName, fieldContent] of Object.entries(fieldBlocks)) {
		const isDisabled = /table\s*:\s*\{[\s\S]*?disable\s*:\s*true/.test(fieldContent)
		if (isDisabled) {
			continue
		}

		const descriptionMatch = fieldContent.match(/description\s*:\s*['"`]([\s\S]+?)['"`]\s*,?\s*\n/)
		const description = descriptionMatch ? descriptionMatch[1].replace(/\s+/g, ' ').trim() : null

		const defaultValueMatch = fieldContent.match(/defaultValue\s*:\s*['"`]?([^,}\n]+)['"`]?/)
		const defaultValue = defaultValueMatch ? defaultValueMatch[1].trim().replace(/^['"`]|['"`]$/g, '') : null

		const optionsMatch = fieldContent.match(/options\s*:\s*\[([^\]]+)\]/)
		let options = null
		if (optionsMatch) {
			const optionsStr = optionsMatch[1]
			if (!optionsStr.includes('Object.values') && !optionsStr.includes('Object.keys')) {
				const optionsArray = optionsStr
					.split(',')
					.map((opt) => opt.trim().replace(/^['"`]|['"`]$/g, ''))
					.filter(Boolean)
				if (optionsArray.length > 0) {
					options = optionsArray
				}
			}
		}

		argTypes[fieldName] = { description, options, defaultValue }
	}

	return argTypes
}

const parseDefaultArgs = (content) => {
	const defaultArgs = {}

	const exportDefaultIndex = content.indexOf('export default')
	if (exportDefaultIndex === -1) {
		return defaultArgs
	}

	const exportDefaultBlock = extractBlockByDepth(content.slice(exportDefaultIndex), '{')
	if (!exportDefaultBlock) {
		return defaultArgs
	}

	const argsIndex = exportDefaultBlock.indexOf('args:')
	if (argsIndex === -1) {
		return defaultArgs
	}

	const argsBlock = extractBlockByDepth(exportDefaultBlock.slice(argsIndex), 'args:')
	if (!argsBlock) {
		return defaultArgs
	}

	const fieldRegex = /(\w+)\s*:\s*([^,}\n]+)/g
	let fieldMatch

	while ((fieldMatch = fieldRegex.exec(argsBlock)) !== null) {
		const fieldName = fieldMatch[1]
		const value = fieldMatch[2].trim().replace(/^['"`]|['"`]$/g, '')
		defaultArgs[fieldName] = value
	}

	return defaultArgs
}

const parseVersion = (content) => {
	const versionMatch = content.match(/version\s*:?\s*([0-9]+\.[0-9]+\.[0-9]+(?:\s*\([^)]+\))?)/)
	if (versionMatch) {
		return versionMatch[1].trim()
	}
	return null
}

const parseSourceExamples = (content) => {
	const examples = {}

	const matches = content.matchAll(/(\w+)\.parameters\s*=\s*\{[\s\S]*?code\s*:\s*`([\s\S]*?)`/g)

	for (const match of matches) {
		const storyName = match[1]
		const code = match[2].trim()
		if (code) {
			examples[storyName] = code
		}
	}

	return examples
}

const parseStory = (componentDir) => {
	const storyFilePath = resolveStoryFilePath(componentDir)
	if (!storyFilePath || !fs.existsSync(storyFilePath)) {
		return null
	}

	const content = loadFile(storyFilePath)

	const argTypes = parseArgTypes(content)
	const defaultArgs = parseDefaultArgs(content)
	const version = parseVersion(content)
	const examples = parseSourceExamples(content)

	return {
		argTypes,
		defaultArgs,
		version,
		examples,
	}
}

export { parseStory }
