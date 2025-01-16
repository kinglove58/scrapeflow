import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ParamProsp } from "@/types/appNode";
import { TaskParam } from "@/types/task";
import React, { useId, useState } from "react";

function StringParam({ param, value, updateNodeParamValue }: ParamProsp) {
  const id = useId();
  const [internavalue, setInternavalue] = useState(value)
  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-2">*</p>}
      </Label>
      <Input
        id={id}
        value={value}
        placeholder="Enter value here"
        onChange={(e) => setInternavalue(e.target.value)}
      />
      {param.helperText && (
        <p className="text-muted-foreground px-2 ">{param.helperText}</p>
      )}
    </div>
  );
}

export default StringParam;
