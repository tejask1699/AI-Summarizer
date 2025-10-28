"use client";

import {
  LayoutDashboard,
  Upload,
  FileText,
  BookOpenText,
  Settings,
  Globe,
  // Using an icon for the logo/title area
  Briefcase,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  // Removed SidebarTrigger as it usually requires state and is for collapse/expand
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Split items into main and secondary for better structure
const mainItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/upload", label: "Upload New", icon: Upload },
  { href: "/summaries", label: "My Summaries", icon: FileText },
  { href: "/knowledge-base", label: "Knowledge Base", icon: BookOpenText },
];

const secondaryItems = [
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/help", label: "Help & Docs", icon: Globe },
];

export function AppSidebar() {
  const pathname = usePathname();

  // The key changes are 'h-screen', 'sticky', and 'top-0' for full-height fixed sidebar.
  // The SidebarTrigger component was removed as its proper use case typically involves
  // state management (for opening/closing) and often sits outside the SidebarContent.
  return (
    <Sidebar className="bg-[hsl(var(--sidebar-background))] text-[hsl(var(--sidebar-foreground))] border-r border-[hsl(var(--sidebar-border))] **h-screen sticky top-0**">
      <SidebarContent className="flex flex-col justify-between h-full py-4">
        {/* 🌟 Application Header/Logo */}
        <div className="px-3 pb-6 flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-[hsl(var(--sidebar-primary))]" />
          <h1 className="text-xl font-bold tracking-tight">App Name</h1>
        </div>

        {/* Main Application Links */}
        <SidebarGroup className="flex-1">
          {" "}
          {/* Added flex-1 to push space downwards */}
          <SidebarGroupLabel className="text-[hsl(var(--sidebar-foreground))] text-xs font-bold uppercase tracking-widest px-3 py-2 opacity-75">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {mainItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.href}
                        className={clsx(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 group",
                          isActive
                            ? "bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))] shadow-md"
                            : "hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-accent-foreground))]"
                        )}
                      >
                        <item.icon
                          className={clsx(
                            "w-5 h-5 transition-transform duration-150",
                            isActive ? "scale-110" : "group-hover:scale-105"
                          )}
                        />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings and Support Links (Pushed to the bottom) */}
        <SidebarGroup className="mt-auto pt-4 border-t border-[hsl(var(--sidebar-border))]">
          <SidebarGroupLabel className="text-[hsl(var(--sidebar-foreground))] text-xs font-bold uppercase tracking-widest px-3 py-2 opacity-75">
            System
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {secondaryItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.href}
                        className={clsx(
                          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                          isActive
                            ? "bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))] shadow-md"
                            : "hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-accent-foreground))]"
                        )}
                      >
                        <item.icon
                          className={clsx(
                            "w-5 h-5 transition-transform duration-150",
                            isActive ? "scale-110" : "group-hover:scale-105"
                          )}
                        />
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
