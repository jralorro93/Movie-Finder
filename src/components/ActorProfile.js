import React, {useState, useEffect} from 'react'
import { Button, Modal } from '@material-ui/core'

const ActorProfile = (actor) => {
    const [ open, setOpen ] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

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