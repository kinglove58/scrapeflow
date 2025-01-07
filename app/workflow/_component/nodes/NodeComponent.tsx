import { memo } from "react";
import { NodeProps } from "@xyflow/react";

const NodeComponent = memo((props: NodeProps) => {
  return <NodeCard nodeId={props.id}>AppNode</NodeCard>;
});

export default NodeComponent;
NodeComponent.displayName = "NodeComponent";
