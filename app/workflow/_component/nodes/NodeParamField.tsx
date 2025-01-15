"use client";
import { TaskParam, TaskParamType } from "@/types/task";
import React from "react";
import StringParam from "./param/StringParam";

function NodeParamField({ param }: { param: TaskParam }) {
  switch (param.type) {
    case TaskParamType.STRING:
      return <StringParam />;
    default:
      return (
        <div className="w-full">
          <p className="text-xs text-muted-foreground">Not implemented</p>
        </div>
      );
  }
}

export default NodeParamField;
