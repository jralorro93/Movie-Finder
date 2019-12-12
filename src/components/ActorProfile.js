import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Button, Modal } from '@material-ui/core'

const ActorProfile = ({actor}) => {
    const [ open, setOpen ] = useState(false)
    const [ actorDetails, setActorDetails ] = useState({})

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        const fetchActorData = async () => {
            const url = `https://api.themoviedb.org/3/person/${actor.id}?api_key=a64ac52df84876407a110b1db357ebe3`
            const res = await axios.get(url)
            setActorDetails(res.data)
        }
        fetchActorData()
    }, [])
    console.log('this is actorDetails', actorDetails)
    return (
        <div>
            <Button onClick={ () => handleOpen()}>View Profile</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <h2>Hi</h2>
            </Modal>
        </div>
    )
}
export default ActorProfile