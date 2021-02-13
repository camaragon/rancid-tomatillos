
import React, { Component } from 'react';
import '../scss/index.scss';
import Movies from './Movies';
import MovieInfo from './MovieInfo';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      isFetching: false, 
      isLoading: true,
      error: false,
      received: false
    } 
  }

  componentDidMount = () => {
    this.setState({isFetching: true})

    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => response.json())
    .then(data => {
      this.setState({movies: data.movies, isFetching: false})
    }).catch(error => {
      this.state.error = true;
    }).finally({isFetching: false});
  }

  selectMovie = (id) => {   
    if (!this.state.received) {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data.movie);
        this.setState({selectedMovie: data.movie, received: true})
      }).catch(error => {
        this.state.error = true;
      }).finally({isLoading: false});
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1 className='header-title'>Rancid Tomatillos</h1>
        </header>
        {/* {this.state.isLoading && this.state.movies.length === 0 && <h2>Movie info is loading...</h2>} */}
        {this.state.isFetching && <h2 className='loading-text'>The movies are on their way!</h2>}
        <Switch>
          <Route 
            exact 
            path='/' 
            render={ () => {
            if (this.state.error && this.state.movies.length === 0) {
              return (<h2 className='error-text'>Uh oh... we can't find the movies!</h2>)
            }
            this.state.received = false;
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
              return (
              <MovieInfo 
                match={match} 
                title={this.state.selectedMovie.title}
                backdrop={this.state.selectedMovie.backdrop_path}
                poster={this.state.selectedMovie.poster_path}
                overview={this.state.selectedMovie.overview}
                rating={this.state.selectedMovie.average_rating}
                date={this.state.selectedMovie.release_date}
                revenue={this.state.selectedMovie.revenue}
                runtime={this.state.selectedMovie.runtime}
                tagline={this.state.selectedMovie.tagline}
                genres={this.state.selectedMovie.genres} 
              />
              )
            }} 
          />
        </Switch>

      </main>
    );
  }
}

export default App;
