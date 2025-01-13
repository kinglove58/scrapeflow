import { TaskType } from "@/types/task";
import React from "react";

function NodeHeader({taskType}:{taskType: TaskType}) {
  return <div className="flex items-center gap-2 p-2">NodeHeader</div>;
}

export default NodeHeader;
