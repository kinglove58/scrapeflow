import React from "react";

function page() {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>
      </div>
    </div>
  );
}

export default page;