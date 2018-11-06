import('./polyfills.js' /* webpackChunkName: "polyfills" */)
  .then(() => import('./chunk.js' /* webpackPreload: true, webpackChunkName: "chunk" */))