"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  ShieldCheckIcon,
} from "lucide-react";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { Sheet } from "./ui/sheet";

const routes = [
  {
    href: "",
    label: "Home",
    icon: HomeIcon,
  },
  {
    href: "workflows",
    label: "Workflows",
    icon: Layers2Icon,
  },
  {
    href: "credentials",
    label: "Credentials",
    icon: ShieldCheckIcon,
  },
  {
    href: "billing",
    label: "Billing",
    icon: CoinsIcon,
  },
];

function DesktopSidebar() {
  const pathName = usePathname();
  const activeRoute = routes.find(
    (route) =>
      (route.href.length > 0 && pathName.includes(route.href)) || routes[0]
  );
  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate">
      <div className="flex justify-center items-center gap-2 border-b-[1px] border-separate p-4">
        <Logo />
      </div>

      <div className="p-2">TODO: CREDITS</div>
      <div className="flex flex-col p-2 py-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute?.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function MobileSizeView() {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname();
  const activeRoute = routes.find(
    (route) =>
      (route.href.length > 0 && pathName.includes(route.href)) || routes[0]
  );

  return (
    <div className="md:hidden block bg-background border-separate ">
      <nav className="flex container items-center justify-between px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}></Sheet>
      </nav>

      <div className="p-2">TODO: CREDITS</div>
      <div className="flex flex-col p-2 py-4">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute?.href === route.href
                  ? "sidebarActiveItem"
                  : "sidebarItem",
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DesktopSidebar;
