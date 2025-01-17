"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function TaskMenu() {
  return (
    <aside className="w-[340px] min-w-[340px] max-w-[340px] border-r-2 border-separate p-2 px-4 h-full overflow-auto ">
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="extraction" >
          <AccordionTrigger className="font-bold" >Data Extraction</AccordionTrigger>
          <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
}

export default TaskMenu;
