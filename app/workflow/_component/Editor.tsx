"use client"

import { workflow } from "@prisma/client";
import React from "react";
import { ReactFlowProvider } from "@xyflow/react";
import FlowEditor from "./FlowEditor";
import Topbar from "./topbar/Topbar";

function Editor({ workflow }: { workflow: workflow }) {
  return (
    <ReactFlowProvider>
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Topbar title="workflow editor" />
        <section className="flex h-full overflow-auto">
          <FlowEditor workflow={workflow} subtitle={workflow.name} />
        </section>
      </div>
    </ReactFlowProvider>
  );
}

export default Editor;
