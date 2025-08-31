"use client"

import type React from "react"

import { useCallback, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type AcceptMap = Record<string, string[]>

export function FileUploader({
  onFiles,
  accept,
}: {
  onFiles: (files: File[]) => void
  accept?: AcceptMap
}) {
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      setDragOver(false)
      const files = Array.from(e.dataTransfer.files || [])
      if (files.length) onFiles(files)
    },
    [onFiles],
  )

  const onClick = () => inputRef.current?.click()

  const acceptAttr = accept ? Object.values(accept).flat().join(",") : undefined

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={onDrop}
      onClick={onClick}
      role="button"
      aria-label="Drag and drop files or click to select"
      className={cn(
        "flex h-32 cursor-pointer items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground transition-colors",
        dragOver ? "border-primary/60 bg-primary/5" : "hover:bg-muted/50",
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={acceptAttr}
        multiple
        className="hidden"
        onChange={(e) => onFiles(Array.from(e.target.files || []))}
      />
      <span>Drag &amp; drop files here, or click to browse</span>
    </div>
  )
}
