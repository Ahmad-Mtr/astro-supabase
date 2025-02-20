/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, h as renderComponent, m as maybeRenderHead } from '../astro_SxPedmK9.mjs';
import { s as supabase } from './callback_91tcZ8g-.mjs';
import { ssr, ssrHydrationKey, escape, createComponent as createComponent$1, ssrAttribute } from 'solid-js/web';
import { createResource, ErrorBoundary, For } from 'solid-js';

const $$Astro$1 = createAstro();
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Base;
  const description = "Astro and Supabase demo app";
  const { title } = Astro2.props;
  const canonicalURL = new URL(Astro2.url).href;
  return renderTemplate`<html lang="en" class="h-full w-full"> <head><title>${title}</title><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><!-- <meta property="twitter:image" content={ogImageURL} /> --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><!-- <meta property="og:image" content={ogImageURL} /> --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonicalURL, "content")}>${renderHead()}</head> <body class="flex flex-col h-full w-full dark:bg-zinc-900 bg-zinc-50 dark:text-zinc-100"> <nav class="border-b bg-white dark:bg-zinc-800 dark:border-zinc-700"> <div class="flex items-baseline justify-end sm:justify-between p-4 max-w-screen-xl mx-auto"> <a href="/" class="hidden sm:block font-semibold dark:text-white">Astro</a> <div> <ul class="font-medium flex items-baseline gap-8"> <li> <a href="/dashboard" class="block text-zinc-900 dark:text-gray-200">Dashboard</a> </li> <li> <a href="/register" class="block text-zinc-900 dark:text-gray-200">Register</a> </li> <li> <a href="/signin" class="block text-zinc-900 dark:text-gray-200">Sign in</a> </li> </ul> </div> </div> </nav> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/project/workspace/src/layout/Base.astro", void 0);

const _tmpl$ = ["<form", ' class="block border bg-blue-100 border-blue-300 rounded-md p-6 dark:bg-blue-950 dark:border-blue-800"><div><label class="block mb-1 font-medium dark:text-zinc-300 text-zinc-900 text-sm" for="name">Name</label><input id="name" type="text" placeholder="Sam" required name="name" class="w-full block rounded-md py-1 px-3 dark:bg-zinc-800 dark:text-zinc-300 border bg-zinc-50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:bg-zinc-900 focus:bg-white focus:ring-opacity-60"></div><div class="mt-3"><label class="block mb-1 font-medium dark:text-zinc-300 text-zinc-900 text-sm" for="message">Message</label><input id="message" type="text" class="w-full block rounded-md py-1 px-3 dark:bg-zinc-800 dark:text-zinc-300 border bg-zinc-50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:bg-zinc-900 focus:bg-white focus:ring-opacity-60" placeholder="A friendly message" required name="message"></div><button class="w-full dark:bg-zinc-100 bg-zinc-900 border-zinc-900 py-1.5 border dark:border-zinc-100 rounded-md mt-4 dark:text-zinc-900 text-zinc-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed" type="submit"', ">Submit</button></form>"], _tmpl$2 = ["<ul", ' class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">', "</ul>"], _tmpl$3 = ["<div", ' class="max-w-3xl w-full">', "</div>"], _tmpl$4 = ["<div", ">Something went wrong</div>"], _tmpl$5 = ["<li", ' class="p-4 border rounded-md bg-white dark:bg-zinc-800 dark:border-zinc-700"><p class="text-sm font-medium text-zinc-500 dark:text-zinc-400">', '</p><p class="mt-1">', "</p></li>"];
const fetcher = async (_, {
  refetching,
  value
}) => {
  const res = await fetch("/api/guestbook", {
    method: refetching ? "POST" : "GET",
    body: refetching ? JSON.stringify(refetching) : null
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  const prev = value ?? [];
  return [...data, ...prev];
};
function Reviews({
  reviews
}) {
  const [data, {
    refetch
  }] = createResource(fetcher, {
    initialValue: reviews,
    ssrLoadFrom: "initial"
  });
  return ssr(_tmpl$3, ssrHydrationKey(), escape(createComponent$1(ErrorBoundary, {
    get fallback() {
      return ssr(_tmpl$4, ssrHydrationKey());
    },
    get children() {
      return [ssr(_tmpl$, ssrHydrationKey(), ssrAttribute("disabled", data.loading, true)), ssr(_tmpl$2, ssrHydrationKey(), escape(createComponent$1(For, {
        get each() {
          return data();
        },
        children: (review) => ssr(_tmpl$5, ssrHydrationKey(), escape(review.name), escape(review.message))
      })))];
    }
  })));
}

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const { email } = Astro2.locals;
  const { data } = await supabase.from("guestbook").select("name, message").order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-24 px-4 w-full flex flex-col items-center gap-2"> <p class="max-w-prose text-xl text-indigo-600 dark:text-indigo-400 font-semibold"> ${email} </p> <p class="max-w-prose text-lg mb-2 dark:text-zinc-100">
This is a protected page. You can only see this if you are logged in.
</p> <a href="/api/auth/signout" class="mb-10 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 px-3 py-1 rounded-md">Sign out</a> ${renderComponent($$result2, "Reviews", Reviews, { "reviews": data, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/project/workspace/src/components/Reviews", "client:component-export": "Reviews" })} </section> ` })}`;
}, "/project/workspace/src/pages/dashboard.astro", void 0);

const $$file = "/project/workspace/src/pages/dashboard.astro";
const $$url = "/dashboard";

const dashboard = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Base as $, dashboard as d };
