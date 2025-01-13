"use client";

import { cn } from "@/lib/utils";
import { Position, useReactFlow } from "@xyflow/react";
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
  const { getNode, setCenter } = useReactFlow();

  return (
    <div
      onDoubleClick={() => {
        const node = getNode(nodeId);
        if (!node) return;
        const { position, measured } = node;
        if (!position || !measured) return;

        const { width, height } = measured;
        const x = position.x;
        const y = position.y;

        if (x === undefined || y === undefined)
          setCenter(x, y, {
            zoom: 1,
            duration: 500,
          });
      }}
      className={cn(
        "rounded-md cursor-pointer bg-background border-2 border-separate w-[420px] text-xs gap-1 flex flex-col ",
        isSelected && "border-primary"
      )}
    >
      {children}
    </div>
  );
}

export default NodeCard;
