import { useEffect, useState } from "react"

//'https://catfact.ninja/fact
//'https://cataas.com/cat'
//`https://cataas.com/cat/says/${fact}?fontSize=50&fontColor=red`

const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMG = `https://cataas.com/cat/says/${fact}?fontSize=50&fontColor=red&json=true`
const CAT_URL_PREFIX = `https://cataas.com/`

export function App () {

    //states para para manejar el fact, error y url
    const [fact, setFact] = useState('lorem')
    const [factError, setFactError] = useState()
    const [image, setImage] = useState()

    useEffect(() => {

        fetch(CAT_ENDPOINT_FACT)
        .then(res => {
            if(!res.ok) setFactError('error fetching')
            return res.json()
        })
        .then(data => {
            const { fact } = data
            setFact(fact)

            const firstWorld = fact.split(' ', 3).join(' ')
            console.log(firstWorld) 
        })
        //catch funciona a nivel de la peticion como tal

    }, [])//sin dependencias para que se renderice minimo una vez

    useEffect(() =>{

        if (!fact) return
        //la api no contaba con url para optener la imagen por lo que se usa la misma url de la api que si funciona
        setImage(`https://cataas.com/cat/says/${fact}?fontSize=50&fontColor=red`)

    }, [fact]) //mostrar la imagen depende de si fact cambia su estado


    //renderizado condicional
    //&& funciona si devuelve true
    return (
        <main>
            <h1>App gatitos</h1>
            {fact && <p>{fact}</p>}      
            {image && <img src={image} alt={fact}></img>}
        </main>
   )
}