"use client";

import { Card, CardContent } from "@/components/ui/card";
import { workflowStatus } from "@/types/workflow";
import { workflow } from "@prisma/client";
import React from "react";

function WorkflowCard({ workflow }: { workflow: workflow }) {
  const isDraft = workflow.status === workflowStatus.DRAFT;
  return (
    <Card className="border border-separate shadow-sm rounded-lg overflow-hidden hover:shadow-md dark:shadow-primary/30" >
        <CardContent>
            <div className=""></div>
        </CardContent>
    </Card>
  )
}

export default WorkflowCard;
