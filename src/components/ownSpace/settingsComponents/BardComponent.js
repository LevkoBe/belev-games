import React, { useState } from "react";
import { BardAPI } from "bardapi";

const bard = new BardAPI("invakid token");

function BardComponent() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const getBardAnswer = async () => {
    try {
      const response = await bard.ask(question);
      setAnswer(response["content"]);
    } catch (error) {
      console.error("Error getting Bard answer:", error);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Ask Bard whatever you wish" value={question} onChange={handleQuestionChange} />
      <button onClick={getBardAnswer}>Get Answer</button>
      <p>{answer}</p>
    </div>
  );
}

export default BardComponent;
