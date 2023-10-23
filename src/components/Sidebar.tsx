"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";

type SidebarProps = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
        icon: HiHome,
      },
      {
        label: "Search",
        active: pathname === "/search",
        href: "/search",
        icon: BiSearch,
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full ">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>Sidebar navigation</Box>
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">Song library</Box>
      </div>
    </div>
  );
}
