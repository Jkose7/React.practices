import './App.css'
//import withoudMovies from './mocks/not-results.json'

//importamos componente que renderiza las peliculas 
//importamos custom hooks que realiza el mapeo de las peliculas

import { useState, useEffect } from 'react'
import { useMovies } from './hooks/useMovie'
import { Movies } from './components/movies'

function App() {
  const { movies } = useMovies()
  const [ query, setQuery ] = useState('') 
  const [ error, setError ] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({query})
  }

  const handleChange = (e) =>{
    const newQuery = e.target.value
    if(newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  useEffect(() =>{
    if(query === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if(query.match(/^\d+$/)){
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if(query.length < 2) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return 
    }

    setError(null)
  }, [query])


  return (
    <div>

      <header>
        <h1>Movie Searcher</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" placeholder="Interestelar, Cars 2, Star Wars..." />
          <button type="submit">Search</button>
        </form>
        {error && <span>{error}</span>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>

    </div>
  )
}

export default App
