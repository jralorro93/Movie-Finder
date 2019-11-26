import React from 'react';
import axios from 'axios';

const searchMovie = async (value) => {
    const api_key = 'a64ac52df84876407a110b1db357ebe3'
    const url = `https://www.omdbapi.com/?s=${value}&apikey=4a3b711b`
    const res = await axios.get(url)
    return res.data.Search
}
export default searchMovie