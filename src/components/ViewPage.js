import React, { useState, useEffect} from 'react'
import axios from 'axios'

import { Dialog, Typography, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        minHeight: '100px',
        backgroundColor: theme.palette.background.paper,
        marginTop: '100px',
        marginLeft: '225px',
        border: '2px solid #fff',
        display: 'flex',
        padding: '15px'
    },
    title: {
        position: 'relative',
       
        
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
    
    useEffect(() => {
        const fetchMovieInfo = async () => {
            const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=a64ac52df84876407a110b1db357ebe3`
            const res = await axios.get(url)
            setMovieDetails(res.data)
        } 
        fetchMovieInfo()
    }, [])
    console.log('this is movieDetails', movieDetails)
    return (
        <div>
            <button onClick={ () => handleOpen()}>View Page</button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll='paper'
                maxWidth='xl'
            >
                <Typography component="div" className={classes.paper}>
                    <img 
                        width='200'
                        alt={movieDetails.title}
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    <Box component='h2' className={classes.title}>
                        {movie.title}
                    </Box>
                    <br/>
                    <Box component='h2'>
                        Hi
                    </Box>
                </Typography>
            </Dialog>
        </div>
    )
}
export default ViewPage