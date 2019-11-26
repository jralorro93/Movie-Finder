import React, { Component} from 'react';
import SearchBar from './components/SearchBar'

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

const App = () => {
  const classes = useStyles()
  return (
    <div>
      <h2>Movie Finder</h2>
      <SearchBar />
    </div>
  )
}

export default App;
