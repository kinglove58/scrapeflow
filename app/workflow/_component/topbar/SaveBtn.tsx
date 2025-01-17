"use client";

import { UpdateWorkflow } from "@/action/workflow/updateWorkflow";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useReactFlow } from "@xyflow/react";
import { CheckIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function SaveBtn({ workflowId }: { workflowId: string }) {
  const { toObject } = useReactFlow();
  const saveMutation = useMutation({
    mutationFn: UpdateWorkflow,
    onSuccess: () => {
      toast.success("Flow saved successfully", {id})
    }
  })
  return (
    <Button
      variant={"outline"}
      className="stroke-green-400"
      onClick={() => {
        alert("Todo");
      }}
    >
      <CheckIcon />
      save
    </Button>
  );
}

export default SaveBtn;
