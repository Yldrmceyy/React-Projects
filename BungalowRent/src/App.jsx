const bungalows = [
  {
    id: 1,
    name: "Bungalow A",
    image: "https://via.placeholder.com/100",
    price: 200,
  },
  {
    id: 2,
    name: "Bungalow B",
    image: "https://via.placeholder.com/100",
    price: 250,
  },
  {
    id: 3,
    name: "Bungalow C",
    image: "https://via.placeholder.com/100",
    price: 300,
  },
];

function App() {
  return (
    <>
      <BungalowList />
      <ul className="bungalow-list">
        <BungalowItem name="Bungalow A" price={200} />
        <BungalowItem name="Bungalow B" price={250} />
        <BungalowItem name="Bungalow C" price={300} />
      </ul>
      <FormAddBungalow />
      <FormReservation />
    </>
  );
}

export default App;

function BungalowList() {
  return (
    <div className="app">
      <div className="sidebar">
        <h1>Bungalow List</h1>
        <ul className="bungalow-list"></ul>
      </div>
    </div>
  );
}

function BungalowItem({ name, price }) {
  return (
    <li className="bungalow-item">
      <img src="https://via.placeholder.com/100" alt="Bungalow Image" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button className="button">Select</button>
    </li>
  );
}

function FormAddBungalow() {
  return (
    <form className="form-add-bungalow">
      <label>Bungalow Name</label>
      <input type="text" />
      <label>Image URL</label>
      <input type="text" />
      <label>Price</label>
      <input type="number" />
      <button className="button">Add Bungalow</button>
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
