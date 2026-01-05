const { PurgeCSS } = require('purgecss')
const fs = require('fs')
const path = require('path')
const { globSync } = require('glob')

async function runPurgeCSS() {
  console.log('Running PurgeCSS...')
  const cssFiles = fs.readdirSync('src/assets').filter(file => file.endsWith('.css') && file !== 'index.css')
  const contentFiles = globSync('_site/**/*.html', { nodir: true })

  for (const file of cssFiles) {
    const filePath = path.join('src/assets', file)
    console.log(`Checking ${filePath}...`)
    
    try {
      const purgeCSSResults = await new PurgeCSS().purge({
        content: contentFiles,
        css: [filePath],
      })

      if (purgeCSSResults.length > 0) {
        const result = purgeCSSResults[0]
        fs.writeFileSync(filePath, result.css)
        console.log(`Purged ${filePath}`)
      }
    } catch (error) {
      console.error(`Error purging ${filePath}:`, error)
    }
  }
}

runPurgeCSS()
