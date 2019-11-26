import React, { useState } from 'react'

import searchMovie from '../utils/Search/searchMovie'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core'
import { Menu, Search } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
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

const SearchBar = () => {
    const classes = useStyles()
    const [ search, setSearch ] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return (
        <Paper component='form' className={classes.root}>
            <IconButton>
                <Menu/>
            </IconButton>
            <InputBase 
                className={classes.input}
                placeholder='Type any movie, series, or documentary'
                value={search}
            />
            <IconButton onClick={() => searchMovie()}>
                <Search />
            </IconButton>
        </Paper>
    )
}
export default SearchBar