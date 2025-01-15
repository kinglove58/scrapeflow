import { TaskParamType, TaskType } from "@/types/task";
import { GlobeIcon, LucideIcon } from "lucide-react";

export const LaunchBrowserTask = {
  type: TaskType.LAUNCH_BROWSER,
  label: "Launch browser",
  icon: (props: LucideIcon) => (
    <GlobeIcon className="stroke-pink-400" {...props} />
  ),
  isEntryPoint: true,
  input: [
    {
      name: "website url",
      type: TaskParamType.STRING,
      helperText: "e.g: https://www.google.com",
      required: true,
      hideHandle: true,
    }
  ]
};
