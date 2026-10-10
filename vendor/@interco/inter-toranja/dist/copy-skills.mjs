#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */

import fs from 'fs'
import path from 'path'

import { copyMarkdownFiles } from './lib/copy-markdown-files.mjs'

const POSTINSTALL_FLAG = '--check-env'
const isPostinstallMode = process.argv.includes(POSTINSTALL_FLAG)
const cwd = process.cwd()

const packageJsonPath = path.join(cwd, 'package.json')
const packageJson = fs.existsSync(packageJsonPath)
  ? JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))
  : null

const isToranjaProject = packageJson && packageJson.name === '@interco/inter-toranja'

if (isToranjaProject) {
  process.exit(0)
}

if (isPostinstallMode && process.env.TORANJA_GENERATE_SKILLS !== 'true') {
  process.exit(0)
}

const toranjaDistPath = path.join(cwd, 'node_modules', '@interco', 'inter-toranja', 'dist')

const sourceIndexPath = path.join(toranjaDistPath, 'toranja-skill.md')
const sourceComponentsPath = path.join(toranjaDistPath, 'components')
const sourceToranjaScreensPath = path.join(toranjaDistPath, 'core-web-toranja-screens')
const sourceDesktopMigratePath = path.join(toranjaDistPath, 'core-web-toranja-desktop-migrate')

const destBasePath = path.join(cwd, '.cursor', 'skills', 'toranja')
const destIndexPath = path.join(destBasePath, 'toranja-skill.md')
const destComponentsPath = path.join(destBasePath, 'components')
const destToranjaScreensPath = path.join(cwd, '.cursor', 'skills', 'core-web-toranja-screens')
const destDesktopMigratePath = path.join(
  cwd,
  '.cursor',
  'skills',
  'core-web-toranja-desktop-migrate',
)

const ensureDir = (targetPath) => {
  const dir = path.dirname(targetPath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

const main = () => {
  if (!fs.existsSync(sourceIndexPath)) {
    const message =
      'toranja-skill.md não encontrado em node_modules/@interco/inter-toranja/dist/toranja-skill.md'
    if (isPostinstallMode) {
      console.warn(`⚠️  ${message}. Ignorando postinstall.`)
      process.exit(0)
    }
    console.error(`❌ ${message}`)
    process.exit(1)
  }

  ensureDir(destIndexPath)
  fs.copyFileSync(sourceIndexPath, destIndexPath)

  const { copied, count } = copyMarkdownFiles(sourceComponentsPath, destComponentsPath)
  const { copied: copiedToranjaScreens, count: toranjaScreensCount } = copyMarkdownFiles(
    sourceToranjaScreensPath,
    destToranjaScreensPath,
  )

  if (copied && count > 0) {
    console.log(
      `✅ Skills do Toranja copiados para .cursor/skills/toranja/ (índice + ${count} componentes)`,
    )
  } else {
    console.log('✅ Skills do Toranja copiado para .cursor/skills/toranja/toranja-skill.md')
    if (!copied) {
      console.warn('⚠️  Pasta components/ não encontrada. Execute yarn build:skills no pacote.')
    } else {
      console.warn('⚠️  Nenhum arquivo .md encontrado em components/.')
    }
  }

  if (copiedToranjaScreens && toranjaScreensCount > 0) {
    console.log(
      `✅ Skill core-web-toranja-screens copiada para .cursor/skills/core-web-toranja-screens/ (${toranjaScreensCount} arquivos)`,
    )
  } else if (!copiedToranjaScreens) {
    console.warn('⚠️  Pasta core-web-toranja-screens/ nao encontrada no dist do pacote.')
  } else {
    console.warn('⚠️  Nenhum arquivo .md encontrado em dist/core-web-toranja-screens/.')
  }

  const { copied: copiedDesktopMigrate, count: desktopMigrateCount } = copyMarkdownFiles(
    sourceDesktopMigratePath,
    destDesktopMigratePath,
  )

  if (copiedDesktopMigrate && desktopMigrateCount > 0) {
    console.log(
      `✅ Skill core-web-toranja-desktop-migrate copiada para .cursor/skills/core-web-toranja-desktop-migrate/ (${desktopMigrateCount} arquivos)`,
    )
  } else if (!copiedDesktopMigrate) {
    console.warn('⚠️  Pasta core-web-toranja-desktop-migrate/ nao encontrada no dist do pacote.')
  } else {
    console.warn('⚠️  Nenhum arquivo .md encontrado em dist/core-web-toranja-desktop-migrate/.')
  }
}

main()
