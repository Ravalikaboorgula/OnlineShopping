
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-35LA4OGJ.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 16887, hash: '8d0e6f77b1b2e8a252500646044d159506d791c76a75fc3588d60bc87801c1ef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17193, hash: 'cbf5203a240403e126f7d3c8dcfcf50ad3bcad46446c64e50f366596aa913dc3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-E5R2EAIZ.css': {size: 82, hash: '4d0yQrSNbBg', text: () => import('./assets-chunks/styles-E5R2EAIZ_css.mjs').then(m => m.default)}
  },
};
