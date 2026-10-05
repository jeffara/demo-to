#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */
 
import fs from 'fs'
import path from 'path'

import { loadFile } from './component-parser.mjs'
import { parseStory } from './story-parser.mjs'

const parseTypesBarrel = (content) => {
	const lines = content.split('\n')
	const results = []

	for (const line of lines) {
		const trimmed = line.trim()
		if (!trimmed.startsWith('export type')) {
			continue
		}

		const typeMatch = trimmed.match(/export\s+type\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"]/)
		if (!typeMatch) {
			continue
		}

		const typeNames = typeMatch[1]
			.split(',')
			.map((name) => name.trim())
			.filter(Boolean)
			.map((name) => name.replace(/\s+as\s+.+$/, '').trim())

		const typesPath = typeMatch[2]

		results.push({
			typesPath,
			typeNames,
		})
	}

	return results
}

/**
 * Extract ALL exported types, interfaces, and enums from a component types file
 * Returns both name and kind (type, interface, enum)
 */
const parseAllTypesFromFile = (content) => {
	const lines = content.split('\n')
	const results = []

	for (const line of lines) {
		const trimmed = line.trim()
		
		const match = trimmed.match(/export\s+(type|interface|enum)\s+(\w+)/)
		if (!match) {
			continue
		}

		const kind = match[1]
		const name = match[2]

		results.push({
			name,
			kind,
		})
	}

	return results
}

const resolveTypesFilePath = (typesPath, rootDir) => {
	let resolvedPath
	if (typesPath.startsWith('@/')) {
		resolvedPath = path.join(rootDir, 'src', typesPath.replace('@/', ''))
	} else {
		resolvedPath = path.resolve(rootDir, typesPath)
	}

	if (fs.existsSync(`${resolvedPath}.ts`)) {
		return `${resolvedPath}.ts`
	}

	if (fs.existsSync(`${resolvedPath}.tsx`)) {
		return `${resolvedPath}.tsx`
	}

	if (fs.existsSync(resolvedPath)) {
		return resolvedPath
	}

	return `${resolvedPath}.ts`
}

const deriveComponentMeta = (typesPath) => {
	const pathParts = typesPath.replace('@/', '').split('/')
	const componentIndex = pathParts.indexOf('components')
	if (componentIndex === -1) {
		return null
	}

	const category = pathParts[componentIndex + 1]

	let componentName
	const typesIndex = pathParts.indexOf('types')
	if (typesIndex !== -1 && typesIndex > componentIndex + 1) {
		componentName = pathParts[typesIndex - 1]
	} else {
		const lastPart = pathParts[pathParts.length - 1]
		if (lastPart === 'types' || lastPart.endsWith('.ts') || lastPart.endsWith('.tsx')) {
			componentName = pathParts[pathParts.length - 2]
		} else {
			componentName = lastPart.replace(/\.(ts|tsx)$/, '')
		}
	}

	const kebabName = componentName
		.replace(/([A-Z])/g, '-$1')
		.toLowerCase()
		.replace(/^-/, '')

	return {
		name: componentName,
		category,
		kebabName,
		typesPath,
	}
}

const deriveComponentDir = (typesPath, rootDir) => {
	let resolvedPath
	if (typesPath.startsWith('@/')) {
		resolvedPath = path.join(rootDir, 'src', typesPath.replace('@/', ''))
	} else {
		resolvedPath = path.resolve(rootDir, typesPath)
	}

	const dirPath = path.dirname(resolvedPath)
	return dirPath
}

const buildComponentMarkdown = (meta, publicTypeNames, allTypesInfo, typesContent, storyData) => {
	const publicTypeSet = new Set(publicTypeNames)
	const internalTypes = allTypesInfo.filter(t => !publicTypeSet.has(t.name))

	let versionLine = ''
	if (storyData?.version) {
		versionLine = `**Versão:** ${storyData.version}\n`
	}

	let typesSection = ''
	if (publicTypeNames.length > 0 || internalTypes.length > 0) {
		let publicTypesBlock = ''
		if (publicTypeNames.length > 0) {
			publicTypesBlock = `### Públicos (via @interco/inter-toranja)
${publicTypeNames.map(name => `- \`${name}\``).join('\n')}
`
		}

		let internalTypesBlock = ''
		if (internalTypes.length > 0) {
			const typesByKind = {
				enum: [],
				interface: [],
				type: [],
			}
			internalTypes.forEach(t => {
				typesByKind[t.kind].push(t.name)
			})

			const typesList = []
			if (typesByKind.enum.length > 0) {
				typesList.push(`**Enums:**\n${typesByKind.enum.map(name => `- \`${name}\``).join('\n')}`)
			}
			if (typesByKind.interface.length > 0) {
				typesList.push(`**Interfaces:**\n${typesByKind.interface.map(name => `- \`${name}\``).join('\n')}`)
			}
			if (typesByKind.type.length > 0) {
				typesList.push(`**Types:**\n${typesByKind.type.map(name => `- \`${name}\``).join('\n')}`)
			}

			internalTypesBlock = `### Internos (importar de @interco/inter-toranja/dist/components/...)
Disponíveis no arquivo types, úteis para SDUI e cenários avançados:

${typesList.join('\n\n')}
`
		}

		typesSection = `
## Tipos Disponíveis

${publicTypesBlock}${internalTypesBlock}
`
	}

	let propsSection = ''
	if (storyData?.argTypes && Object.keys(storyData.argTypes).length > 0) {
		const propsRows = []
		for (const [fieldName, fieldData] of Object.entries(storyData.argTypes)) {
			const description = fieldData.description || '—'
			const options = fieldData.options
				? fieldData.options.join(', ')
				: '—'
			const defaultValue =
				fieldData.defaultValue ||
				storyData.defaultArgs?.[fieldName] ||
				'—'

			propsRows.push(`| ${fieldName} | ${description} | ${options} | ${defaultValue} |`)
		}

		propsSection = `
## Props

| Prop | Descrição | Valores aceitos | Padrão |
|------|-----------|-----------------|--------|
${propsRows.join('\n')}
`
	}

	let examplesSection = ''
	if (storyData?.examples && Object.keys(storyData.examples).length > 0) {
		const exampleBlocks = []
		for (const [storyName, code] of Object.entries(storyData.examples)) {
			const storyDisplayName = storyName
				.replace(/([A-Z])/g, ' $1')
				.replace(/^./, (c) => c.toUpperCase())
				.trim()

			exampleBlocks.push(`### ${storyDisplayName}

\`\`\`tsx
${code}
\`\`\``)
		}

		examplesSection = `
## Exemplos

${exampleBlocks.join('\n\n')}
`
	}

	return `---
name: toranja-${meta.kebabName}
description: Tipos e props do componente ${meta.name} do @interco/inter-toranja.
---

# ${meta.name}

**Categoria:** ${meta.category}
${versionLine}**Importação:**
\`\`\`tsx
import { ${meta.name} } from '@interco/inter-toranja'
\`\`\`
${typesSection}${propsSection}${examplesSection}
## Definição de tipos completa

\`\`\`typescript
${typesContent}
\`\`\`
`
}

