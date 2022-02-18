import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Button } from '@/components/atoms/Button';

const AboutPage: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography paragraph variant="subtitle2">
        <b>Note:</b>
        {' '}
        Due to issues with SSR in Material UI and
        {/* eslint-disable-next-line max-len */}
        styled-components, this project currently uses yarn. However when resolved it is intended to be agnostic of
        either
        {' '}
        <em>yarn</em>
        {' '}
        or
        {' '}
        <em>npm</em>
        .
      </Typography>
      <Typography paragraph variant="h2">Structure:</Typography>
      <Divider />
      <Typography paragraph variant="h5">Routing</Typography>
      <Typography paragraph>
        Routing is determined by pages created in the
        <em>src/pages</em>
        {' '}
        folder. This page is an example!
      </Typography>
      <Typography paragraph>
        Take a look at
        <em>src/config/Routes.tsx</em>
        {' '}
        to see how this is done - completely yoinked from
        <a target="_blank" href="https://omarelhawary.me/blog/file-based-routing-with-react-router-upgrading-to-v6" rel="noreferrer">Omar Elhawary</a>
        . I heartily recommend reading the full set of articles.
      </Typography>
      <Divider />
      <Typography paragraph variant="h5">Pre-render</Typography>
      <Typography paragraph>
        Pre-rendering and building client/server assets is based on the
        <a target="_blank" href="https://vitejs.dev/guide/ssr.html" rel="noreferrer">official vite docs</a>
        {' '}
        on SSR
      </Typography>
      <Divider />
      <Typography paragraph variant="h5">Local Static Server</Typography>
      <Typography paragraph>
        A local static server (
        <em>static-server.ts</em>
        ) is used to show how the static generated site (
        <em>dist/static</em>
        ) will behave in a production like environment.
        {' '}
      </Typography>
      <Divider />
      <Typography paragraph variant="h2">Basic setup:</Typography>
      <code>
        $ yarn install
      </code>
      <Typography paragraph variant="subtitle1">Pre-requisite step.</Typography>
      <code>
        $ yarn run dev
      </code>
      <Typography paragraph variant="subtitle1">
        Run the development server (NB: this is not statically generated). URL:
        <em>localhost:3000</em>
      </Typography>
      <code>
        $ yarn run static
      </code>
      <Typography paragraph variant="subtitle1">
        Run the static site locally (using NodeJS). URL:
        <em>localhost:5000</em>
      </Typography>
      <code>
        $ yarn run storybook
      </code>
      <Typography paragraph variant="subtitle1">
        Run storybook. URL:
        <em>localhost:6006</em>
      </Typography>

      <Button variant="outlined" onClick={() => navigate('/')}>Home</Button>
    </>
  );
};

export default AboutPage;
