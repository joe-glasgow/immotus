import React, { ElementType, Fragment } from 'react';
import {
  Routes as BrowserRoutes,
  Route,
} from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const ROUTES = import.meta.globEager('/src/pages/**/[a-z[]*.tsx');
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const PRESERVED = import.meta.globEager('/src/pages/(_app|404|index).tsx');

interface IRoute {
  path: string;
  component: ElementType;
}

interface IPreserved {
  [key: string]: ElementType
}

export const routes: IRoute[] = Object.keys(ROUTES).map((route) => {
  const path: string = route
    .replace(/\/src\/pages|home|\.tsx$/g, '')
    .replace(/\[\.{3}.+\]/, '*')
    .replace(/\[(.+)\]/, ':$1');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { path, component: ROUTES[route].default };
});

const preserved: IPreserved = Object.keys(PRESERVED).reduce((pres, file) => {
  const key: string = file.replace(/\/src\/pages\/|\.tsx$/g, '');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  return { ...pres, [key]: PRESERVED[file].default };
}, {});

export function Routes(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const App: ElementType = preserved?._app || Fragment;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const NotFound: ElementType = preserved?.['404'] || Fragment;
  return (
    <App>
      <BrowserRoutes>
        {routes.map(({ path, component: Component = Fragment }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </BrowserRoutes>
    </App>
  );
}
