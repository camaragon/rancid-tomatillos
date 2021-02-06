import React from 'react';
import '../scss/index.scss';

const Poster = ({title, rating, posterImage, id, selectMovie}) => {
    return (
        <div className='poster-wrapper'>
            <h2 className='poster-title'>{title}</h2>
            <p className='poster-rating'>{rating}</p>
            <img onClick={() => selectMovie(id)} className='poster-image' id={id} src={posterImage} alt={`Movie poster of ${title}`}></img>
        </div>
    )
}

export default Poster;