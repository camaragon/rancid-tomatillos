import React from 'react';
import '../scss/index.scss';

const Poster = ({title, rating, posterImage, id, selectMovie}) => {
    return (
        <div className='poster-wrapper'>
            <img onClick={() => selectMovie(id)} className='poster-image' id={id} src={posterImage} alt={`Movie poster of ${title}`}></img>
            <h2 className='poster-title'>{title}</h2>
            <p className='poster-rating'>{`Average Rating: ${rating}`}</p>
        </div>
    )
}

export default Poster;