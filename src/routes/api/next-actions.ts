import { createFileRoute } from "@tanstack/react-router";
import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { z } from "zod";

const Body = z.object({
  notes: z.string().trim().min(1).max(8000),
  pipeline: z.string().trim().max(8000).optional().default(""),
});

const SYSTEM = `You are ApexSales' revenue coach for sales managers.
Given deal notes and pipeline updates, suggest the next best actions ranked by priority.
Format in plain text:
For each action (max 7), one block:
[HIGH|MEDIUM|LOW] Action title
Deal: <deal name or "Pipeline">
Why: <one sentence tied to the notes>
Do by: <today / this week / next week>
Put HIGH first. Be specific and concise. No preamble, no markdown symbols.`;

export const Route = createFileRoute("/api/next-actions")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const parsed = Body.safeParse(await request.json().catch(() => null));
        if (!parsed.success) {
          return Response.json({ error: "Please add some deal notes first." }, { status: 400 });
        }
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return Response.json({ error: "AI is not configured." }, { status: 500 });

        const provider = createOpenAI({
          baseURL: "https://ai.gateway.lovable.dev/v1",
          apiKey,
          headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
        });
        const { notes, pipeline } = parsed.data;
        const result = streamText({
          model: provider.responses("openai/gpt-6-astra"),
          system: SYSTEM,
          prompt: `DEAL NOTES:\n${notes}\n\nPIPELINE UPDATES:\n${pipeline || "(none)"}`,
          abortSignal: request.signal,
          maxRetries: 0,
          providerOptions: {
            openai: {
              forceReasoning: true,
              reasoningEffort: "low",
              reasoningSummary: "auto",
              store: false,
              include: ["reasoning.encrypted_content"],
            },
          },
          onError: ({ error }) => console.error("next-actions error", error),
        });
        return result.toTextStreamResponse({
          headers: { "Cache-Control": "no-cache, no-transform" },
        });
      },
    },
  },
});
