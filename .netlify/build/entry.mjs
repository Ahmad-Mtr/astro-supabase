import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_JiMHtlFt.mjs';

const _page0  = () => import('./chunks/generic_6wkLjbnQ.mjs');
const _page1  = () => import('./chunks/index_OfSDnJde.mjs');
const _page2  = () => import('./chunks/dashboard_tlhgUxcW.mjs');
const _page3  = () => import('./chunks/register_31loTHBE.mjs');
const _page4  = () => import('./chunks/signin_b7lssE3y.mjs');
const _page5  = () => import('./chunks/guestbook_Ya5_u-7b.mjs');
const _page6  = () => import('./chunks/callback_EnYLchNH.mjs');
const _page7  = () => import('./chunks/register_rtoZoHkx.mjs');
const _page8  = () => import('./chunks/signout_QMsnDjFi.mjs');
const _page9  = () => import('./chunks/signin_xnif000P.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@4.0.7/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/dashboard.astro", _page2],["src/pages/register.astro", _page3],["src/pages/signin.astro", _page4],["src/pages/api/guestbook.ts", _page5],["src/pages/api/auth/callback.ts", _page6],["src/pages/api/auth/register.ts", _page7],["src/pages/api/auth/signout.ts", _page8],["src/pages/api/auth/signin.ts", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"aa842412-aec1-4a83-a119-83c0a32659eb"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
