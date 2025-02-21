/* empty css                                */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, f as renderScript, r as renderComponent } from '../chunks/astro/server_DNlPuX8q.mjs';
import 'kleur/colors';
import { a as getCollection } from '../chunks/_astro_content_BKsSUvIQ.mjs';
import { $ as $$Layout } from '../chunks/Layout__ZVXy646.mjs';
import 'clsx';
import { f as formatDate } from '../chunks/helpers_D6AROieQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://gianmarcocavallo.com/");
const $$PostRow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostRow;
  const { title, date, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="list-none w-full text-neutral-100 hover:text-neutral-400 ease-in-out transition-colors border-b-neutral-400 border-dashed border-b-1 my-2"> <a class="text-sm md:text-base decoration-none flex justify-between"${addAttribute(`/blog/${id}`, "href")}> <p class="inline-block whitespace-nowrap"> ${title} </p> <time class="text-right tabular-nums"${addAttribute(date.toISOString(), "datetime")}${addAttribute(date.toISOString(), "data-date")}> ${formatDate(date)} </time> </a> </li>`;
}, "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/components/Blog/PostRow.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog"))?.sort(
    (blogEntryA, blogEntryB) => (blogEntryB.data.pubDate || /* @__PURE__ */ new Date()).getTime() - (blogEntryA.data.pubDate || /* @__PURE__ */ new Date()).getTime()
  );
  return renderTemplate`${renderScript($$result, "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "Layout", $$Layout, { "title": "Gianmarco Cavallo - Blog", "description": "Software developer with strong focus on the user experience animations and micro interactions" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-screen h-screen flex flex-col justify-start items-start max-w-3xl mx-auto p-8"> <a href="/" class="text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 mb-8 border-1 border-solid border-neutral-600 rounded-lg">Back</a> <h1 class="text-4xl font-bold mb-4 text-neutral-100">Posts</h1> <ul class="w-full"> ${posts?.map((post) => renderTemplate`${renderComponent($$result2, "PostRow", $$PostRow, { "title": post.data.title || "No title", "date": post.data.pubDate || /* @__PURE__ */ new Date(), "id": post.id })}`)} </ul> </main> ` })}`;
}, "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/pages/blog/index.astro", void 0);

const $$file = "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
