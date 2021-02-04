import React from 'react';
import './Poster.css';

const Poster = ({title, rating, posterImage, id, key}) => {
    return (
        <div className='poster-wrapper'>
            <h2>{title}</h2>
            <p>{rating}</p>
            <img id='{id}' src={posterImage} alt='Image of {title}'></img>
        </div>
    )
}

export default Poster;