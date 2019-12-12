import React, {useState, useEffect} from 'react'
import axios from 'axios'

import CastPicture from './CastPicture'
import searchPerson from '../utils/movies/searchPerson'

import { makeStyles } from '@material-ui/styles'
import { Grid, Box } from '@material-ui/core'

import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    item: {
        width: '200px',
        margin: '10px',
        padding: '5px'
    },
    image: {
        height: '200px'
    },
    character: {
        wordBreak: 'break-word'
    }
}))

const Cast = ({person}) => {
    const classes = useStyles()
    const imgUrl = `https://image.tmdb.org/t/p/w500${person.profile_path}`
    console.log('this is person', person)
    return (
        <Grid item className={classes.item}>
            <img src={imgUrl} className={classes.image} onClick={ () => searchPerson(person.id)}/>
            <p className={classes.character}>Character: {person.character}</p>
            <Box component={Link} to='/actorProfile'>Played by: {person.name}</Box>
        </Grid>
    )
}
export default Cast

//Left off at needing to pass id to find specific actor