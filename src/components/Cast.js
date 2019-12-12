import React, {useState, useEffect} from 'react'
import axios from 'axios'

import searchPerson from '../utils/movies/searchPerson'
import ActorProfile from './ActorProfile'

import { makeStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

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
    
    return (
        <Grid item className={classes.item}>
            <img src={imgUrl} className={classes.image} onClick={ () => searchPerson(person.id)}/>
            <p className={classes.character}>Character: {person.character}</p>
            <p>Played by: {person.name}</p>
            <ActorProfile actor={person}/>
        </Grid>
    )
}
export default Cast

//Left off at needing to pass id to find specific actor