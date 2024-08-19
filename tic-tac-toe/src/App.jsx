import "./index.css";
import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        PLAYERS
        <ol id="players">
          <Player />

          <button>Edit</button>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
