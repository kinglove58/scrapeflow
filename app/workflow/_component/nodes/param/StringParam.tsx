import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TaskParam } from "@/types/task";
import React, { useId } from "react";

interface ParamProsp {
  param: TaskParam;
}

function StringParam({ param }: ParamProsp) {
  const id = useId();
  return (
    <div className="space-y-1 p-1 w-full">
      <Label htmlFor={id} className="text-xs flex"></Label>
      <Input id={id} />
    </div>
  );
}

export default StringParam;
