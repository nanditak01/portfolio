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
    console.error("CHAT ERROR:", error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong",
      },
      { status: 500 }
    );
  }
}