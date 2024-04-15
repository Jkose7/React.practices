import { useState, useEffect, useRef } from "react"

export const useQuery = () => {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)
    const isFirtsInput = useRef(true)

    useEffect(() => {
        if (isFirtsInput.current) {
            isFirtsInput.current = query === ''
            return 
        }

        if (query === '') {
            setError('No se puede buscar una pelicula vacia')
            return
        }

        if (query.match(/^\d+$/)) {
            setError('No se puede buscar una pelicula con un numero')
            return
        }

        if (query.length < 2) {
            setError('La busqueda debe tener al menos 3 caracteres')
            return
        }

        setError(null)
    }, [query])

    return { query, setQuery, error }
}