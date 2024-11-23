import "./App.css";
import Header from "./Header.jsx";
import Top from "./Top.jsx";
import {useEffect} from  "react";

function App() {

  useEffect(function(){
    fetch("http://localhost:9000/questions")
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch((err) => console.log(`Error: ${err.message}`));
  },[]);

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

export default App;
