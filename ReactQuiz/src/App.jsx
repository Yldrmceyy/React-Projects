import "./App.css";
import Header from "./Header.jsx";
import Top from "./Top.jsx";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],
  //loading, error,ready,active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.questions,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    default:
      throw new Error("Action unknown");
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({type:"dataFailed"}));
  }, []);

  return (
    <div className="app">
      <Header />
      <Top>
        <p>1/15</p>
        <p>Questions?</p>
      </Top>
    </div>
  );
}
