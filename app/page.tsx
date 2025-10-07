"use client";

import { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [compiledTranscript, setCompiledTranscript] = useState("");
  const [detailedNote, setDetailedNote] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    setCompiledTranscript((prev) => prev + " " + transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Your Browser does not support speech recognition.</span>;
  }

  async function getNotesFromTranscript() {
    const request = await fetch("/api/detailed_note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ transcript: compiledTranscript }),
    });
    const { text } = await request.json();
    setDetailedNote(text);
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={() => {
          SpeechRecognition.startListening({ continuous: true });
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          SpeechRecognition.stopListening();
          getNotesFromTranscript();
        }}
      >
        Stop
      </button>
      <button onClick={resetTranscript}>Reset</button>
      <ReactMarkdown>{detailedNote}</ReactMarkdown>
    </div>
  );
}
