import React, {useState} from 'react'

import { Carousel } from 'react-responsive-carousel'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    poster: {
        height: '300px'
    }
}))

const ImageCarousel = ({images}) => {
    const classes = useStyles()
    console.log('images: ', images)
    return (
        <div>
            <Carousel>
                <div className={classes.poster}>
                    <img src={`https://image.tmdb.org/t/p/w500${images.posters[0].file_path}`}/>
                    <p className='legend'>Legend 1</p>
                </div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${images.posters[1].file_path}`}/>
                    <p className='legend'>Legend 2</p>
                </div>
            </Carousel>
        </div>
    )
}
export default ImageCarousel

