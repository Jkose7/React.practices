import withMovies from '../mocks/with-results.json'

//custom hook que mapea las peliculas
export function useMovies() {
    const movies = withMovies.Search

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
    }))

    return { movies: mappedMovies }
} 