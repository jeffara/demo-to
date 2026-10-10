#!/usr/bin/env node
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import fs from 'fs'
import path from 'path'

export const copyMarkdownFiles = (sourceDir, destinationDir) => {
  if (!fs.existsSync(sourceDir)) {
    return { copied: false, count: 0 }
  }

  let count = 0

  const walk = (currentSource, currentDest) => {
    if (!fs.existsSync(currentDest)) {
      fs.mkdirSync(currentDest, { recursive: true })
    }

    const entries = fs.readdirSync(currentSource, { withFileTypes: true })

    for (const entry of entries) {
      const sourcePath = path.join(currentSource, entry.name)
      const destPath = path.join(currentDest, entry.name)

      if (entry.isDirectory()) {
        walk(sourcePath, destPath)
        continue
      }

      if (!entry.name.endsWith('.md')) {
        continue
      }

      fs.copyFileSync(sourcePath, destPath)
      count++
    }
  }

  walk(sourceDir, destinationDir)

  return { copied: true, count }
}
