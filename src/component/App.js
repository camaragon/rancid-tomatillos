
import React, { Component } from 'react';
import '../scss/index.scss';
import Movies from './Movies';
import MovieInfo from './MovieInfo';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: "",
      isFetching: false, 
      isLoading: false,
      allMoviesError: null,
      movieError: null
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
      this.setState({isFetching: false, allMoviesError: error})
    });
  }

  handleClick = () => {
    this.setState({selectedMovie: ""})
  }

  selectMovie = (id) => {   
    // this.setState({isLoading: true})
    
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.movie);
      this.setState({selectedMovie: data.movie, isLoading: false})
    }).catch(error => {
      this.setState({isLoading: false, movieError: error})
    });
  }

  render() {
    return (
      <main>
        <header>
          <h1 className='header-title'>Rancid Tomatillos</h1>
        </header>
        {/* {this.state.movieError && <h2 className='error-text'>Uh oh... We can't find that movie info!</h2>}
        {this.state.allMoviesError && <h2 className='error-text'>Uh oh! Looks like we can't find the movies!</h2>}
        {this.state.isLoading && <h2>Movie info is loading...</h2>}
        {this.state.isFetching && <h2 className='loading-text'>The movies are on their way!</h2>} */}
        <Route exact path='/' render={ () => <Movies movies={this.state.movies} selectMovie={this.selectMovie}/>} />
        <Route exact path='/:id' render={({ match }) => {
          const currentMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
          if (!currentMovie) {
            return (<h2>Uh oh... we can't find that movie!</h2>);
          }
          this.selectMovie(currentMovie.id);
          return <MovieInfo match={match} selectedMovie={this.state.selectedMovie} />
        }} 
        />

      </main>
    );
  }
}

export default App;
