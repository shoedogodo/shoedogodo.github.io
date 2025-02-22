import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as renderSlot } from './astro/server_DNlPuX8q.mjs';
import 'kleur/colors';
import { $ as $$BasicLayout } from './BasicLayout_D8dDbEti.mjs';

const $$Astro = createAstro("https://gianmarcocavallo.com/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BasicLayout", $$BasicLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate`  ${renderSlot($$result2, $$slots["default"])} `, "loader": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="loader bg-darkslate-700 text-neutral-50 text-3xl font-black uppercase flex justify-center items-center w-screen h-screen z-50 fixed top-0 bottom-0 right-0 left-0"></div>` })}`;
}, "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
