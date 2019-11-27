import React from 'react'
import axios from 'axios'

const viewMoviePage = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=a64ac52df84876407a110b1db357ebe3`
    const res = await axios.get(url)
    console.log(res.data)
}
export default viewMoviePage