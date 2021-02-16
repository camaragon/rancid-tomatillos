import React from 'react';
import '../scss/index.scss';
import { Link } from 'react-router-dom';
import Tomato from '../Tomato.js';

const Poster = ({title, rating, posterImage, id}) => {
    return (
        <div className='poster-wrapper'>
            <div className='rating-wrapper'>
              <p className='poster-rating'>{`${rating}`}/10</p>
              <Tomato />
            </div>
            <Link to={`/${id}`}> 
                <img 
                    className='poster-image' 
                    id={id} 
                    src={posterImage} 
                    alt={`Movie poster of ${title}`}>
                </img>
            </Link> 
            <h2 className='poster-title'>{title}</h2>
        </div>
    )
}

export default Poster;