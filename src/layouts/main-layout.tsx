"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppSidebar } from "@/layouts/app-sidebar";
import { usePathname } from "next/navigation";
import React from "react";

const pagesWithoutSidebar = ["/", "/login", "/register"];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pagesWithoutSidebar.includes(pathname);
  const [open, setOpen] = React.useState(false);

  if (isAuthPage) {
    return children;
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <SidebarProvider open={!open} onOpenChange={setOpen}>
      <AppSidebar />
      <main className="w-full">
        <div className="flex items-center">
          <SidebarTrigger />
          <p>Menu</p>
        </div>
        {children}
      </main>
    </SidebarProvider>
    </ThemeProvider>
  );
}
