import React, { ReactNode } from "react";

function NodeInputs({ children }: { children: ReactNode }) {
  return <div className="flex flex-col divide-y gap-2">{children}</div>;
}

export default NodeInputs;

export function NodeInput({ input }: { input: any }) {
  return <div className="flex justify-start relative p-3 bg-secondary w-full" >{input.name}</div>;
}
