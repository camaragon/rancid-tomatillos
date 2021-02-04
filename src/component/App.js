
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
        <h1></h1>
        <Movies />
      </main>
    );
  }
}

export default App;
