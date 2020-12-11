import React from 'react';

const MovieInfo = (props) => (
  <div className='MovieInfo'>
    <div>Year: {props.movie.info.year}</div>
    <div>RunTime: {props.movie.info.runTime} min</div>
    <div>Metascore: {props.movie.info.metaScore}</div>
    <div>imdbRating: {props.movie.info.rating}</div>
    <div onClick={() => props.watchToggle(props.movie.title)}>Watched:
        <input type="radio" checked={props.movie.watched} onChange={() => { }} />
    </div>
    <div className="img"><img src={props.movie.info.img} /></div>
  </div>
);

export default MovieInfo;
