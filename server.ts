import { ViteDevServer } from 'vite';
import * as fs from 'fs';
import * as path from 'path';
import { Request, Response } from 'express';

const express = require('express');

// @ts-ignore
const isTest = process.env.NODE_ENV === 'test' || !!process.env.VITE_TEST_BUILD;

process.env.MY_CUSTOM_SECRET = 'API_KEY_qwertyuiop';

export async function createServer(
  root = process.cwd(),
  isProd = process.env.NODE_ENV === 'production',
) {
  const resolve = (p: string) => path.resolve(__dirname, p);

  const indexProd = isProd
    ? fs.readFileSync(resolve('dist/client/index.html'), 'utf-8')
    : '';

  const app = express();

  /**
     * @type {import('vite').ViteDevServer}
     */
  const vite: ViteDevServer = await require('vite').createServer({
    root,
    logLevel: isTest ? 'error' : 'info',
    server: {
      middlewareMode: 'ssr',
      watch: {
        // During tests we edit the files too fast and sometimes chokidar
        // misses change events, so enforce polling for consistency
        usePolling: true,
        interval: 100,
      },
    },
  });
  if (!isProd) {
    // use vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    app.use(require('compression')());
    app.use(
      require('serve-static')(resolve('dist/client'), {
        index: false,
      }),
    );
  }

  app.use('*', async (req: Request, res: Response) => {
    try {
      const url: any = req.originalUrl;

      let template; let
        render;
      if (!isProd) {
        // always read fresh template in dev
        template = fs.readFileSync(resolve('index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule('/src/entry-server.tsx')).render;
      } else {
        template = indexProd;
        render = require('./dist/server/entry-server.js').render;
      }

      const context: any = {};
      const appHtml = render(url, context);
      console.log(url);

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        return res.redirect(301, context.url);
      }

      const html = template.replace('<!--app-html-->', appHtml);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e: any) {
      !isProd && vite.ssrFixStacktrace(e);
      console.log(e.stack);
      res.status(500).end(e.stack);
    }
  });
  /* ts-ignore */
  return { app, vite: vite || {} };
}

if (!isTest) {
  /* ts-ignore */
  createServer().then(({ app }): any => app.listen(3000, () => {
    console.log('http://localhost:3000');
  }));
}

// // for test use
module.exports.createServer = createServer;
