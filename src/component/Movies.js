import React, { Component } from 'react';
import '../scss/index.scss'
import Poster from './Poster';

const Movies = ({movies}) => {
    const moviePosters = movies.map(movie => {
        return (
            <Poster 
                title={movie.title}
                rating={movie.average_rating}
                posterImage={movie.poster_path}
                id={movie.id}
                key={movie.id}
            />
        )
    })
    
    return (
        <section className='movie-grid'>
            {moviePosters}
        </section>
    )
}

export default Movies;