import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Choose a Model: Mistral vs LLaMA</h1>
      <p>This demo shows how Mistral and LLaMA respond to the same prompt.</p>
      <button onClick={() => navigate('/prompt/mistral')} style={{ marginRight: 20 }}>Use Mistral</button>
      <button onClick={() => navigate('/prompt/llama')}>Use LLaMA</button>
    </div>
  );
}
