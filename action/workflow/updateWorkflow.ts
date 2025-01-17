"use server";

import prisma from "@/lib/prisma";
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
    throw new Error();
  }

  const workflow = await prisma.workflow.findUnique(
    where:{
        id,
        userId
    }
  )
}
