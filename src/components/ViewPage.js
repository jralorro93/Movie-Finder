import React, { useState} from 'react'

import viewMoviePage from '../utils/movies/viewMoviePage'

import { Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = (theme => ({

}))

const ViewPage = ({movie}) => {
    const classes = useStyles()
    const [ open, setOpen ] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <button onClick={ () => {viewMoviePage(movie.id); handleOpen()}}>View Page</button>
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