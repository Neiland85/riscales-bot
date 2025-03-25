import type React from "react"

interface ChatMessageProps {
  message: {
    type: string
    content: string | React.ReactNode
  }
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = message.type === "bot"

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[85%] rounded-lg p-3 ${
          isBot ? "bg-white border border-gray-200 shadow-sm" : "bg-black text-white"
        }`}
      >
        {message.content}
      </div>
    </div>
  )
}

