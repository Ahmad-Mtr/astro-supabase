import './chunks/astro_SxPedmK9.mjs';
import { s as supabase } from './chunks/pages/callback_91tcZ8g-.mjs';
import micromatch from 'micromatch';

function sequence(...handlers) {
  const filtered = handlers.filter((h) => !!h);
  const length = filtered.length;
  if (!length) {
    const handler = defineMiddleware((context, next) => {
      return next();
    });
    return handler;
  }
  return defineMiddleware((context, next) => {
    return applyHandle(0, context);
    function applyHandle(i, handleContext) {
      const handle = filtered[i];
      const result = handle(handleContext, async () => {
        if (i < length - 1) {
          return applyHandle(i + 1, handleContext);
        } else {
          return next();
        }
      });
      return result;
    }
  });
}

function defineMiddleware(fn) {
  return fn;
}

const protectedRoutes = ["/dashboard(|/)"];
const redirectRoutes = ["/signin(|/)", "/register(|/)"];
const proptectedAPIRoutes = ["/api/guestbook(|/)"];
const onRequest$1 = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {
    if (micromatch.isMatch(url.pathname, protectedRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");
      if (!accessToken || !refreshToken) {
        return redirect("/signin");
      }
      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value
      });
      if (error) {
        cookies.delete("sb-access-token", {
          path: "/"
        });
        cookies.delete("sb-refresh-token", {
          path: "/"
        });
        return redirect("/signin");
      }
      locals.email = data.user?.email;
      cookies.set("sb-access-token", data?.session?.access_token, {
        sameSite: "strict",
        path: "/",
        secure: true
      });
      cookies.set("sb-refresh-token", data?.session?.refresh_token, {
        sameSite: "strict",
        path: "/",
        secure: true
      });
    }
    if (micromatch.isMatch(url.pathname, redirectRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");
      if (accessToken && refreshToken) {
        return redirect("/dashboard");
      }
    }
    if (micromatch.isMatch(url.pathname, proptectedAPIRoutes)) {
      const accessToken = cookies.get("sb-access-token");
      const refreshToken = cookies.get("sb-refresh-token");
      if (!accessToken || !refreshToken) {
        return new Response(
          JSON.stringify({
            error: "Unauthorized"
          }),
          { status: 401 }
        );
      }
      const { error } = await supabase.auth.setSession({
        access_token: accessToken.value,
        refresh_token: refreshToken.value
      });
      if (error) {
        return new Response(
          JSON.stringify({
            error: "Unauthorized"
          }),
          { status: 401 }
        );
      }
    }
    return next();
  }
);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
