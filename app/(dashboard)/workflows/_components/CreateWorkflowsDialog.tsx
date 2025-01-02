"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function CreateWorkflowsDialog({ triggerText }: { triggerText?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{triggerText ?? "Create workflow"}</Button>
      </DialogTrigger>
    </Dialog>
  );
}

export default CreateWorkflowsDialog;
