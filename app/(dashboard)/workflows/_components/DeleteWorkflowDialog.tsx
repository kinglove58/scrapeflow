"use client";

import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  workflowName: string;
}

const DeleteWorkflowDialog = ({ open, setOpen, workflowName }: Props) => {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      {/*  <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Workflow</Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Are you sure you want to delete this workflow? This action cannot be
          undone.
          <div className="flex flex-col gap-2 py-4">
            <p>
              If you are sure, enter <b>{workflowName}</b> to confirm:{" "}
            </p>
          </div>
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWorkflowDialog;
