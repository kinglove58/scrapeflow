import { Loader2Icon } from "lucide-react";
import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <Loader2Icon className="animate-spin stroke-primary" />
    </div>
  );
}

export default loading;
