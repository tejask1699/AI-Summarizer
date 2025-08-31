"use client"

import { cn } from "@/lib/utils"

export type ChatMessage = { id: string; role: "user" | "assistant"; content: string }

export function ChatBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user"
  return (
    <div className={cn("flex", isUser ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[80%] rounded-xl px-3 py-2 text-sm leading-6",
          isUser ? "bg-muted" : "bg-primary text-primary-foreground",
        )}
      >
        {message.content}
      </div>
    </div>
  )
}
