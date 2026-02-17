"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-12 sm:h-14 shrink-0 items-center gap-2 px-3 sm:px-4 bg-background/50 backdrop-blur-2xl backdrop-saturate-[1.8] border-b border-white/[0.08] dark:border-white/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.02)] dark:shadow-[0_1px_3px_rgba(0,0,0,0.2),0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-500">
      <SidebarTrigger className="-ml-1" />
      <span className="flex-1 truncate text-sm font-medium text-muted-foreground/80">
        Microeconom&iacute;a &mdash; FBS &middot; UCM
      </span>
      <ThemeToggle />
    </header>
  );
}
