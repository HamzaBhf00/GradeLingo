import { NextResponse } from "next/server";
import { generatePhraseLevels } from "@/lib/google-ai";
import { z } from "zod";

const requestSchema = z.object({
  phrase: z.string().min(1, "Phrase is required").max(500, "Phrase is too long"),
  targetLang: z.enum(["en", "es", "fr"])
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phrase, targetLang } = requestSchema.parse(body);

    const levels = await generatePhraseLevels(phrase, targetLang);
    
    if (!Array.isArray(levels) || levels.length === 0) {
      throw new Error("Invalid response format from AI service");
    }

    return NextResponse.json(levels);
  } catch (error) {
    console.error("API error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: "Validation error", 
          details: error.errors.map(e => e.message)
        },
        { status: 400 }
      );
    }

    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}