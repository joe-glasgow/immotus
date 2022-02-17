import React, { StrictMode } from 'react';
import { ServerStyleSheet } from 'styled-components'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'
import './index.css'
import { Routes } from './config/Routes'

export function render(location, context) {
    const sheet = new ServerStyleSheet();
    const html = renderToString(sheet.collectStyles(
        <StrictMode>
            <StaticRouter location={location} context={context}>
                <Routes />
            </StaticRouter>
        </StrictMode>));
    const styleTags = sheet.getStyleTags();
    sheet.seal();
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${styleTags}
    <title>Vite App</title>
  </head>
  <body>
    <div id="app">${html}</div>
  </body>
</html>
    `
}