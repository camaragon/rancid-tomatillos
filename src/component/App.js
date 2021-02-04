
import './App.css';
import movieData from '../movieData';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [movieData]
    } 
  }
  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <p>{this.state.movies.movies}</p>
      </main>
    );
  }
}

export default App;
