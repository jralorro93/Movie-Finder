import React, {useState, useEffect} from 'react'
import axios from 'axios'

import photoChecker from '../utils/photo/photoChecker'
import defaultPic from '../images/defaultPic.jpg'

import { Button, Modal, Dialog, Typography, Box } from '@material-ui/core'
import  {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '15px',
    }
}))

const ActorProfile = ({actor}) => {
    const [ open, setOpen ] = useState(false)
    const [ actorDetails, setActorDetails ] = useState({})
    const [ profilePic, setProfilePic ] = useState('')
    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        const fetchActorData = async () => {
            const url = `https://api.themoviedb.org/3/person/${actor.id}?api_key=a64ac52df84876407a110b1db357ebe3&append_to_response=images,movie_credits,tv_credits`
            const res = await axios.get(url)
            setActorDetails(res.data)
        }
        fetchActorData()
    }, [])

    useEffect(() => {
        if (!actor.profile_path) {
            setProfilePic(defaultPic)
        } else {
            setProfilePic(`https://image.tmdb.org/t/p/w500${actor.profile_path}`)
        }
    }, [])

    console.log('this is actorDetails', actorDetails)
    return (
        <div>
            <Button onClick={ () => handleOpen()}>View Profile</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll='paper'
                maxWidth='md'
            >
                <Typography component='div' className={classes.paper}>
                    <Box component='h2'>
                        {actor.name}
                    </Box>
                    <Box component='div'>
                        <img 
                            src={profilePic}
                            alt={actor.name}
                        />

                    </Box>
                </Typography>
            </Dialog>
        </div>
    )
}
export default ActorProfile