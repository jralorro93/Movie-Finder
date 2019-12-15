import React, {useState, useEffect} from 'react'
import axios from 'axios'

import defaultPic from '../images/defaultPic.jpg'

import { Button, Divider, Dialog, Typography, Box } from '@material-ui/core'
import  {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    paper: {
        padding: '15px',
    },
    profilePic: {
        height: '300px'
    },
    bio: {
        display: 'flex'
    }
}))

const ActorProfile = ({actor}) => {
    const [ open, setOpen ] = useState(false)
    const [ actorDetails, setActorDetails ] = useState({})
    const [ profilePic, setProfilePic ] = useState('')
    const [ gender, setGender ] = useState('')
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

    useEffect(() => {
        actorDetails.gender === 1 ? setGender('Female') : setGender('Male')
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
                    <Box component='div' className={classes.bio}>
                        <img 
                            src={profilePic}
                            alt={actor.name}
                            className={classes.profilePic}
                        />
                        <div>
                            <h3>Place of birth: {actorDetails.place_of_birth}</h3>
                            <h3>Gender: {gender}</h3>
                            <h3>Birthday: {actorDetails.birthday}</h3>
                            <h3>Deathday: {actorDetails.deathday}</h3>
                        </div>
                    </Box>
                    <Diviver />
                </Typography>
            </Dialog>
        </div>
    )
}
export default ActorProfile