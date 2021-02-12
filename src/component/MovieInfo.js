import React from 'react';
import '../scss/index.scss';
import '../scss/MovieInfo.scss';
import { Link } from 'react-router-dom';
const moment = require("moment");

const MovieInfo = ({match, title, backdrop, poster, overview, rating, date, revenue, runtime, tagline, genres}) => {
    const runTimeConversion = {

    }

    return (
        <section className='selected-movie-display' style={{backgroundImage: `url(${backdrop})`}}>
            <div className='movie-info-container'>
              <img className='selected-movie-poster' src={poster} alt={`Movie poster of ${title}`} ></img>
              <div className='movie-info-container-inner'>
                <div className='selected-movie-header-container'>
                  <h2 className='selected-movie-title'>{title}</h2>
                  <p className='selected-movie-tagline'>{tagline}</p>
                </div>
                <p className='selected-movie-rating'>{parseFloat(rating).toFixed(1)}/10 (Average Rating)</p>
                <div className='summary-container'>
                  <p className='selected-movie-overview'>{overview}</p>
                  <p className='selected-movie-genres'>{genres}</p>
                </div>
                <p className='selected-movie-revenue'>Revenue: ${revenue}</p>
                <p className='selected-movie-date'>Release Date: {moment(date).format("LL")}</p>
                <p className='selected-movie-runtime'>Runtime {runtime} min</p>
              </div>
            </div>  
            <Link to='/'><button className='button-lobby' >Back to Lobby</button></Link>
        </section>
    )
}
export default MovieInfo;