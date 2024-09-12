import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setCount((c) => c - 1)}> - </button>
        <span>   Count : {count}   </span> 
        <button onClick={() => setCount((c) => c + 1)}> + </button>
      </div>
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
