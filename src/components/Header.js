import React from 'react'

import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    title: {
        marginLeft: '109px'
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <h1 className={classes.title}>Movie Finder</h1>
    )
}
export default Header