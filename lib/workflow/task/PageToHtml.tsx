import { TaskParamType, TaskType } from "@/types/task";
import { CodeIcon, GlobeIcon, LucideIcon } from "lucide-react";

export const PageToHtmlTask = {
  type: TaskType.PAGE_TO_HTML,
  label: "Get Html from pages",
  icon: (props: LucideIcon) => (
    <CodeIcon className="stroke-rose-400" {...props} />
  ),
  isEntryPoint: true,
  input: [
    {
      name: "web page",
      type: TaskParamType.BROWSER_INSTANCE,
      required: true,
    },
  ],
};
