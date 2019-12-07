import React, {useState} from 'react'

import { makeStyles } from '@material-ui/styles'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const useStyles = makeStyles(theme => ({
    images: {
        
    }
}))

const ImageCarousel = ({images}) => {
    const classes = useStyles()
    return (
        <Carousel autoplay>
            <div>
                
            </div>
        </Carousel>
    )
}
export default ImageCarousel