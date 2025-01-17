"use client";

import TooltipWrapper from "@/components/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import SaveBtn from "./SaveBtn";

interface Props {
  title: string;
  subtitle?: string;
}

function Topbar({ title, subtitle }: Props) {
  const router = useRouter();
  return (
    <header className="flex justify-between border-p-2 border-separate sticky w-full h-[60px] bg-background z-10 p-2 top-0">
      <div className="flex gap-1 flex-1">
        <TooltipWrapper content="Back">
          <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
            {" "}
            <ChevronLeftIcon size={20} />{" "}
          </Button>
        </TooltipWrapper>
        <div>
          <p className="font-bold text-ellipsis truncate">{title}</p>
          {subtitle && (
            <p className="text-xs truncate text-muted-foreground text-ellipsis ">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-1 gap-1 justify-end">
        <SaveBtn />
      </div>
    </header>
  );
}

export default Topbar;
