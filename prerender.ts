import * as fs from 'fs'
import * as path from 'path'
import {render} from './dist/server/entry-server.js'

const toAbsolute = (p: string) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8')

// determine routes to pre-render from src/pages
const routesToPrerender = fs.readdirSync(toAbsolute('src/pages'))
    .map((file: string) => {
        const name = file.replace(/\.tsx$/, '').toLowerCase()
        return name === 'home' ? `/` : `/${name}`
    })

;(async () => {
    // pre-render each route...
    for (const url of routesToPrerender) {
        const context = {}
        const appHtml = await render(url, context)

        const html = template.replace(`<!--app-html-->`, appHtml)

        const filePath = `dist/static${url === '/' ? '/index' : url}.html`
        fs.writeFileSync(toAbsolute(filePath), html)
        console.log('pre-rendered:', filePath)
    }
})()