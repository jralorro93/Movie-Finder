import React from 'react'

const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({movie}) => {
    // console.log('this is props from movie', props)
    const moviePoster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
    return (
        <div>
            <h2>{movie.Title}</h2>
            <div>
                <img 
                    width='200'
                    alt={movie.Title}
                    src={moviePoster}
                />
            </div>
            <p>{movie.year}</p>
        </div>
    )
}
export default Movie