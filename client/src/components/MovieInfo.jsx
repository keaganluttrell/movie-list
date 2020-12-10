import React from 'react';

const MovieInfo = (props) => (
  <div className='MovieInfo'>
    <span>Year: {props.movie.info.year}</span><br></br>
    <span>RunTime: {props.movie.info.runTime}</span><br></br>
    <span>Watched:
        <input type="radio" checked={props.movie.watched} onChange={() => props.watchToggle(props.movie.title)} />
    </span>
  </div>
);

export default MovieInfo;
