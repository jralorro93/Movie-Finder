import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel'
import {makeStyles} from '@material-ui/styles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    poster: {
        height: '300px'
    }
}))

const ImageCarousel = ({movie}) => {
    const classes = useStyles()
    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState([])

    useEffect(() => {
        const fetchImages = async () => {
            const url = `https://api.themoviedb.org/3/movie/${movie.id}/images?api_key=a64ac52df84876407a110b1db357ebe3&append_to_response=images`
            const res = await axios.get(url)
            setImages(res.data.backdrops)
        }
        fetchImages()
        return setImages([])
    }, [])
    console.log('this is images', images)
    return (
        <div>
            <Carousel>
                {images.map(image => {
                    return ( 
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w500${image.file_path}`}/>
                            <p className='legend'>{image.vote_count}/10</p>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
export default ImageCarousel

