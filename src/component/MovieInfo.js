import React from 'react';
import '../scss/index.scss';
import '../scss/MovieInfo.scss';

const MovieInfo = ({selectedMovie, handleClick}) => {
    const roundedRating = {}
    const dateConversion = {

    }
    const runTimeConversion = {

    }
    const spaceOutGenres = {

    }
    return (
        <section className='selected-movie-display' style={{backgroundImage: `url(${selectedMovie.backdrop_path})`}}>
            <div className='movie-info-container'>
              <img className='selected-movie-poster' src={selectedMovie.poster_path} alt={`Movie poster of ${selectedMovie.title}`} ></img>
              <div className='movie-info-container-inner'>
                <div className='selected-movie-header-container'>
                  <h2 className='selected-movie-title'>{selectedMovie.title}</h2>
                  <p className='selected-movie-tagline'>{selectedMovie.tagline}</p>
                </div>
                <p className='selected-movie-rating'>{selectedMovie.average_rating}/10 (Average Rating)</p>
                <div className='summary-container'>
                  <p className='selected-movie-overview'>{selectedMovie.overview}</p>
                  <p className='selected-movie-genres'>{selectedMovie.genres}</p>
                </div>
                <p className='selected-movie-revenue'>Revenue: ${selectedMovie.revenue}</p>
                <p className='selected-movie-date'>{selectedMovie.release_date}</p>
                <p className='selected-movie-runtime'>Runtime {selectedMovie.runtime} min</p>
              </div>
            </div>  
            <button className='button-lobby' onClick={handleClick}>Back to Lobby</button>
        </section>
    )
}
export default MovieInfo;