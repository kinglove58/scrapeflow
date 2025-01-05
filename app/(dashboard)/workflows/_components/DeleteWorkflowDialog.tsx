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
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DeleteWorkflowDialog = ({ open, setOpen }: Props) => {
  return (
    <AlertDialog>
      {/*  <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Workflow</Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent onChange={} >
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription>
          Are you sure you want to delete this workflow? This action cannot be
          undone.
        </AlertDialogDescription>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteWorkflowDialog;
