import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, FileUp, MessagesSquare } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-[calc(100svh-64px)] px-4 py-12 md:py-16">
      <section className="mx-auto max-w-3xl text-center space-y-6">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          AI Summarizer
        </h1>
        <p className="text-pretty text-muted-foreground md:text-lg">
          Summarize documents and extract insights with AI. Minimal, fast, and
          built for productivity.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/upload">Upload a Document</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="rounded-xl">
          <CardContent className="p-6">
            <FileUp className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-medium">Upload Documents</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Import PDF, DOCX, or TXT. We handle your files with care.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-xl">
          <CardContent className="p-6">
            <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-medium">AI Summaries</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Generate clean, actionable summaries in seconds.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-xl sm:col-span-2 lg:col-span-1">
          <CardContent className="p-6">
            <MessagesSquare
              className="h-6 w-6 text-primary"
              aria-hidden="true"
            />
            <h3 className="mt-4 text-lg font-medium">Ask Questions</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Query your docs like a pro with a focused Q&amp;A experience.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
