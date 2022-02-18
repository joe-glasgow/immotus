import * as fs from 'fs';
import * as path from 'path';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { render } from './dist/server/entry-server';

const toAbsolute = (p: string) => path.resolve(__dirname, p);

const template = fs.readFileSync(toAbsolute('dist/static/index.html'), 'utf-8');

// determine routes to pre-render from src/pages
const routesToPrerender = fs.readdirSync(toAbsolute('src/pages'))
  .map((file: string) => {
    const name = file.replace(/\.tsx$/, '').toLowerCase();
    return name === 'home' ? '/' : `/${name}`;
  });
// eslint-disable-next-line no-void
void (async () => {
  // pre-render each route...
  // eslint-disable-next-line no-restricted-syntax
  for (const url of routesToPrerender) {
    const context = {};
    // eslint-disable-next-line
    const appHtml = await render(url, context);

    const html = template.replace('<!--app-html-->', appHtml);

    const filePath = `dist/static${url === '/' ? '/index' : url}.html`;
    fs.writeFileSync(toAbsolute(filePath), html);
    // eslint-disable-next-line no-console
    console.log('pre-rendered:', filePath);
  }
})();
