import React, {useState, useEffect} from 'react'
import axios from 'axios'

import CastPicture from './CastPicture'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    image: {
        height: '200px'
    }
}))

const Cast = ({person}) => {
    const classes = useStyles()
    const imgUrl = `https://image.tmdb.org/t/p/w500${person.profile_path}`
    return (
        <div>
            <img src={imgUrl} className={classes.image}/>
            <p>Character: {person.character}</p>
            <p>Played by: {person.name}</p>
        </div>
    )
}
export default Cast