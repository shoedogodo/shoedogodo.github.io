import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_Xjyr4JHq.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/_id_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/rss.xml.astro.mjs');
const _page4 = () => import('./pages/travel.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/[id].astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/rss.xml.js", _page3],
    ["src/pages/travel.astro", _page4],
    ["src/pages/index.astro", _page5]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "44e442df-54cc-4f71-9b61-d85d465d2c54"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
