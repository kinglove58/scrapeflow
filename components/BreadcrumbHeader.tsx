"use client";

import { usePathname } from "next/navigation";
import React from "react";

function BreadcrumbHeader() {
  const pathName = usePathname();
  const path = pathName === "/" ? [""] : pathName?.split("/");
  return <div className="flex items-center flex-start"><Brea</div>;
}

export default BreadcrumbHeader;
