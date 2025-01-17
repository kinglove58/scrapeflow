"use client";

import TooltipWrapper from "@/components/TooltipWrapper";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  title: string;
}
function Topbar({ title }: Props) {
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
        </div>
      </div>
    </header>
  );
}

export default Topbar;
