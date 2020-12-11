import React from 'react';

const MovieInfo = (props) => (
  <div className='MovieInfo'>
    <div className="movieInfoList">
      <div>Year: {props.movie.info.year}</div>
      <div>RunTime: {props.movie.info.runTime} min</div>
      <div>Metascore: {props.movie.info.metaScore}</div>
      <div>imdbRating: {props.movie.info.rating}</div>

      <div id="watchedToggle" onClick={() => props.watchToggle(props.movie.title)}><span>Watched:</span>
        <input type="radio" checked={props.movie.watched} onChange={() => { }} />
      </div>
    </div>
<div className="img"><img src={props.movie.info.img ? props.movie.info.img : "/client/src/data/default-placeholder-image.png"} /></div>
  </div>
);

export default MovieInfo;
