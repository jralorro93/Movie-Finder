import axios from 'axios';

const searchMovie = async (value) => {
    const movie = value.split(" ").join("+")
    const api_key = 'a64ac52df84876407a110b1db357ebe3'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie}`
    const res = await axios.get(url)
    
    return res.data.results

}
export default searchMovie