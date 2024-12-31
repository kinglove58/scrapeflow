import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-primary mb-4 font-bold text-6xl">404</h1>
        <h2 className="text-2xl font-semibold mb-4">page not found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          miss information thank you.
        </p>
        <div className="flex flex-col sm:flex-row  justify-center gap-4">
          <Link
            href="/"
            className="justify-center flex items-center px-4 py-2 bg-primary hover:bg-primary/80 text-white rounded-md transition-colors "
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Link>
        </div>
      </div>

      <footer className="text-muted-foreground text-sm mt-12">
        If you believe this is an error please contact us
      </footer>
    </div>
  );
}

export default NotFoundPage;
