"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layouts/app-sidebar";
import { usePathname } from "next/navigation";

const pagesWithoutSidebar = ["/", "/login", "/register"];

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pagesWithoutSidebar.includes(pathname);

  if (isAuthPage) {
    return children;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
