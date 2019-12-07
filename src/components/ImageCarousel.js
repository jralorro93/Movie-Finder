import React, {useState} from 'react'

import { Carousel } from 'react-responsive-carousel'
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({images}) => {
    console.log('images: ', images)
    return (
        <div>
            <Carousel>
                <div>
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

