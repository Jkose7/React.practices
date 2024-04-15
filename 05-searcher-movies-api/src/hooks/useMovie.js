import { searchMovies } from '../services/movies'
import { useRef, useState } from 'react'
//custom hook que mapea las peliculas
export function useMovies({ query }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const prevQuery = useRef(query)

    const getMovies = async () => {
        if(query === prevQuery.current) return

        try {
            setLoading(true)
            setError(false)
            prevQuery.current = query
            const newMovies = await searchMovies({ query })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            // se ejecuta cuando finalice tanto el try o el catch
            setLoading(false)
        }
    }

    return { movies, getMovies, loading, error }
} 