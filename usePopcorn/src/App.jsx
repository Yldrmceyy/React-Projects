import React, { useState } from 'react';
import NavBar from './components/NavBar';
import MovieList from './components/MovieList';
import WatchedMovies from './components/WatchedMovies';
import Summary from './components/Summary';
import Box from './components/Box';

const tempMovieData = [
  { imdbID: "tt1375666", Title: "Inception", Year: "2010", Poster: "..." },
  { imdbID: "tt0133093", Title: "The Matrix", Year: "1999", Poster: "..." },
  { imdbID: "tt6751668", Title: "Parasite", Year: "2019", Poster: "..." },
];

const tempWatchedData = [
  { imdbID: "tt1375666", Title: "Inception", Year: "2010", Poster: "...", runtime: 148, imdbRating: 8.8, userRating: 10 },
  { imdbID: "tt0088763", Title: "Back to the Future", Year: "1985", Poster: "...", runtime: 116, imdbRating: 8.5, userRating: 9 },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar query={query} setQuery={setQuery} movies={movies} />

      <main className="main">
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedMovies watched={watched} />
        </Box>
      </main>
    </>
  );
}
