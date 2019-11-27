import React from 'react'
import Movie from '../components/Movie'

const MoviesContainer = (props) => {
    console.log('porps', props.movies)
    const renderMovies = () => {
        props.movies.map((movie, index) => {
            <Movie key={index} movie={movie}/>
        })
    }
    return (
        <div>

        </div>
    )
}
export default MoviesContainer