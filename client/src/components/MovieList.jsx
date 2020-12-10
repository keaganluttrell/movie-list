import MovieListEntry from "./MovieListEntry";
import React from 'react';

const MovieList = (props) => (
  <div className='MovieList'>
    {props.movies.map((movie, index) => (
      <MovieListEntry key={index} movie={movie} watchToggle={props.watchToggle} />
    ))}
  </div>
);

export default MovieList;
