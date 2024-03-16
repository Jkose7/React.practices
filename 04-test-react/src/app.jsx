import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from './hooks/useCatFact'

export function App() {

    //importamos los dos custom hooks
    const { fact, getRandomFactAndUpdate } = useCatFact()
    const { image } = useCatImage({ fact })

    //renderizado condicional
    //&& funciona si devuelve true
    return (
        <main>
            <h1>App gatitos</h1>
            <button onClick={getRandomFactAndUpdate}>Get new fact</button>

            {fact && <p>{fact}</p>}
            {image && <img src={image} alt={fact}></img>}
        </main>
    )
}