import React from 'react';
import { TMDB_API, fetchURL } from '../api/tmdbAPI.js';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      searchMovies: []
    }
  }

  onChangeHandler(e) {
    // fetch prop function we pass
    if (e.length < 1) {
      this.setState({
        searchMovies: []
      });
    } else {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API}&query=${e.target.value}`,
        { headers: { 'Content-Type': 'application/json' }, method: 'GET' })
        .then(response => response.json())
        .then(data => data.results)
        .then(data => {
          this.setState({
            searchMovies: Array.isArray(data) ? data.slice(0, 5) : []
          });
        });
    }

    this.setState({
      input: e.target.value
    })
  }

  onClickHandler() {
    this.props.addMovieClick(this.state.searchMovies[0].id);
    this.setState({
      input: '',
      searchMovies: []
    });
  }


  render() {
    return (
      <form className="addMovie">
        <input list="addOptions" type="text" placeholder='Add a title...'
          onChange={this.onChangeHandler.bind(this)} value={this.state.input} />

        <datalist id="addOptions">
          {this.state.searchMovies.map((movie, index) => <option value={movie.title} key={movie.title + index} />)}
        </datalist>
        <button className="btn btn-success btn-sm" type="button" onClick={this.onClickHandler.bind(this)} >Add Movie!</button>
      </form>
    )
  }
}

export default AddMovie;