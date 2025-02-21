/* empty css                                */
import { a as createComponent, f as renderScript, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DNlPuX8q.mjs';
import 'kleur/colors';
import { G as GlobeComponent } from '../chunks/Globe_DHr_NAKC.mjs';
import { $ as $$BasicLayout } from '../chunks/BasicLayout_D8dDbEti.mjs';
export { renderers } from '../renderers.mjs';

const $$Travel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/pages/travel.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": "Gianmarco Cavallo - Visited Countries", "description": "A 3d globe showing countries that I have visited so far", "page": "travel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="text-white absolute bg-neutral-900 hover:bg-neutral-800 top-4 left-4 px-4 py-2 border-1 border-solid border-neutral-600 rounded-lg">Back</a> ${renderComponent($$result2, "Globe", GlobeComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/components/Globe", "client:component-export": "default" })} ` })}`;
}, "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/pages/travel.astro", void 0);

const $$file = "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/pages/travel.astro";
const $$url = "/travel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Travel,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
