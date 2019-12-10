import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cast from '../components/Cast'

import {Grid} from '@material-ui/core'

const CastContainer = ({movie}) => {
    const [ cast, setCast ] = useState([])

    useEffect(() => {
        const fetchCast = async () => {
            const url = `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=a64ac52df84876407a110b1db357ebe3`
            const res =  await axios.get(url)
            
            setCast(res.data.cast)
        }
        fetchCast()
        return setCast([])
    }, [])

    console.log('this is cast', cast)
    return (
        <div>
            <Grid container>
                {cast.map((person, index) => {
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