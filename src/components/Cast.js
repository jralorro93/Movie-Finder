import React, {useState, useEffect} from 'react'

import CastPicture from './CastPicture'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    image: {
        height: '200px'
    }
}))

const Cast = ({person}) => {
    console.log('person: ', person)
    const url = `https://image.tmdb.org/t/p/w500${person.profile_path}`
    const classes = useStyles()

    return (
        <div>
            <img src={url} className={classes.image}/>
            <p>Character: {person.character}</p>
            <p>Played by: {person.name}</p>
        </div>
    )
}
export default Cast