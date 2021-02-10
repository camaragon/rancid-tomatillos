import React from 'react';
import '../scss/index.scss';
import { Link } from 'react-router-dom';

const Poster = ({title, rating, posterImage, id}) => {
    return (
        <div className='poster-wrapper'>
            <Link to={`/${id}`}> <img className='poster-image' id={id} src={posterImage} alt={`Movie poster of ${title}`}></img></Link> 
            <h2 className='poster-title'>{title}</h2>
            <p className='poster-rating'>{`Average Rating: ${rating}`}</p>
        </div>
    )
}

export default Poster;