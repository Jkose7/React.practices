import { useState, useEffect } from 'react'

//custom hook que retorna la logica de la imagen
export function useCatImage({ fact }) {
    const [image, setImage] = useState()

    useEffect(() => {
        if (!fact) return
        const firstWorld = fact.split(' ', 3).join(' ')
        //la api no contaba con url para optener la imagen por lo que se usa la misma url de la api que si funciona
        setImage(`https://cataas.com/cat/says/${firstWorld}?fontSize=50&fontColor=black`)

    }, [fact]) //mostrar la imagen depende de si fact cambia su estado

    return { image }
} //devuelve la imageUrl