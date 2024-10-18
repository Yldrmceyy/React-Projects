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

function App() {
  return (
    <div className="app">
      <div className="left-column">
        <BungalowList />
        <FormAddBungalow />
      </div>
      <div className="right-column">
        <FormReservation />
      </div>
    </div>
  );
}

export default App;

function BungalowList() {
  const bungalow = initialBungalows;
  return (
    <div className="bungalow-list">
      <h1>Bungalow List</h1>
      <ul>
        {bungalow.map((bungalow) => (
          <BungalowItem bungalow={bungalow} key={bungalow.id} />
        ))}
      </ul>
    </div>
  );
}

function BungalowItem({ bungalow }) {
  return (
    <li className="bungalow-item">
      <img src={bungalow.image} alt="Bungalow Image" />
      <h3 >{bungalow.name}</h3>
      <p>Price: ${bungalow.price}</p>
      <button className="button">Select For Reservation</button>
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
