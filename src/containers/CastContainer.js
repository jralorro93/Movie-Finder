import React, {useState, useEffect} from 'react'
import Cast from '../components/Cast'

import {Grid} from '@material-ui/core'

const CastContainer = ({cast}) => {

    console.log('this is cast',cast)

    return (
        <div>
            <Grid container>
                {cast.cast.map((person, index) => {
                   return ( <Grid item>
                        <Cast key={index} person={person}/>
                    </Grid>
                   )
                })}
            </Grid>
        </div>
    )
}
export default CastContainer