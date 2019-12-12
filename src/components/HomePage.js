import React, {useState, useEffect} from 'react'

import { Box } from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

import Header from './Header'
import SearchBar from './SearchBar'
import MoviesContainer from '../containers/MoviesContainer'

// const useStyles = makeStyles(theme => ({
//     searchBox: {
//       marginLeft: '37%'
//     }
//   }))

const HomePage = () => {
    const [ movies, setMovies ] = useState([])
    // const classes = useStyles()
  
    // useEffect(() => {
    //   return () => {setMovies([])}
    // }, [])

    return (
        <div>
            {/* <Box className={classes.searchBox}> */}
            <Header />
            {/* <SearchBar setMovies={setMovies}/>
            </Box>
            <MoviesContainer movies={movies}/> */}
        </div>
    )
}
export default HomePage