import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="flex flex-1 min-h-screen flex-col">
        <header className="flex items-center justify-between container px-6 py-4 h-[50px]">
          scrapeflow
        </header>
      </div>
    </div>
  );
}

export default layout;
