import { GetWorkflowsForUser } from "@/action/workflow/getworkflowsForUser";
import { Alert } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { waitFor } from "@/lib/helper/waitFor";
import React, { Suspense } from "react";

function page() {
  return (
    <div className="flex flex-1 flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">workflows</h1>
          <p className="text-muted-foreground">Manage your workflows</p>
        </div>
      </div>
      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowsSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
}

function UserWorkflowsSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4].map((i) => (
        <Skeleton key={i} className="h-32 w-ful" />
      ))}
    </div>
  );
}

async function UserWorkflows() {
  const workflows = await GetWorkflowsForUser();
  if(!workflows){
    return (
        <Alert varriant={"destructive"}></Alert>
    )
  }
  return <div></div>;
}

export default page;
