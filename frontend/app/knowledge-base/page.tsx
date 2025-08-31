"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChatBubble, type ChatMessage } from "@/components/chat-bubble"

const initialHistory: ChatMessage[] = [
  { id: "m1", role: "user", content: "What are the top 3 risks noted in Q2?" },
  {
    id: "m2",
    role: "assistant",
    content: "Supply chain variability, vendor dependency, and hiring ramp for data team.",
  },
]

export default function KnowledgeBasePage() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialHistory)
  const [input, setInput] = useState("")

  const ask = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", content: input.trim() }
    // Mock AI response
    const aiMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Here’s a concise answer based on your documents. (Integrate your AI backend to replace this mock response.)",
    }
    setMessages((prev) => [...prev, userMsg, aiMsg])
    setInput("")
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Knowledge Base</h1>
        <p className="text-muted-foreground">Ask a question about your documents.</p>
      </div>

      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Q&amp;A</CardTitle>
          <CardDescription>Clean, focused chat experience.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={ask} className="flex w-full items-center gap-2">
            <Input
              placeholder="Ask a question about your documents..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Question input"
            />
            <Button type="submit">Ask</Button>
          </form>

          <div className="space-y-3">
            {messages.map((m) => (
              <ChatBubble key={m.id} message={m} />
            ))}
          </div>

          <div className="pt-2">
            <Accordion type="single" collapsible>
              <AccordionItem value="past">
                <AccordionTrigger>Past Q&amp;A</AccordionTrigger>
                <AccordionContent className="space-y-3">
                  <ChatBubble message={{ id: "p1", role: "user", content: "Summarize the Q2 report." }} />
                  <ChatBubble
                    message={{
                      id: "p2",
                      role: "assistant",
                      content:
                        "Q2 showed 12% revenue growth, improved retention, and expansion in enterprise accounts.",
                    }}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
