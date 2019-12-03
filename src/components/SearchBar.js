import React, { useState, useEffect } from 'react'

import searchMovies from '../utils/movies/searchMovies'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core'
import { Menu, Search } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginLeft: '34%'
    },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
      iconButton: {
        padding: 10,
    },
      divider: {
        height: 28,
        margin: 4,
    },
}))

const SearchBar = (props) => {
    const classes = useStyles()
    const [ searchValue, setSearchValue ] = useState('')

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const resetSearchValue = () => {
        setSearchValue('')
    }

    const callSearchFunction = async (e) => {
        e.preventDefault()
        const movies = await searchMovies(searchValue)
        props.setMovies(movies)
        resetSearchValue()
    }

    return (
        <Paper component='form' className={classes.root}>
            <IconButton>
                <Menu/>
            </IconButton>
            <InputBase 
                className={classes.input}
                placeholder='Type any movie, series, or documentary'
                value={searchValue}
                onChange={handleChange}
                type='text'
            />
            <IconButton type='submit' onClick={callSearchFunction}>
                <Search />
            </IconButton>
        </Paper>
    )
}
export default SearchBar