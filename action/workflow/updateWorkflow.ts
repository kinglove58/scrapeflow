"use server";

import prisma from "@/lib/prisma";
import { workflowStatus } from "@/types/workflow";
import { auth } from "@clerk/nextjs/server";

export async function UpdateWorkflow({
  id,
  definition,
}: {
  id: string;
  definition: string;
}) {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unathenticated");
  }

  const workflow = await prisma.workflow.findUnique({
    where: {
      id,
      userId,
    },
  });

  if (!workflow) {
    throw new Error("workflow not found");
  }
  if (workflow.status !== workflowStatus.DRAFT) {
    throw new Error("workflow is not a draft");
  }
  await prisma.workflow.update({
    data: {
      definition,
    },
    where: {
      id,
      userId,
    },
  });
}
