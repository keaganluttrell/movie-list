import React, { useState } from 'react';
import MovieInfo from './MovieInfo.jsx';

const MovieListEntry = (props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='MovieListEntry'>
      <span onClick={() => setToggle(!toggle)}>{props.movie.title}</span>
      {toggle ? <MovieInfo movie={props.movie} watchToggle={props.watchToggle} /> : null}
    </div>
  );
}


export default MovieListEntry;
