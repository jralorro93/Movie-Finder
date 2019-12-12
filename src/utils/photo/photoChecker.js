import defaultPic from '../../images/defaultPic.jpg'

const photoChecker = (photo) => {
    debugger
    if (!photo) {
        return defaultPic
    } else{
        return `https://image.tmdb.org/t/p/w500${photo}`
    } 

}
export default photoChecker