"use client";

import { useReactFlow } from "@xyflow/react";
import { ReactNode } from "react";

function NodeCard({
  children,
  nodeId,
  isSelected,
}: {
  nodeId: string;
  children: ReactNode;
  isSelected: boolean;
}) {
const {getNode, setCenter} = useReactFlow();

  return (
    <div onDoubleClick={{()={
        const node = getNode(nodeId)
        if()
    }}} className="rounded-md cursor-pointer bg-background border-2 border-separate w-[420px] text-xs gap-1 flex flex-col ">
      {children}
    </div>
  );
}

export default NodeCard;
