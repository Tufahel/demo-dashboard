'use client';

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/layouts/app-sidebar";
import { usePathname } from "next/navigation";

const pagesWithoutSidebar = ['/', '/login'];  // Array of paths that shouldn't have sidebar

export function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pagesWithoutSidebar.includes(pathname);

  if (isAuthPage) {
    return children;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
