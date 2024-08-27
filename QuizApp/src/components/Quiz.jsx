import { useState } from "react";
import QUESTIONS from "../question.JS";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

function handleSelectAnswer(selectedAnswer){
setUserAnswers();
}



  return (
    <div id="question">
      <h2> {QUESTIONS[activeQuestionIndex]}</h2>
      <ul id="question">
        {QUESTIONS[activeQuestionIndex].answers.map((answer)=>(
            <li key={answer} className="answer">
            <button onClick={()=>handleSelectAnswer(answer)}>
                {answer}
            </button>

            </li>
        ))}
      </ul>


    </div>
  );
}