const buildComponentSkills = (typesComponentsContent, componentsContent, rootDir, distComponentsDir) => {
	const typeExports = parseTypesBarrel(typesComponentsContent)

	const componentMap = new Map()
	const componentImports = new Map()

	for (const line of componentsContent.split('\n')) {
		const trimmed = line.trim()
		if (!trimmed.startsWith('export {')) {
			continue
		}

		const match = trimmed.match(/export\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"]/)
		if (!match) {
			continue
		}

		const componentNames = match[1]
			.split(',')
			.map((name) => name.trim())
			.filter(Boolean)

		const importPath = match[2]

		for (const componentName of componentNames) {
			componentImports.set(componentName, importPath)
		}
	}

	for (const { typesPath, typeNames } of typeExports) {
		const meta = deriveComponentMeta(typesPath)
		if (!meta) {
			continue
		}

		const typesFilePath = resolveTypesFilePath(typesPath, rootDir)

		if (!fs.existsSync(typesFilePath)) {
			window.console.warn(`⚠️  Types file not found: ${typesFilePath}`)
			continue
		}

		const typesContent = loadFile(typesFilePath)
		const allTypesInFile = parseAllTypesFromFile(typesContent)
		const componentDir = deriveComponentDir(typesPath, rootDir)
		const storyData = componentDir ? parseStory(componentDir) : null

		if (!componentMap.has(meta.kebabName)) {
			componentMap.set(meta.kebabName, {
				meta,
				publicTypeNames: new Set(),
				allTypesInfo: allTypesInFile,
				typesContent,
				storyData,
			})
		}

		const existing = componentMap.get(meta.kebabName)
		typeNames.forEach((typeName) => existing.publicTypeNames.add(typeName))
		if (storyData && !existing.storyData) {
			existing.storyData = storyData
		}
	}

	const componentSkills = []

	for (const [kebabName, { meta, publicTypeNames, allTypesInfo, typesContent, storyData }] of componentMap) {
		const sortedPublicTypeNames = Array.from(publicTypeNames).sort((a, b) => a.localeCompare(b))

		const markdown = buildComponentMarkdown(meta, sortedPublicTypeNames, allTypesInfo, typesContent, storyData)
		const outputPath = path.join(distComponentsDir, `${kebabName}.md`)
		fs.writeFileSync(outputPath, markdown)

		const importPath = componentImports.get(meta.name) || `@/components/${meta.category}/${meta.name}/${meta.name}`

		componentSkills.push({
			name: meta.name,
			kebabName,
			typeNames: sortedPublicTypeNames,
			importPath,
		})
	}

	return componentSkills.sort((a, b) => a.name.localeCompare(b.name))
}

export { buildComponentSkills }
