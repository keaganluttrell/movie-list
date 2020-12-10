import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
  }

  onChangeHandler(e) {
    this.setState({
      input: e.target.value
    })
  }

  onClickHandler() {
    this.props.addMovieClick(this.state.input);
    this.setState({
      input: ''
    });
  }


  render() {
    return (
      <form className="addMovie">
        <input type="text" placeholder='Add a title...'
          onChange={this.onChangeHandler.bind(this)} value={this.state.input} />
        <button type="button" onClick={this.onClickHandler.bind(this)} >Add Movie!</button>
      </form>
    )
  }
}

export default AddMovie;