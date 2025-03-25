"use client"
import ChatInterface from "@/components/chat-interface"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex flex-col h-screen bg-gray-50">
        <ChatInterface />
      </div>
    </ThemeProvider>
  )
}

