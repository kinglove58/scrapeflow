"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { workflowStatus } from "@/types/workflow";
import { workflow } from "@prisma/client";
import {
  FileTextIcon,
  MoreVerticalIcon,
  PlayIcon,
  ShuffleIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import TooltipWrapper from "@/components/TooltipWrapper";

function WorkflowCard({ workflow }: { workflow: workflow }) {
  const isDraft = workflow.status === workflowStatus.DRAFT;

  const statusColors = {
    [workflowStatus.DRAFT]: "bg-yellow-400 text-yellow-600",
    [workflowStatus.PUBLISHED]: "bg-primary ",
  };
  return (
    <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
      <CardContent className="p-4 items-center flex justify-between h-[100px]">
        <div className="flex items-center space-x-3 justify-end ">
          <div
            className={cn(
              "h-10 w-10 rounded-full flex items-center justify-center bg-red-500 ",
              statusColors[workflow.status as workflowStatus]
            )}
          >
            {isDraft ? (
              <FileTextIcon className="h-5 w-5" />
            ) : (
              <PlayIcon className="h-5 w-5 text-white" />
            )}
          </div>
          <div className="text-base font-bold text-muted-foreground flex items-center">
            <Link
              href={`/workflow/editor/${workflow.id}`}
              className="flex items-center hover:underline"
            >
              {workflow.name}
            </Link>
            {isDraft && (
              <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                Draft
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href={`/workflow/editor/${workflow.id}`}
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "sm",
              }),
              "flex items-center gap-4"
            )}
          >
            {" "}
            <ShuffleIcon /> Edit
          </Link>
          <WorkflowActions />
        </div>
      </CardContent>
    </Card>
  );
}

function WorkflowActions() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"outline"} size={"sm"}>
          <TooltipWrapper content={"More actions"} >
          <MoreVerticalIcon size={18} />
          </TooltipWrapper>
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  );
}

export default WorkflowCard;