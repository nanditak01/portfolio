"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, stop } = useChat();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            AI Assistant
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            StudyMate AI
          </h1>

          <p className="mt-3 text-gray-600">
            Ask questions about Embedded Systems, VLSI, Python,
            Digital Electronics, or Microprocessors.
          </p>
        </div>

        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <div className="h-[500px] space-y-4 overflow-y-auto rounded-lg bg-gray-50 p-4">
            {messages.length === 0 && (
              <div className="flex h-full items-center justify-center text-center text-gray-500">
                <div>
                  <p className="text-lg font-medium">
                    Welcome to StudyMate AI
                  </p>

                  <p className="mt-2 text-sm">
                    Ask me about your study topics.
                  </p>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-lg p-4 ${
                  message.role === "user"
                    ? "ml-10 bg-blue-100"
                    : "mr-10 border bg-white"
                }`}
              >
                <p className="font-semibold">
                  {message.role === "user" ? "You" : "StudyMate AI"}
                </p>

                <div className="mt-2 whitespace-pre-wrap text-gray-700">
                  {message.parts.map((part, index) => {
                    if (part.type === "text") {
                      return <span key={index}>{part.text}</span>;
                    }

                    return null;
                  })}
                </div>
              </div>
            ))}

            {status === "submitted" && (
              <div className="mr-10 rounded-lg border bg-white p-4">
                <p className="font-semibold text-blue-600">
                  StudyMate AI
                </p>

                <p className="mt-2 animate-pulse text-gray-500">
                  Thinking...
                </p>
              </div>
            )}

            {status === "streaming" && (
              <div className="mr-10 rounded-lg border bg-white p-4">
                <p className="font-semibold text-blue-600">
                  StudyMate AI
                </p>

                <p className="mt-2 text-gray-500">
                  Generating response...
                </p>
              </div>
            )}
          </div>

          <form
            className="mt-4 flex gap-3"
            onSubmit={(e) => {
              e.preventDefault();

              if (!input.trim()) return;

              sendMessage({
                parts: [
                  {
                    type: "text",
                    text: input,
                  },
                ],
              });

              setInput("");
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask StudyMate AI..."
              className="flex-1 rounded-lg border px-4 py-3 outline-none focus:border-blue-500"
            />

            {status === "streaming" ? (
              <button
                type="button"
                onClick={stop}
                className="rounded-lg bg-red-600 px-6 py-3 font-medium text-white"
              >
                Stop
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
              >
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}