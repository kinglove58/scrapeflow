"use client";

import { workflow } from "@prisma/client";
import { ReactFlow, useEdgesState, useNodesState } from "@xyflow/react";
import React from "react";
import "@xyflow/react/dis"

function FlowEditor({ workflow }: { workflow: workflow }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  return <main className="h-full w-full ">
    <ReactFlow></ReactFlow>
  </main>
}

export default FlowEditor;
