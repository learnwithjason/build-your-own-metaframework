import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Link, Router } from 'wouter';
import { lazyRoute } from '@vinxi/react';
import { getManifest } from 'vinxi/manifest';
import fileRoutes from 'vinxi/routes';
import { pathToRegexp } from 'path-to-regexp';
import { Counter } from './counter';
import { PostList } from './post-list';

const routes = fileRoutes.map((route) => {
  return {
    ...route,
    component: lazyRoute(
      route.$component,
      getManifest('client'),
      getManifest('client'),
    ),
  };
});

const convertPathToRegexp = (path: string) => {
  let keys = [];
  const pattern = pathToRegexp(path, keys, { strict: true });
  return { keys, pattern };
};

createRoot(document.getElementById('root')!).render(
  <Suspense>
    <Router parser={convertPathToRegexp}>
      <img src="./hat.jpg" alt="hat" width="200" height="200" />

      <nav>
        {routes.map((route) => (
          <Link to={route.path}>{route.path}</Link>
        ))}
      </nav>

      {routes.map((route) => (
        <Route path={route.path} component={route.component} />
      ))}
    </Router>
  </Suspense>,
);
