import React, { Component } from 'react';
import '../scss/index.scss';
import Movies from './Movies';
import MovieInfo from './MovieInfo';
import { Route } from 'react-router-dom';
import { List } from 'react-content-loader';
import Tomato from '../Tomato';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      filteredMovies: [],
      isSorted: false,
      isFetching: false, 
      isLoading: false,
      error: false,
      received: false,
      didSearch: false
    }
  }

  componentDidMount = () => {
    this.setState({isFetching: true})
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(response => response.json())
    .then(data => {
      this.setState({movies: data.movies, isFetching: false})
    }).catch(error => {
      this.setState({ error: true, isFetching: false})
    })
  }

  selectMovie = (id) => { 
    if (!this.state.received) {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({selectedMovie: data.movie, received: true})
      }).catch(error => {
        this.setState({ error: true, isFetching: false})
      })
    }
  }

  MyListLoader = () => <List />

  searchMovieTitle = (searchInput) => {
    const searchedMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchInput.toLowerCase());
    })
    this.setState({filteredMovies: searchedMovies, didSearch: true})
  }

  handleClick = () => {
    this.setState({filteredMovies: [], didSearch: false})
    this.render();
  }

  sortMovies = (e) => {
    this.setState({isSorted: true})
    if (e === '1') {
      const sortedMovies = this.state.movies.sort((a, b) => b.average_rating - a.average_rating); 
      return sortedMovies;
    } else if (e === '2') {
      const sortedMovies = this.state.movies.sort((a, b) => a.average_rating - b.average_rating);
      return sortedMovies;
    } else if (e === '3') {
      const sortedMovies = this.state.movies.sort((a, b) => a.title.localeCompare(b.title));
      return sortedMovies;
    }
      const sortedMovies = this.state.movies.sort((a, b) => b.title.localeCompare(a.title));
      return sortedMovies;
  }

  render() {
    return (
      <main>
        <header>
          <h1 className='header-title'>
            <Tomato /> RANCID TOMATILLOS <Tomato />
            </h1>
        </header>
        {this.state.isFetching && <List className='content-loader' />}
        <Route 
          exact 
          path='/' 
          render={ () => {
          {this.state.error && this.state.movies.length === 0 && <h2 className='error-text'>Uh oh... we can't find the movies!</h2>}
          if (this.state.filteredMovies.length === 0 && !this.state.didSearch && !this.state.isFetching) {
            this.state.received = false;
            return (
              <Movies 
                movies={this.state.movies} 
                searchMovieTitle={this.searchMovieTitle} 
                sortMovies={this.sortMovies} 
                handleClick={this.handleClick} 
                isSorted={this.state.isSorted} 
                didSearch={this.state.didSearch}
              />)
          } else if (this.state.filteredMovies.length === 0 && this.state.didSearch) {
            return (
              <React.Fragment>
                  <h2>No criteria matched your search!</h2>
                  <button  
                    onClick={this.handleClick} 
                    className='button-lobby' 
                  >Go Back
                  </button>
              </React.Fragment>
            )
          } else if (this.state.isSorted) {
            return (
              <Movies 
                movies={this.sortMovies} 
                searchMovieTitle={this.searchMovieTitle} 
                sortMovies={this.sortMovies} 
                handleClick={this.handleClick} 
                isSorted={this.state.isSorted} 
                didSearch={this.state.didSearch}
              />)
          }
          this.state.received = false;
            return (
              <Movies 
                movies={this.state.filteredMovies} 
                searchMovieTitle={this.searchMovieTitle} 
                sortMovies={this.sortMovies} 
                handleClick={this.handleClick} 
                isSorted={this.state.isSorted} 
                didSearch={this.state.didSearch}
              />)
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
              !this.state.received ? <List /> : <MovieInfo 
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
      </main>
    );
  }
}

export default App;
