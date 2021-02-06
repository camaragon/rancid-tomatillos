
import React, { Component } from 'react';
import '../scss/index.scss';
import movieData from '../movieData';
import Movies from './Movies';
import MovieInfo from './MovieInfo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: "",
      isFetching: false, 
      isLoading: false,
      error: null
    } 
  }

  componentDidMount = () => {
    this.setState({isFetching: true})

    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => response.json())
    .then(data => {
      console.log(data.movies);
      this.setState({movies: data.movies, isFetching: false})
    }).catch(error => {
      this.setState({isFetching: false})
    });
  }

  handleChange = () => {
    this.setState({selectedMovie: ""})
  }

  selectMovie = (id) => {   
    this.setState({isLoading: true})
    
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.movie);
      this.setState({selectedMovie: data.movie, isLoading: false})
    }).catch(error => {
      console.log(error);
      this.setState({isLoading: false, error: error})
    });
  }

  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {this.state.isFetching && <h2>The movies are on their way!</h2>}
        {this.state.selectedMovie && <MovieInfo isLoading={this.state.isLoading} selectedMovie={this.state.selectedMovie} handleChange={this.handleChange}/>}
        {!this.state.selectedMovie && <Movies movies={this.state.movies} selectMovie={this.selectMovie}/>}
      </main>
    );
  }
}

export default App;
