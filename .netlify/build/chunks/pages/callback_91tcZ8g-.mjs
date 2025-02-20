import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  "https://hzlinevwocfqernpmane.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bGluZXZ3b2NmcWVybnBtYW5lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5Njc4NzksImV4cCI6MjA1NTU0Mzg3OX0.lK2HruEJATF3NqefgMUH1snlBAl3k7YkVRp5ktB9R78",
  {
    auth: {
      flowType: "pkce",
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: true
    }
  }
);

const GET = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");
  if (!authCode) {
    return new Response("No code provided", { status: 400 });
  }
  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  const { access_token, refresh_token } = data.session;
  cookies.set("sb-access-token", access_token, {
    path: "/",
    secure: true,
    httpOnly: true
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
    secure: true,
    httpOnly: true
  });
  return redirect("/dashboard");
};

const callback = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

export { callback as c, supabase as s };
