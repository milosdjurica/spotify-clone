"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import qs from "query-string";

import useDebounce from "@/hooks/useDebounce";
import Input from "./Input";

export default function SearchInput() {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query: query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
