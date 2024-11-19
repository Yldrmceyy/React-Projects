import { useState } from "react";
function App() {
  const [countClicks, setCountClicks] = useState(0);

  const handleClick = () => {
    setCountClicks((prev) => prev + 1);
    // Konum alma işlemi burada çalışacak.
  };

  return (
    <div>
      <button onClick={handleClick}>
        Get Position
      </button>
      <p>Number of requests: {countClicks}</p>
      {/* Konum ve hata mesajları burada gösterilecek */}
    </div>
  );
}

export default App;
