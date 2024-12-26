import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import DesktopSidebar from "@/components/Sidebar";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-1 min-h-screen flex-col">
        <header className="flex items-center justify-between container px-6 py-4 h-[50px]">
          <BreadcrumbHeader />
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default layout;
