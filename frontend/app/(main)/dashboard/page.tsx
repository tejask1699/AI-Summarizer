"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Activity, FileText, Sparkles, MessageSquare } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8 m-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">AI Summarizer Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Get insights into your document uploads, AI summaries, and recent question-answer interactions.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="rounded-xl hover:shadow-md transition">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-muted-foreground">Total Uploads</p>
              <h2 className="text-2xl font-semibold">48</h2>
            </div>
            <FileText className="h-6 w-6 text-muted-foreground" />
          </CardContent>
        </Card>

        <Card className="rounded-xl hover:shadow-md transition">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-muted-foreground">Summaries Generated</p>
              <h2 className="text-2xl font-semibold">36</h2>
            </div>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </CardContent>
        </Card>

        <Card className="rounded-xl hover:shadow-md transition">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-muted-foreground">Q&amp;A Sessions</p>
              <h2 className="text-2xl font-semibold">12</h2>
            </div>
            <MessageSquare className="h-6 w-6 text-blue-500" />
          </CardContent>
        </Card>

        <Card className="rounded-xl hover:shadow-md transition">
          <CardContent className="flex items-center justify-between py-4">
            <div>
              <p className="text-sm text-muted-foreground">AI System Status</p>
              <h2 className="text-2xl font-semibold text-green-600">Active</h2>
            </div>
            <Activity className="h-6 w-6 text-green-500 animate-pulse" />
          </CardContent>
        </Card>
      </div>

      {/* Content Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Uploads */}
        <Card className="rounded-xl hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Recent Uploads</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="truncate">Quarterly_Report_Q2.pdf</span>
              <Badge variant="secondary">Processing</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="truncate">Meeting_Notes.txt</span>
              <Badge>Summarized</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="truncate">Proposal.docx</span>
              <Badge variant="destructive">Error</Badge>
            </div>

            <Progress value={66} className="mt-2" />
            <Button asChild size="sm" className="w-full mt-3">
              <Link href="/upload">Go to Uploads</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Latest Summaries */}
        <Card className="rounded-xl hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Latest Summaries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="bg-muted p-3 rounded-lg hover:bg-muted/60 transition cursor-pointer">
              <p className="font-medium line-clamp-2">
                📈 Quarterly performance exceeded expectations with growth led by North America and new partnerships...
              </p>
            </div>
            <div className="bg-muted p-3 rounded-lg hover:bg-muted/60 transition cursor-pointer">
              <p className="font-medium line-clamp-2">
                🗂 The meeting focused on roadmap prioritization, highlighting three initiatives for Q3 delivery...
              </p>
            </div>

            <Button asChild size="sm" className="w-full mt-3">
              <Link href="/summaries">View All Summaries</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Recent Q&A */}
        <Card className="rounded-xl md:col-span-2 lg:col-span-1 hover:shadow-md transition">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Recent Q&amp;A</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Q: What were top risks identified?</p>
              <p className="text-muted-foreground line-clamp-2">
                A: Supply chain disruptions and dependency on vendor X were the primary risks...
              </p>
            </div>
            <div>
              <p className="font-medium">Q: How did the AI summarize the meeting?</p>
              <p className="text-muted-foreground line-clamp-2">
                A: The AI detected 5 action points and prioritized next steps based on stakeholder mentions...
              </p>
            </div>

            <Button asChild size="sm" className="w-full mt-3">
              <Link href="/knowledge-base">Open Knowledge Base</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
