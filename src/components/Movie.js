import React from 'react'

import ViewPage from '../components/ViewPage'

import { makeStyles } from '@material-ui/styles'
import { Grid, Box } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    item: {
        padding: '20px',
        margin: '7px'
    },
    poster: {
        maxWidth: '200px'
    },
    overview: {
        position: 'relative'
    },
    title: {
        width: '200px'
    }
}))

const Movie = ({movie}) => {
    console.log('this is props from movie', movie)
    const classes = useStyles()
    return (
        <Grid item className={classes.item}>
            <Box component="h2" whiteSpace='normal' className={classes.title}>
                {movie.title}
            </Box>
            <div className={classes.poster}>
                <img 
                    width='200'
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
            </div>
            <p>{movie.release_date}</p>
            <ViewPage movie={movie}/>
        </Grid>
    )
}
export default Movie