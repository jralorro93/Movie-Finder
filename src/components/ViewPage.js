import React, { useState, useEffect} from 'react'
import axios from 'axios'

import viewMoviePage from '../utils/movies/viewMoviePage'

import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = (theme => ({

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
    
    return (
        <div>
            <button onClick={ () => handleOpen()}>View Page</button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div>
                    <h2>Hi</h2>
                    <h3>No</h3>
                </div>
            </Modal>
        </div>
    )
}
export default ViewPage