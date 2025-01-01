import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { error } from "console";

export async function GetWorkflowsForUser() {
  const { userId } = auth();
  if (!userId) {
    throw new Error("unautheticated");
  }

  return prisma.workflow.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
}
