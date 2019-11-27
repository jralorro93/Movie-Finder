import React from 'react'

import viewMoviePage from '../utils/movies/viewMoviePage'

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({movie}) => {
    console.log('this is props from movie', movie)
    
    return (
        <div>
            <h2>{movie.title}</h2>
            <div>
                <img 
                    width='200'
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
            </div>
            <p>{movie.release_date}</p>
            <button onClick={ () => viewMoviePage(movie.id)}>View Page</button>
        </div>
    )
}
export default Movie