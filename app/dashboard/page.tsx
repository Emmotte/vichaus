"use client"
import { useState } from "react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import SitePreview from "@/app/site/site-preview"
import { MountainIcon } from "@/components/ui/mountain-icon"

export default function DashboardPage() {
  const [siteName, setSiteName] = useState("The Nook on Cook")
  const [siteDescription, setSiteDescription] = useState(
    "Cook St Village, Victoria, British Columbia"
  )

  return (
    // Main dashboard layout: a grid with a fixed-width sidebar and a flexible main content area.
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-green-50"> 
      <div className="hidden border-r bg-green-900 text-white lg:block dark:bg-green-800/40"> 
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b border-gray-700 px-6"> 
            <a href="/" className="flex items-center gap-2 font-semibold text-white"> 
              <MountainIcon className="h-6 w-6 text-green-400" /> 
              <span>open-bnb</span>
            </a>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg bg-gray-700 px-3 py-2 text-white transition-all hover:text-gray-100 hover:bg-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                Settings
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col"> 
        <header className="flex h-16 lg:h-[70px] items-center gap-4 border-b bg-white px-6 dark:bg-gray-800/40 shadow-sm"> 
          <a href="#" className="lg:hidden text-gray-700 hover:text-gray-900"> 
            <MountainIcon className="h-7 w-7" /> 
            <span className="sr-only">Home</span>
          </a>
          <div className="w-full flex-1">
            <h1 className="text-xl font-semibold text-gray-900">Site Settings</h1> 
          </div>
          <Button className="px-6 py-2 text-base font-medium">Save Changes</Button> 
        </header>
        <main className="flex-1 flex flex-col gap-6 p-6 md:gap-10 md:p-10 bg-green-50">
          <Card className="shadow-md rounded-lg"> 
            <CardHeader className="pb-4"> 
              <CardTitle className="text-2xl font-bold text-gray-900">Site Details</CardTitle> 
            </CardHeader>
            <CardContent className="grid gap-6"> 
              <div className="grid gap-2"> 
                <Label htmlFor="site-name" className="text-base font-medium text-gray-700">Site Name</Label> 
                <Input
                  id="site-name"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="grid gap-2"> 
                <Label htmlFor="site-description" className="text-base font-medium text-gray-700">Site Description</Label> 
                <Textarea
                  id="site-description"
                  value={siteDescription}
                  onChange={(e) => setSiteDescription(e.target.value)}
                  className="px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent min-h-[100px]" 
                />
              </div>
            </CardContent>
          </Card>
          {/* <div>
            <SitePreview siteName={siteName} siteDescription={siteDescription} />
          </div> */}
        </main>
      </div>
    </div>
  )
}