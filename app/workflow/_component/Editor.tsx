import { workflow } from "@prisma/client";
import React from "react";
import { ReactFlowProvider } from "@xyflow/react";

function Editor({ workflow }: { workflow: workflow }) {
  return <ReactFlowProvider>
    <div className="flex flex-col h-full w-full overflow-hidden">
        
    </div>
  </ReactFlowProvider>;
}

export default Editor;
