"use client";

import { useState } from "react";
import { Database } from "../../types_db";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

type SupabaseProviderProps = {
  children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children,
}: SupabaseProviderProps) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const supabaseKey = process.env.NEXT_PUBLIC_ANON_KEY ?? "";

  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>({
      supabaseKey,
      supabaseUrl,
    })
  );

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
