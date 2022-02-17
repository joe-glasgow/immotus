Immotus
=======

###### _\-beta_

**Note:** Due to issues with SSR in Material UI and styled-components, this project currently uses yarn. However when resolved it is intended to be agnostic of either _yarn_ or _npm_.

Structure:

* * *

Routing

Routing is determined by pages created in the _src/pages_ folder. This page is an example!

Take a look at _src/config/Routes.tsx_ to see how this is done - completely yoinked from [Omar Elhawary](https://omarelhawary.me/blog/file-based-routing-with-react-router-upgrading-to-v6). I heartily recommend reading the full set of articles.

* * *

Pre-render

Pre-rendering and building client/server assets is based on the [official vite docs](https://vitejs.dev/guide/ssr.html) on SSR

* * *

Local Static Server

A local static server (_static-server.ts_) is used to show how the static generated site (_dist/static_) will behave in a production like environment.

* * *

Basic setup:

`$ yarn install`

Pre-requisite step.

`$ yarn run dev`

Run the development server (NB: this is not statically generated). URL: _localhost:3000_

`$ yarn run static`

Run the static site locally (using NodeJS). URL: _localhost:5000_

`$ yarn run storybook`

Run storybook. URL: _localhost:6006_

Home

v0.0.0-beta.1