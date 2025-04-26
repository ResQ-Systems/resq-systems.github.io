import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import fg from 'fast-glob'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Get all .html files in the pages directory
const htmlFiles = fg.sync('*.html', { cwd: __dirname })

// Convert to an object for rollup input
const input = Object.fromEntries(
    htmlFiles.map(file => {
        const name = file.replace(/\.html$/, '')
        return [name, resolve(__dirname, file)]
    })
)

export default defineConfig({
    build: {
        rollupOptions: {
            input
        },
    },
    plugins: []
})
