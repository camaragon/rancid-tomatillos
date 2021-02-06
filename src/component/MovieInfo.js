import React, {Component} from 'react';
import '../scss/index.scss';
import '../scss/MovieInfo.scss';

const MovieInfo = ({selectedMovie}) => {
    
    return (
        <section className='selected-movie-display'>
            <button className="button-lobby">Back to Lobby</button>
            <div className='movie-info-container'>
              <h2 className='selected-movie-title'>{selectedMovie.title}</h2>
              <img className='selected-movie-poster' src={selectedMovie.poster_path}></img>
              <p className='selected-movie-overview'>{selectedMovie.overview}</p>
              <p className='selected-movie-rating'>{selectedMovie.average_rating}</p>
              <p className='selected-movie-date'>{selectedMovie.release_date}</p>
              <p className='selected-movie-revenue'>{selectedMovie.revenue}</p>
              <p className='selected-movie-runtime'>{selectedMovie.runtime}</p>
              <p className='selected-movie-tagline'>{selectedMovie.tagline}</p>
              <p className='selected-movie-genres'>{selectedMovie.genres.name}</p>
            </div>  
        </section>
    )
}
export default MovieInfo;