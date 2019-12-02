import React from 'react'

import viewMoviePage from '../utils/movies/viewMoviePage'

import { makeStyles } from '@material-ui/styles'
import { Grid, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    item: {
        padding: '20px'
    },
    poster: {
        maxWidth: '200px'
    }
}))

const Movie = ({movie}) => {
    console.log('this is props from movie', movie)
    const classes = useStyles()
    return (
        <Grid item className={classes.item}>
            <h2>{movie.title}</h2>
            <div className={classes.poster}>
                <img 
                    width='200'
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
            </div>
            <Box>{movie.overview}</Box>
            <p>{movie.release_date}</p>
            <button onClick={ () => viewMoviePage(movie.id)}>View Page</button>
        </Grid>
    )
}
export default Movie