import { openai } from '@ai-sdk/openai';
import { streamText, UIMessage, convertToModelMessages , generateText} from 'ai';


export async function POST(req: Request) {
  const result= await generateText({
  model: openai.responses('gpt-4o-mini'),
  system:"You are a helpful assistant that gathers the latest financial market news from various sources and presents it in a clear, cohesive manner, allowing readers to understand market trends and how different markets impact one another.",
  prompt: 'What happended in the financial markets today?',
  tools: {
    web_search_preview: openai.tools.webSearchPreview({}),
  },
});


  return result;
}