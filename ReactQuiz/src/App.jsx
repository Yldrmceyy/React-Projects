import "./App.css";
import Header from "./Header.jsx";
import DateCounter from "./DateCounter.jsx";
import Top from "./Top.jsx";
function App() {
  return (
    <div className="app">
      <Header />
      <Top>
        <p>
          1/15
        </p>
        <p>
          Questions?
        </p>
      </Top>
    </div>
  );
}

export default App;
