const key = 'b14c9b0e9311b2295d0ed3f8e8d9eafd'

const request = {
    requestPopular :`https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
    requestTopSearch: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=b14c9b0e9311b2295d0ed3f8e8d9eafd`,
    requestHorror: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
}

export default request 