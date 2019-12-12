import React from 'react'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    searchBox: {
      marginLeft: '37%'
    }
  }))

const HomePage = () => {
    const [ movies, setMovies ] = useState([])
    const classes = useStyles()
  
    useEffect(() => {
      return () => {setMovies([])}
    }, [])

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
export default HomePage