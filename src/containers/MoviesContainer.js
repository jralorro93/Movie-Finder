import React from 'react'
import Movie from '../components/Movie'

const MoviesContainer = (props) => {
    // console.log('porps', props.movies)
    const renderMovies = () => {
        
    }
    return (
        <div>
            {props.movies.map((movie, index) => <Movie key={index} movie={movie}/>)}
        </div>
    )
}
export default MoviesContainer