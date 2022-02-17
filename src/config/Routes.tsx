import React, {ElementType, Fragment} from 'react';
import {
    Routes as BrowserRoutes,
    Route,
} from "react-router-dom";

const ROUTES = import.meta.globEager('/src/pages/**/[a-z[]*.tsx');
const PRESERVED: any = import.meta.globEager('/src/pages/(_app|404|index).tsx');

interface IRoute {
    path: string;
    component: ElementType;
}

export const routes: IRoute[] = Object.keys(ROUTES).map((route) => {
    const path: string = route
        .replace(/\/src\/pages|home|\.tsx$/g, '')
        .replace(/\[\.{3}.+\]/, '*')
        .replace(/\[(.+)\]/, ':$1')
    return { path, component: ROUTES[route].default }
})

const preserved: any = Object.keys(PRESERVED).reduce((preserved, file) => {
    const key = file.replace(/\/src\/pages\/|\.tsx$/g, '')
    return {...preserved, [key]: PRESERVED[file].default}
}, {});

export const Routes = (): JSX.Element => {
    const App = preserved?.['_app'] || Fragment
    const NotFound = preserved?.['404'] || Fragment
    return (
        <App>
            <BrowserRoutes>
                {routes.map(({ path, component: Component = Fragment }) => (
                    <Route key={path} path={path} element={<Component/>}  />
                ))}
                <Route path="*" element={<NotFound/>}/>
            </BrowserRoutes>
        </App>
    )
}