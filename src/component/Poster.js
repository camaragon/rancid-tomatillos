import React from 'react';
import '../scss/index.scss';

const Poster = ({title, rating, posterImage, id}) => {
    return (
        <div className='poster-wrapper'>
            <h2>{title}</h2>
            <p>{rating}</p>
            <img className='poster-image' id={id} src={posterImage} alt={title}></img>
        </div>
    )
}

export default Poster;