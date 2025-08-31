"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Download, Clipboard } from "lucide-react"

type Summary = {
  id: string
  fileName: string
  excerpt: string
  full: string
  status: "Summarized" | "Processing"
  date: string
}

const mock: Summary[] = [
  {
    id: "s1",
    fileName: "Quarterly_Report_Q2.pdf",
    excerpt: "Q2 performance exceeded expectations; NA growth and partnerships led the way...",
    full: "Q2 performance exceeded expectations with notable growth in North America driven by new partnerships. Key takeaways include revenue growth of 12%, improved retention rates, and expansion in enterprise accounts. Risks involve supply chain dependencies and hiring ramp. Recommendations: continue focus on enterprise, diversify vendors, and invest in onboarding.",
    status: "Summarized",
    date: "2025-08-01",
  },
  {
    id: "s2",
    fileName: "Roadmap_Meeting_Notes.txt",
    excerpt: "Team prioritized three initiatives for Q3 with clear owners and milestones...",
    full: "The team prioritized three initiatives for Q3: (1) AI summarization speed improvements, (2) Better document parsing for tables, and (3) Knowledge Base multi-document context. Owners assigned and milestones defined with a 10-week delivery window.",
    status: "Summarized",
    date: "2025-08-15",
  },
]

export default function SummariesPage() {
  const [summaries] = useState<Summary[]>(mock)

  const downloadText = (text: string, fileName: string) => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName.endsWith(".txt") ? fileName : `${fileName}.txt`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  const rows = useMemo(() => summaries, [summaries])

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Summaries</h1>
        <p className="text-muted-foreground">View and manage AI-generated summaries.</p>
      </div>

      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Generated Summaries</CardTitle>
          <CardDescription>Click a row to view the full summary.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-12 gap-2 border-b px-4 py-2 text-sm text-muted-foreground">
            <div className="col-span-6 md:col-span-6">Document</div>
            <div className="col-span-3 hidden md:block">Date</div>
            <div className="col-span-3 md:col-span-2">Status</div>
            <div className="col-span-3 text-right md:col-span-2">Actions</div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {rows.map((r) => (
              <AccordionItem key={r.id} value={r.id} className="border-b">
                <AccordionTrigger className="grid grid-cols-12 gap-2 px-4 py-3">
                  <div className="col-span-8 truncate text-left md:col-span-6">
                    <div className="font-medium">{r.fileName}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1">{r.excerpt}</div>
                  </div>
                  <div className="col-span-3 hidden text-left text-sm text-muted-foreground md:block">{r.date}</div>
                  <div className="col-span-2 text-left md:col-span-2">
                    {r.status === "Summarized" ? (
                      <Badge>Summarized</Badge>
                    ) : (
                      <Badge variant="secondary">Processing</Badge>
                    )}
                  </div>
                  <div className="col-span-2 text-right md:col-span-2">
                    <div className="hidden gap-2 md:flex">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault()
                          navigator.clipboard.writeText(r.full)
                        }}
                      >
                        <Clipboard className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault()
                          downloadText(r.full, `${r.fileName}-summary.txt`)
                        }}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-sm leading-6 text-pretty">{r.full}</p>
                  <div className="mt-3 flex gap-2 md:hidden">
                    <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(r.full)}>
                      <Clipboard className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                    <Button size="sm" onClick={() => downloadText(r.full, `${r.fileName}-summary.txt`)}>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}
