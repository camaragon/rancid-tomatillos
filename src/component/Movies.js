import React from 'react';
import '../scss/index.scss'
import Poster from './Poster';

const Movies = ({movies, selectMovie}) => {
    const moviePosters = movies.map(movie => {
        return (
            <Poster 
                title={movie.title}
                rating={movie.average_rating}
                posterImage={movie.poster_path}
                id={movie.id}
                key={movie.id}
                selectMovie={selectMovie}
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