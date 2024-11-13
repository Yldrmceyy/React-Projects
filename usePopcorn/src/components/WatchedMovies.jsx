import React from 'react';

export default function WatchedMovies({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <li key={movie.imdbID}>
          <img src={movie.Poster} alt={`${movie.Title} afiş`} />
          <h3>{movie.Title}</h3>
          <div>
            <p><span>⭐️</span><span>{movie.imdbRating}</span></p>
            <p><span>🌟</span><span>{movie.userRating}</span></p>
            <p><span>⏳</span><span>{movie.runtime} dk</span></p>
          </div>
        </li>
      ))}
    </ul>
  );
}
