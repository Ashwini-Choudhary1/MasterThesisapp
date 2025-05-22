import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function PromptPage() {
  const { model } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Prompt Input ({model})</h2>
      <textarea rows="6" cols="60" defaultValue="Write a short poem about AI and the future."></textarea>
      <br /><br />
      <button onClick={() => navigate('/response/' + model)}>Submit</button>
    </div>
  );
}
