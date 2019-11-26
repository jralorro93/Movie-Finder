import React, { useState } from 'react';

import SearchBar from './components/SearchBar'
import MoviesContainer from './containers/MoviesContainer'

import { makeStyles } from '@material-ui/core/styles'

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
  const [ movies, setMovies ] = useState([])
  return (
    <div>
      <h2>Movie Finder</h2>
      <SearchBar />
      <MoviesContainer />
    </div>
  )
}

export default App;
