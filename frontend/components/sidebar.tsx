"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Upload, FileText, BookOpenText, Settings } from "lucide-react"

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/upload", label: "Upload", icon: Upload },
  { href: "/summaries", label: "Summaries", icon: FileText },
  { href: "/knowledge-base", label: "Knowledge Base", icon: BookOpenText },
  { href: "/settings", label: "Settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  return (
    <nav className="rounded-xl border p-2">
      <ul className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon
          const active = pathname === item.href
          return (
            <li key={item.href}>
              <Button
                asChild
                variant={active ? "secondary" : "ghost"}
                className={cn("w-full justify-start gap-2", active && "font-medium")}
              >
                <Link href={item.href}>
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
