import React, { StrictMode } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Routes } from './config/Routes';

export const render = (location: string) => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(
    <StrictMode>
      <StaticRouter location={location}>
        <Routes />
      </StaticRouter>
    </StrictMode>,
  ));
  const styleTags = sheet.getStyleTags();
  sheet.seal();
  return [styleTags, html];
};
