import { c as createAstro, a as createComponent, b as renderTemplate, d as renderSlot, j as renderHead, u as unescapeHTML, e as addAttribute } from './astro/server_DNlPuX8q.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const LINKS = {
  github: "https://github.com/Ladvace",
  linkedin: "https://www.linkedin.com/in/gianmarco-cavallo/",
  medium: "https://ladvace.medium.com/",
  discord: "https://discordapp.com/users/163300027618295808",
  dribble: "https://dribbble.com/Ladvace_Jace"};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://gianmarcocavallo.com/");
const $$BasicLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BasicLayout;
  const { title, description, page, slug, pubDate } = Astro2.props;
  const image = page === "travel" ? `${Astro2.url.origin}/globe_preview.webp"` : `${Astro2.url.origin}/og-image.png`;
  const schema = page !== "blog" ? {
    "@context": "http://schema.org",
    "@type": "Person",
    name: "Gianmarco",
    url: Astro2.url.origin,
    sameAs: [LINKS.linkedin, LINKS.github],
    image: `${Astro2.url.origin}/og-image.png`,
    jobTitle: "Freelance Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Self-Employed",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Italy",
        addressCountry: "IT"
      }
    },
    nationality: {
      "@type": "Country",
      name: "Italy"
    }
  } : {
    "@context": "http://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${Astro2.url.origin}/blog/${slug}`
    },
    headline: title || title,
    description: description || title,
    image: `${Astro2.url.origin}/og-image.png`,
    //TODO: dynamic
    author: {
      "@type": "Person",
      name: "Gianmarco",
      url: Astro2.url.origin,
      sameAs: [LINKS.linkedin, LINKS.github]
    },
    publisher: {
      "@type": "Organization",
      name: "Gianmarco",
      logo: {
        "@type": "ImageObject",
        url: `${Astro2.url.origin}/og-image.png`
      }
    },
    datePublished: pubDate || (/* @__PURE__ */ new Date()).toISOString(),
    dateModified: pubDate || (/* @__PURE__ */ new Date()).toISOString()
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="/favicon.ico"><meta name="generator"', "><title>", '</title><meta name="description"', `><meta name="robots" content="index, follow"><!-- Basic OG tags for sharing your website's content on platforms like Facebook and LinkedIn --><meta property="og:title"`, '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:image"', '><!-- Basic Twitter Card tags --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="preconnect" href="https://cdn.fontshare.com">', "", '<script type="application/ld+json">', "<\/script>", '</head> <body class="bg-darkslate-700 md:h-screen flex flex-col justify-center items-center"> ', " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url.origin, "content"), addAttribute(image || `${Astro2.url.origin}/og-image.png`, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image || `${Astro2.url.origin}/og-image.png`, "content"), page === "travel" && renderTemplate`<link rel="canonical"${addAttribute(`${Astro2.url.origin}/travel`, "href")}>`, page === "blog" && renderTemplate`<link rel="canonical"${addAttribute(`${Astro2.url.origin}/blog/${slug}`, "href")}>`, unescapeHTML(JSON.stringify(schema)), renderHead(), renderSlot($$result, $$slots["loader"]), renderSlot($$result, $$slots["default"]));
}, "/Users/shoedogodo/Desktop/astro-bento-portfolio/src/layouts/BasicLayout.astro", void 0);

export { $$BasicLayout as $, LINKS as L };
