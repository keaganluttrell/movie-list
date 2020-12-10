import React from 'react';
import movies from '../data/movies.js';
import AddMovie from './AddMovie.jsx';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';

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
    if (e.length > 0) {
      const newList = [...this.state.movieList];
      newList.push({
        title: e,
        watched: false,
        info: {
          year: 2000,
          runTime: '101 min',
        }
      });
      this.setState({
        movieList: newList,
        filteredList: newList
      });
    }
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
      <div>
        <div className="movieListTitle">
          <h2>Movie List</h2>
          <div className="buttonWrapper" style={{ display: "flex" }}>
            <div
              className="watchedBtn"
              onClick={() => this.setState({ watched: true })}
              style={{ color: 'blue', padding: "10px" }}
            >
              Watched
          </div>
            <div
              className="notWatchedBtn"
              onClick={() => this.setState({ watched: false })}
              style={{ color: 'red', padding: "10px" }}
            >
              Not Watched
          </div>
          </div>
          <div><AddMovie addMovieClick={this.addMovieClick.bind(this)} /></div>
          <div><Search searchClickHandler={this.searchClickHandler.bind(this)} /></div>
        </div>
        <MovieList
          movies={this.state.filteredList.filter(item => item.watched === this.state.watched)}
          watchToggle={this.toggleWatchedMovie.bind(this)}
        />
      </div>
    )
  }
}

export default App;