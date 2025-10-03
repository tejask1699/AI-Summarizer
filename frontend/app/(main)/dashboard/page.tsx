import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Quick overview of your uploads, summaries, and recent Q&amp;A.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="text-base">Recent Uploads</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="truncate">Quarterly_Report_Q2.pdf</span>
              <Badge variant="secondary">Processing</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="truncate">Meeting_Notes.txt</span>
              <Badge>Summarized</Badge>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="truncate">Proposal.docx</span>
              <Badge variant="destructive">Error</Badge>
            </div>
            <Button asChild size="sm" className="w-full mt-2">
              <Link href="/upload">Go to Uploads</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="text-base">Latest Summaries</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p className="line-clamp-2">
              Quarterly performance exceeded expectations with growth led by North America and new partnerships...
            </p>
            <p className="line-clamp-2">
              The meeting focused on roadmap prioritization, highlighting three initiatives for Q3 delivery...
            </p>
            <Button asChild size="sm" className="w-full mt-2">
              <Link href="/summaries">View Summaries</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-xl md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-base">Recent Q&amp;A</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <p className="font-medium">Q: What were top risks identified?</p>
              <p className="text-muted-foreground">
                A: Supply chain disruptions and dependency on vendor X were the primary risks...
              </p>
            </div>
            <Button asChild size="sm" className="w-full mt-2">
              <Link href="/knowledge-base">Open Knowledge Base</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
