"use client";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";

interface Props {
  title?: string;
  subTitle?: string;
  icon?: LucideIcon;

  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

function CustomDialogHeader(props: Props) {
  const {icon:Icon} = props.icon;
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
          {Icon && <Icon size={30} className={cn("stroke-primary", props.iconClassName )} />}
        </div>
      </DialogTitle>
    </DialogHeader>
  );
}

export default CustomDialogHeader;
