import { searchMovies } from '../services/movies'
import { useRef, useState, useMemo, useCallback } from 'react'
//custom hook que mapea las peliculas
export function useMovies({ query, sort }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    //creamos referencia de la busqueda 
    //para validad que no se haga la misma busqueda 2 veces
    const prevQuery = useRef(query)

   
    //useMemo sin dependencia para generar la funcion una vez
    //luego pasamos la dependecia por parametro a la funcion
    const getMovies = useCallback(async ({ query }) => {
            if (query === prevQuery.current) return

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
    , [])


    //Use memo evita o ejecuta cierto codigo 
    //en base a que sus dependencias cambien
    //si estas no cambian evita el calculo innecesario
    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.year - b.year)
            : movies

    }, [sort, movies])

    return { movies: sortedMovies, getMovies, loading, error }
} 