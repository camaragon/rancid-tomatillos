import React, {Component} from 'react';
import '../scss/index.scss';

const MovieInfo = ({selectedMovie}) => {
    
    return (
        <div className='selected-movie-display'>
            <h2>{selectedMovie.title}</h2>
        </div>
    )
}
export default MovieInfo;