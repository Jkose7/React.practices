import { useEffect, useState } from "react"
import { getRandomFact } from '../services/facts.js'

export function useCatFact() {
    const [fact, setFact] = useState('hello')

    const getRandomFactAndUpdate = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    useEffect(getRandomFactAndUpdate, [])
    //sin dependencias para que se renderice minimo una vez

    return { fact, getRandomFactAndUpdate }

}// hace return del fact y la funcion que lo actualiza