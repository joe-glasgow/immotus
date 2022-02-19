import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import { Routes } from './config/Routes';

render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('app'),
);
