import { useState } from "react";
import QUESTIONS from "../question.JS";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  return (
    <div id="question">
      <h2> {QUESTIONS[activeQuestionIndex]}</h2>;
    </div>
  );
}
