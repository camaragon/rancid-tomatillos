import React from 'react';
import './Poster.css';

const Poster = ({title, rating, posterImage, id}) => {
    return (
        <div className='poster-wrapper'>
            <h2>{title}</h2>
            <p>{rating}</p>
            <img id={id} src={posterImage} alt={title}></img>
        </div>
    )
}

export default Poster;