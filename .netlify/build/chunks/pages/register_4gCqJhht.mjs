/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_SxPedmK9.mjs';
import { $ as $$Base } from './dashboard_31CJQUfJ.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const title = "Register";
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-1 flex flex-col gap-4 items-center p-4 justify-center"> <section class="w-full max-w-md"> <h1 class="font-semibold text-2xl dark:text-zinc-100 text-zinc-900 w-full mb-1"> ${title} </h1> <p class="text-zinc-500 dark:text-zinc-400 text-sm mb-8 w-full">
Already have an account? <a href="/signin" class="dark:text-blue-400 text-blue-600 underline underline-offset-2 font-medium">Sign in</a> </p> <form action="/api/auth/register" method="post" class="grid grid-cols-1 gap-3 w-full"> <div class="grid grid-cols-1 gap-2"> <label for="email" class="font-medium dark:text-zinc-300 text-zinc-900 text-sm">Email</label> <input id="email" type="email" name="email" class="rounded-md py-1 px-3 dark:bg-zinc-800 dark:text-zinc-300 border bg-zinc-50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:bg-zinc-900 focus:bg-white focus:ring-opacity-60"> </div> <div class="grid grid-cols-1 gap-2"> <label for="password" class="font-medium dark:text-zinc-300 text-zinc-900 text-sm">Password</label> <input id="password" type="password" name="password" class="rounded-md py-1 px-3 dark:bg-zinc-800 dark:text-zinc-300 border bg-zinc-50 border-zinc-300 dark:border-zinc-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:bg-zinc-900 focus:bg-white focus:ring-opacity-60"> </div> <button type="submit" class="dark:bg-zinc-100 bg-zinc-900 border-zinc-900 py-1.5 border dark:border-zinc-100 rounded-md mt-4 dark:text-zinc-900 text-zinc-100 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed">Register</button> </form> </section> </main> ` })}`;
}, "/project/workspace/src/pages/register.astro", void 0);

const $$file = "/project/workspace/src/pages/register.astro";
const $$url = "/register";

export { $$Register as default, $$file as file, $$url as url };
