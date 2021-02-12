
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
      isLoading: true
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
      //add error state error: true 
      //in the <route> add condition for error
      //.finally({isFetching: false}) instead
    });
  }

  selectMovie = (id) => {   
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.movie);
      this.setState({selectedMovie: data.movie, isLoading: false})
    }).catch(error => {
      this.setState({isLoading: false})
    });
  }

  render() {
    return (
      <main>
        <header>
          <h1 className='header-title'>Rancid Tomatillos</h1>
        </header>
        {/* {this.state.isLoading && this.state.movies.length === 0 && <h2>Movie info is loading...</h2>} */}
        {this.state.isFetching && <h2 className='loading-text'>The movies are on their way!</h2>}
        <Route 
        exact 
        path='/' 
        render={ () => {
        if (!this.state.movies) {
          console.log(this.state.movies)
          // this.state.isFetching = false;
          return (<h2 className='error-text'>Uh oh... we can't find that movie!</h2>)
        }
        return <Movies movies={this.state.movies} />
      }}
        />
        <Route 
        exact 
        path='/:id' 
        render={({ match }) => {
          const currentMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
          if (!currentMovie) {
            return (<h2 className='error-text'>Uh oh... we can't find that movie!</h2>);
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
