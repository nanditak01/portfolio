import { streamText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

export const runtime = "nodejs";

const model = anthropic("claude-3-5-sonnet-latest");

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = streamText({
      model,
      messages,
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("AI ERROR:", error);

    return new Response(
      JSON.stringify({
        error: "AI request failed",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}