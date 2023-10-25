import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Song } from "../../types";
import { cookies } from "next/headers";

const getSongs = async (): Promise<Song[]> => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY ?? "";

  const supabase = createServerComponentClient(
    {
      cookies,
    },
    {
      supabaseKey,
      supabaseUrl,
    }
  );

  const { data, error } = await supabase
    .from("songs")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getSongs;
