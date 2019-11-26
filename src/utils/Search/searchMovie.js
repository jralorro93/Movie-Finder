import React from 'react';
import axios from 'axios';

const api_key = 'a64ac52df84876407a110b1db357ebe3'

const searchMovie = async (title) => {
    const word = title.split("")
    console.log(word)
    // const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=Die+Hard`
    // const res = await axios.get(url)
    // console.log(res.data.results)
}
export default searchMovie