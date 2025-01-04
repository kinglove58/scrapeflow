"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { workflowStatus } from "@/types/workflow";
import { workflow } from "@prisma/client";
import { FileTextIcon, PlayIcon } from "lucide-react";
import React from "react";

function WorkflowCard({ workflow }: { workflow: workflow }) {
  const isDraft = workflow.status === workflowStatus.DRAFT;
  return (
    <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30">
      <CardContent>
        <div
          className={cn(
            "h-5 w-5 rounded-full flex items-center justify-center bg-red-500 "
          )}
        >
          {isDraft ? (
            <FileTextIcon className="h-5 w-5" />
          ) : (
            <PlayIcon className="h-5 w-5 text-white" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default WorkflowCard;
