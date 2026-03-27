import 'zone.js/node';
// ... 其他 SSR 程式碼 ...

import 'zone.js/dist/zone-node';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';
import { environment as env } from './src/environments/environment';

import { AppServerModule } from './src/main.server';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), env.production ? 'dist/browser' : 'dist/apps/web/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/main/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
      inlineCriticalCss: false
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Support webhook/redirect POST from 金流 callback
//   server.use(express.urlencoded({ extended: true }));
//   server.use(express.json());

//   server.post('/result/payment-complete', (req, res) => {
//     const payload = JSON.stringify(req.body || {});
//     const safePayload = payload.replace(/</g, '\u003c');

//     return res.send(`<!DOCTYPE html>
// <html lang="zh-TW">
//   <head>
//     <meta charset="utf-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <title>付款完成</title>
//   </head>
//   <body>
//     <p>正在處理付款結果，請稍候…</p>
//     <script>
//       try {
//         localStorage.setItem('paymentCompletePostBody', JSON.stringify(${safePayload}));
//       } catch (err) {
//         console.warn('paymentComplete 存取本地資料失敗', err);
//       }
//       window.location.href = '/result/payment-complete';
//     </script>
//   </body>
// </html>`);
//   });

  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }],
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 80;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
