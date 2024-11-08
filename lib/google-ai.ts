import {
  GoogleGenerativeAI,
  HarmCategory,
  ModelParams,
  HarmBlockThreshold,
} from '@google/generative-ai'; // Import types directly
import type { Language } from '@/types/phrases';
import { descriptions, languageNames } from '@/config/languages';

// Ensure API key is present
if (!process.env.GOOGLE_AI_API_KEY) {
  throw new Error('Missing GOOGLE_AI_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);

// Define the model configuration using the imported types
const MODEL_CONFIG: ModelParams = {
  model: 'gemini-pro',
  safetySettings: [
    {
      category: 'HARM_CATEGORY_HARASSMENT' as HarmCategory, // Ensure this matches the library's type
      threshold: 'BLOCK_MEDIUM_AND_ABOVE' as HarmBlockThreshold, // Use the correct type for threshold
    },
    {
      category: 'HARM_CATEGORY_HATE_SPEECH' as HarmCategory,
      threshold: 'BLOCK_MEDIUM_AND_ABOVE' as HarmBlockThreshold,
    },
    {
      category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT' as HarmCategory,
      threshold: 'BLOCK_MEDIUM_AND_ABOVE' as HarmBlockThreshold,
    },
    {
      category: 'HARM_CATEGORY_DANGEROUS_CONTENT' as HarmCategory,
      threshold: 'BLOCK_MEDIUM_AND_ABOVE' as HarmBlockThreshold,
    },
  ],
};

// Interface for generated phrases
export interface GeneratedPhrase {
  level: string;
  description: string;
  phrase: string;
}

// Function to generate phrase levels
export async function generatePhraseLevels(
  inputPhrase: string,
  targetLang: Language
): Promise<GeneratedPhrase[]> {
  if (!inputPhrase?.trim()) {
    throw new Error('Input phrase is required');
  }

  const model = genAI.getGenerativeModel(MODEL_CONFIG);

  const prompt = `
    Given this phrase: "${inputPhrase}"
    Generate 6 versions of this phrase adapted for different ${languageNames[targetLang]} proficiency levels.
    Format the response exactly as follows (including only these exact fields):
    [
      {
        "level": "A1",
        "description": "${descriptions[targetLang].A1}",
        "phrase": "Simple phrase here"
      },
      // ... (similar format for A2, B1, B2, C1, C2)
    ]
    Make sure each version:
    - Maintains the same core meaning
    - Uses vocabulary and grammar appropriate for that level
    - Is in ${languageNames[targetLang]} language
    - Follows proper ${languageNames[targetLang]} grammar and structure
    - Provides natural, contextually appropriate translations
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        throw new Error('Invalid AI response format');
      }

      return parsed.map((item) => {
        if (!item.level || !item.description || !item.phrase) {
          throw new Error('Missing required fields in AI response');
        }
        return {
          level: String(item.level),
          description: String(item.description),
          phrase: String(item.phrase),
        };
      });
    } catch (parseError) {
      console.error('Failed to parse AI response:', parseError);
      throw new Error('Failed to process AI response');
    }
  } catch (error) {
    console.error('AI generation error:', error);
    throw error instanceof Error
      ? error
      : new Error('Failed to generate phrases');
  }
}
