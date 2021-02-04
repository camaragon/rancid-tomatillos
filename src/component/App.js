
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
  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <Movies movies={this.state.movies}/>
      </main>
    );
  }
}

export default App;
