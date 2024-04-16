import { useState, useEffect, useRef } from "react"

export const useQuery = () => {
    const [query, setQuery] = useState('')
    const [error, setError] = useState(null)

    //guardamos referencia para saber si es la primera vez
    const isFirtsInput = useRef(true)

    //creamos useEffect para manejar los errores 
    //cada que la query cambie
    useEffect(() => {

        //es la primera vez si el valor actual es vacio
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