import React, { useState } from 'react';

import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MoviesContainer from './containers/MoviesContainer'

import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles(theme => ({
  searchBox: {
    marginLeft: '37%'
  }
}))

const App = () => {
  const [ movies, setMovies ] = useState([])
  const classes = useStyles()
  return (
    <div>
      <Box className={classes.searchBox}>
        <Header />
        <SearchBar setMovies={setMovies}/>
      </Box>
      <MoviesContainer movies={movies}/>
    </div>
  )
}

export default App;
