import { useState } from "react";

const initialBungalows = [
  {
    id: 1,
    name: "Bungalow A",
    image: "https://loremflickr.com/320/320/house",
    price: 200,
  },
  {
    id: 2,
    name: "Bungalow B",
    image: "https://loremflickr.com/320/320/house",
    price: 250,
  },
  {
    id: 3,
    name: "Bungalow C",
    image: "https://loremflickr.com/320/320/house",
    price: 300,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const [bungalows, setBungalows] = useState(initialBungalows);
  const [showAddBungalow, setShowAddBungalow] = useState(false);

  function handleShowAddBungalow() {
    return setShowAddBungalow(!showAddBungalow);
    // setShowAddFriend((show)=>!show)
  }
  function handleAddBungalow(bungalow) {
    setBungalows((bungalows) => [...bungalows, bungalow]);
    setShowAddBungalow(false);
  }

  return (
    <div className="app">
      <div className="left-column">
        <BungalowList 
          bungalows={bungalows}
          
        />
        {showAddBungalow && <FormAddBungalow onAddBungalow={handleAddBungalow} />}
        <Button onClick={handleShowAddBungalow}>
          {showAddBungalow ? "Close" : "Add Bungalow"}
        </Button>
      </div>
      <div className="right-column">
        <FormReservation />
      </div>
    </div>
  );
}

export default App;

function BungalowList({bungalows }) {
  return (
    <div className="bungalow-list">
      <h1>Bungalow List</h1>
      <ul>
        {bungalows.map((bungalow) => (
          <BungalowItem bungalow={bungalow} key={bungalow.id}
           />
        ))}
      </ul>
    </div>
  );
}

function BungalowItem({ bungalow }) {
  return (
    <li className="bungalow-item">
      <img src={bungalow.image} alt="Bungalow Image" />
      <h3>{bungalow.name}</h3>
      <p>Price: ${bungalow.price}</p>
      <button className="button">Select For Reservation</button>
    </li>
  );
}

function FormAddBungalow({onAddBungalow}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://loremflickr.com/320/320/house");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newBungalow = {
      id,
      name,
      image,
      price :Number(price),
    };
    onAddBungalow(newBungalow);
  }

  return (
    <form className="form-add-bungalow" onSubmit={handleSubmit}>
      <label>Bungalow Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label>Price</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <Button>Add Bungalow</Button>
    </form>
  );
}

function FormReservation() {
  return (
    <form className="form-reservation">
      <h2>Reserve Bungalow</h2>
      <label>Bungalow ID</label>
      <input type="text" />
      <label>Your Name</label>
      <input type="text" />
      <button className="button">Reserve</button>
    </form>
  );
}
