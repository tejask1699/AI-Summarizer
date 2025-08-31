"use client"

import { useCallback, useMemo, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { FileUploader } from "@/components/file-uploader"
import { Trash2, Upload } from "lucide-react"

type FileRow = {
  id: string
  name: string
  size: number
  status: "Processing" | "Summarized" | "Error"
}

export default function UploadPage() {
  const [rows, setRows] = useState<FileRow[]>([
    { id: "1", name: "Meeting_Notes.txt", size: 8423, status: "Summarized" },
    { id: "2", name: "Quarterly_Report_Q2.pdf", size: 2345678, status: "Processing" },
  ])

  const onFilesAdded = useCallback((files: File[]) => {
    const next = files.map((f, i) => ({
      id: `${Date.now()}-${i}`,
      name: f.name,
      size: f.size,
      status: "Processing" as const,
    }))
    setRows((prev) => [...next, ...prev])
  }, [])

  const removeRow = useCallback((id: string) => {
    setRows((prev) => prev.filter((r) => r.id !== id))
  }, [])

  const formatted = useMemo(
    () =>
      rows.map((r) => ({
        ...r,
        sizeLabel: r.size > 1_000_000 ? `${(r.size / 1_000_000).toFixed(1)} MB` : `${Math.ceil(r.size / 1000)} KB`,
      })),
    [rows],
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Upload</h1>
        <p className="text-muted-foreground">Drag and drop files or use the button below.</p>
      </div>

      <Card className="rounded-xl">
        <CardHeader>
          <CardTitle>Upload Document</CardTitle>
          <CardDescription>Supported formats: PDF, DOCX, TXT</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <FileUploader
            accept={{
              "application/pdf": [".pdf"],
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
              "text/plain": [".txt"],
            }}
            onFiles={onFilesAdded}
          />
          <div className="flex items-center gap-2">
            <Input
              type="file"
              accept=".pdf,.docx,.txt"
              multiple
              onChange={(e) => onFilesAdded(Array.from(e.target.files || []))}
            />
            <Button onClick={() => {}}>
              <Upload className="mr-2 h-4 w-4" />
              Upload
            </Button>
          </div>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Tip: You can also paste text directly on the Summaries page.
        </CardFooter>
      </Card>

      <div className="rounded-xl border">
        <div className="grid grid-cols-12 gap-2 border-b px-4 py-2 text-sm text-muted-foreground">
          <div className="col-span-6 md:col-span-6">File</div>
          <div className="col-span-3 hidden md:block">Size</div>
          <div className="col-span-3 md:col-span-2">Status</div>
          <div className="col-span-2 text-right md:col-span-2">Actions</div>
        </div>
        <ul className="divide-y">
          {formatted.map((r) => (
            <li key={r.id} className="grid grid-cols-12 items-center gap-2 px-4 py-3 text-sm">
              <div className="col-span-8 truncate md:col-span-6">{r.name}</div>
              <div className="col-span-3 hidden md:block">{r.sizeLabel}</div>
              <div className="col-span-2 md:col-span-2">
                {r.status === "Processing" && <Badge variant="secondary">Processing</Badge>}
                {r.status === "Summarized" && <Badge>Summarized</Badge>}
                {r.status === "Error" && <Badge variant="destructive">Error</Badge>}
              </div>
              <div className="col-span-2 flex justify-end gap-2">
                <Button variant="ghost" size="icon" onClick={() => removeRow(r.id)} aria-label={`Delete ${r.name}`}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
