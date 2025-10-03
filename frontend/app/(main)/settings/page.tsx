"use client"

import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/theme-toggle"

export default function SettingsPage() {
  const { theme } = useTheme()
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your profile, API keys, and preferences.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Basic account information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Ada Lovelace" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="ada@example.com" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save changes</Button>
          </CardFooter>
        </Card>

        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle>API Key</CardTitle>
            <CardDescription>Add or rotate your API key (self-hosted).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="apiKey">API Key</Label>
              <Input id="apiKey" type="password" placeholder="••••••••••••••••" />
            </div>
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <Button variant="outline">Remove</Button>
            <Button>Save</Button>
          </CardFooter>
        </Card>

        <Card className="rounded-xl md:col-span-2">
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>Toggle between light and dark themes.</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">Current: {theme || "system"}</div>
            <ThemeToggle />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
