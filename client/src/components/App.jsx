import React from 'react';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import { TMDB_API, fetchURL } from '../api/tmdbAPI.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      filteredList: [],
      watched: false
    }
  }

  searchClickHandler(e) {
    if (e.length < 1) {
      this.setState({
        filteredList: this.state.movieList
      })
    } else {
      const updated = this.state.movieList.filter(movie => {
        return movie.title.toLowerCase().includes(e.toLowerCase());
      });
      if (updated.length < 1) {
        this.setState({
          filteredList: [{ title: 'no movie found...' }],
        });
      } else {
        this.setState({
          filteredList: updated,
        });
      }
    }
  }

  addMovieClick(e) {
    const newList = [...this.state.movieList];
    fetch(`https://api.themoviedb.org/3/movie/${e}?api_key=${TMDB_API}`)
      .then(response => response.json())
      .then(data => {
        newList.push({
          title: data.title,
          watched: false,
          info: {
            year: parseInt(data.release_date),
            runTime: data.runtime,
            rating: data.vote_average,
            metaScore: data.popularity,
            img: `http://image.tmdb.org/t/p/w200${data.poster_path}`
          },
        });
      });

    this.setState({
      movieList: newList,
      filteredList: newList
    });
  }

  toggleWatchedMovie(title) {
    const newList = [...this.state.movieList]
    newList.forEach(movie => {
      if (movie.title === title) {
        movie.watched = !movie.watched;
      }
    });
    this.setState({
      movieList: newList
    });
  }

  render() {

    return (
      <div className="appWrapper">
        <div className="movieListTitle">

          <div className="appTitle"><span>Keagan's Movie List</span></div>

          <div className="addMovie">
            <AddMovie addMovieClick={this.addMovieClick.bind(this)} />
          </div>

          <div className="buttonWrapper" >
            <div
              className="watchedBtn"
              onClick={() => this.setState({ watched: true })}
            >
              Watched
            </div>

            <div
              className="notWatchedBtn"
              onClick={() => this.setState({ watched: false })}
            >
              Not Watched
            </div>

            <div className="searcher">
              <Search searchClickHandler={this.searchClickHandler.bind(this)} />
            </div>
          </div>

        </div>
        <div className="list">
          <MovieList
            movies={this.state.filteredList.filter(item => item.watched === this.state.watched)}
            watchToggle={this.toggleWatchedMovie.bind(this)}
          />
        </div>
      </div>
    )
  }
}

export default App;