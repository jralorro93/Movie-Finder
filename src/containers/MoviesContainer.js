import React from 'react'
import Movie from '../components/Movie'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    container: {
        width: '1100px',
        marginLeft: '225px'
    },
    item: {
        padding: '20px'
    }
}))

const MoviesContainer = (props) => {
    const classes = useStyles()
    return (
        <Grid container className={classes.container}>
            {props.movies.map((movie, index) => 
                <Movie key={index} movie={movie}/>
            )}
        </Grid>
    )
}
export default MoviesContainer