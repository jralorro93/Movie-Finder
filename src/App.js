import React, { useState } from 'react';

import SearchBar from './components/SearchBar'
import MoviesContainer from './containers/MoviesContainer'

import {Box} from '@material-ui/core'

const App = () => {
  const [ movies, setMovies ] = useState([])
  
  return (
    <div>
      <Box>
        <h2>}>Movie Finder</h2>
        <SearchBar setMovies={setMovies}/>
      </Box>
      <MoviesContainer movies={movies}/>
    </div>
  )
}

export default App;
