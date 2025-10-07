import { generateText } from 'ai';
import { NextRequest, NextResponse } from 'next/server';

import { cleanUpAgent, noteTakerAgent } from './prompts';

export async function POST(req: NextRequest) {
    const {transcript} = await req.json();
    const {text} = await generateText({
        model: 'openai/gpt-4o-mini',
        prompt: `Clean up the transcript ${transcript}`,
        system:cleanUpAgent
    });
    const {text:detailedNote} = await generateText({
        model: 'openai/gpt-4o-mini',
        prompt: `Generate detailed note from ${text}`,
        system:noteTakerAgent
    });
    return NextResponse.json({ text: detailedNote});

    }