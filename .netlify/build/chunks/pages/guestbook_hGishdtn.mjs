import { s as supabase } from './callback_91tcZ8g-.mjs';

const GET = async () => {
  const { data, error } = await supabase.from("guestbook").select("*").order("created_at", { ascending: true });
  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify(data));
};
const POST = async ({ request }) => {
  const { name, message } = await request.json();
  const { data, error } = await supabase.from("guestbook").insert({ name, message }).select();
  if (error) {
    return new Response(
      JSON.stringify({
        error: error.message
      }),
      { status: 500 }
    );
  }
  return new Response(JSON.stringify(data));
};

export { GET, POST };
