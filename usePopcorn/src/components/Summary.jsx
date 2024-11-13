import React from 'react';

const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

export default function Summary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating)).toFixed(1);
  const avgUserRating = average(watched.map((movie) => movie.userRating)).toFixed(1);
  const avgRuntime = average(watched.map((movie) => movie.runtime)).toFixed(1);

  return (
    <div className="summary">
      <h2>İzlediğiniz Filmler</h2>
      <div>
        <p><span>#️⃣</span><span>{watched.length} film</span></p>
        <p><span>⭐️</span><span>{avgImdbRating}</span></p>
        <p><span>🌟</span><span>{avgUserRating}</span></p>
        <p><span>⏳</span><span>{avgRuntime} dk</span></p>
      </div>
    </div>
  );
}
