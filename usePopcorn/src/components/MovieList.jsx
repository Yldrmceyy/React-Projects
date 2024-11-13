import React from 'react';

export default function MovieList({ movies }) {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} afiş`} />
          <h3>{movie.Title}</h3>
          <div>
            <p><span>🗓</span><span>{movie.Year}</span></p>
          </div>
        </li>
      ))}
    </ul>
  );
}
