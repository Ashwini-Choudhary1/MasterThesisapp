import React from "react";
import { useParams } from "react-router-dom";

export default function ResponsePage() {
  const { model } = useParams();

  const imageSrc = model === "mistral"
    ? "/assets/mistral_response.png"
    : "/assets/llama_response.png";

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Response from {model.charAt(0).toUpperCase() + model.slice(1)}</h2>
      <img src={imageSrc} alt={model + " response"} style={{ maxWidth: "100%", border: "1px solid #ccc" }} />
    </div>
  );
}
