"use client";

import { Button } from "@/components/ui/button";
import { useReactFlow } from "@xyflow/react";
import { CheckIcon } from "lucide-react";
import React from "react";

function SaveBtn({ workflowId }: { workflowId: string }) {
  const { toObject } = useReactFlow();
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
