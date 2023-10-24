"use client";

type UserProviderProps = {
  children: React.ReactNode;
};

import { MyUserContextProvider } from "@/hooks/useUser";
import React from "react";

export default function UserProvider({ children }: UserProviderProps) {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
}
