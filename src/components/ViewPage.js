import React, { useState, useEffect} from 'react'
import axios from 'axios'

import ImageCarosel from './ImageCarousel'

import { Dialog, Typography, Box, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        minHeight: '100px',
        backgroundColor: theme.palette.background.paper,
        padding: '15px',
        minWidth: '600px'

    },
    title: {
        height: '20px'
    },
    poster: {
        display: 'flex'
    },
    tagline: {
        marginLeft: '10px',
        padding: '10px'
    },
    overview: {
        marginLeft: '10px',
        padding: '10px'
    },
    rating: {
        margin: '80px 0 0 10px',
        padding: '10px'
    },
    divider: {
        margin: '50px 0 50px 0'
    }
}))

const ViewPage = ({movie}) => {
    const classes = useStyles()
    const [ open, setOpen ] = useState(false)
    const [ movieDetails, setMovieDetails ] = useState({})

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    // const showGenres = (genres) => {
    //     const newArray = []
    //     genres.forEach(genre => newArray.push(genre.name))
    //     // for (let i = 0; i < newArray.length; i++) {

    //     // }
    //     console.log(newArray)
    // }

    useEffect(() => {
        //set genres here
    },[])
    
    useEffect(() => {
        const fetchMovieInfo = async () => {
            const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=a64ac52df84876407a110b1db357ebe3&append_to_response=videos,images,credits`
            const res = await axios.get(url)
            setMovieDetails(res.data)
        } 
        fetchMovieInfo()
    }, [])
    console.log('this is moveiDetails', movieDetails)
    return (
        <div>
            <button onClick={ () => handleOpen()}>View Page</button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll='paper'
                maxWidth='md'
            >
                <Typography component="div" className={classes.paper}>
                    <Box component='h2' className={classes.title}>
                        {movie.title}
                    </Box>
                    <Box component='div' className={classes.poster}>
                        <img 
                            width='200'
                            alt={movieDetails.title}
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        />
                        <div>
                            <h2 className={classes.tagline}>
                                {movieDetails.tagline}
                            </h2>
                            <p className={classes.overview}>
                                {movie.overview}
                            </p>
                            <h4>Genres: </h4>
                            <h4 className={classes.rating}>{`Rating: ${movie.vote_average}/10`}</h4>
                        </div>
                    </Box>
                    <Divider variant='middle' className={classes.divider}/>
                    <ImageCarosel images={movieDetails.images}/>
                </Typography>
            </Dialog>
        </div>
    )
}
export default ViewPage