
import React, { Component } from 'react';
import '../scss/index.scss';
import movieData from '../movieData';
import Movies from './Movies';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies
    } 
  }

  selectMovie = (id) => {
    const selectedMovie = this.state.movies.find(movie => movie.id === id)
    this.setState({movies: selectedMovie})
  }

  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <Movies movies={this.state.movies} selectMovie={this.selectMovie}/>
      </main>
    );
  }
}

export default App;
