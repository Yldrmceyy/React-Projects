
export default function NavBar({ query, setQuery, movies }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Film ara..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <p className="num-results">
        <strong>{movies.length}</strong> film bulundu
      </p>
    </nav>
  );
}
