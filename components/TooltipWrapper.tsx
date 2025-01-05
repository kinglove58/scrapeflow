"use client";

import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Props {
  children: ReactNode;
  content: ReactNode;
  size?: 'top' | 'bottom' | 'left' | 'right';
}

function TooltipWrapper(props: Props) {
  return (
    <TooltipProvider delayDuration={10} >

    </TooltipProvider>
  )
}

export default TooltipWrapper;
