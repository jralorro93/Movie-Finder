import React from 'react'
import axios from 'axios'

const searchPerson = async (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=a64ac52df84876407a110b1db357ebe3`
    const res = await axios.get(url)
    debugger
    return res.data
}
export default searchPerson