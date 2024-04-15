const API_KEY = '9f1bd89e'

export const searchMovies = async ({query}) =>{
    try{
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`)
        const data = await response.json()

        const movies = data.Search

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            poster: movie.Poster,
        }))

    }catch(error){
        throw new Error('Error searching movies')
    }
    
}