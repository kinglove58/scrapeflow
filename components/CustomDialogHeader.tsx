"use client";

import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Separator } from "./ui/separator";

interface Props {
  title?: string;
  subTitle?: string;
  icon?: LucideIcon;

  iconClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

function CustomDialogHeader(props: Props) {
  const { icon: Icon, title, subTitle } = props;
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
          {Icon && (
            <Icon
              size={30}
              className={cn("stroke-primary", props.iconClassName)}
            />
          )}
          {title && (
            <p className={cn("text-xl text-primary", props.titleClassName)}>
              {" "}
              {title}{" "}
            </p>
          )}{" "}
          {subTitle && (
            <p className={cn("text-sm text-muted-foreground", props.subtitleClassName)}>
              {" "}
              {subTitle}{" "}
            </p>
          )}
        </div>
      </DialogTitle>
      <Separator/>
    </DialogHeader>
  );
}

export default CustomDialogHeader;
