import React, {useState, useEffect} from 'react'

import { Carousel } from 'react-responsive-carousel'
import {makeStyles} from '@material-ui/styles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    poster: {
        height: '300px'
    }
}))

const ImageCarousel = ({images}) => {
    const classes = useStyles()
    const [loading, setLoading] = useState(true)
    
    
    // useEffect(() => {
    //     return () => {

    //     }
    // }, [])

    return (
        <div>
            <Carousel>
                {images.posters.map(image => {
                    return ( 
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${image.file_path}`}/>
                            <p className='legend'>{image.vote_count}</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
export default ImageCarousel

