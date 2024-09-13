import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>

<input type="range"  min="0" max="10"/>

        <button onClick={() => setStep((s) => s - 1)}> - </button>
        <span> Step : {step} </span>
        <button onClick={() => setStep((s) => s + 1)}> + </button>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}> - </button>
        <span> Count : {count} </span>
        <button onClick={() => setCount((c) => c + step)}> + </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
