"use client";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Props {
  title?: string;
  subTitle?: string;
  icon?: ;

  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

function CustomDialogHeader(props: Props) {
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2"></div>
      </DialogTitle>
    </DialogHeader>
  );
}

export default CustomDialogHeader;
