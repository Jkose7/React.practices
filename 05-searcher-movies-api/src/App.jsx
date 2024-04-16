import './App.css'
//importamos componente que renderiza las peliculas 
//importamos custom hooks que realiza el mapeo de las peliculas

import { useMovies } from './hooks/useMovie'
import { useQuery } from './hooks/useQuery'

import { Movies } from './components/movies'
import { useState, useCallback } from 'react'

import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)

  const { query, setQuery, error } = useQuery()
  const { movies, getMovies, loading } = useMovies({ query, sort })

  //activar y desactivar el sort
  const handleSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ query })
  }

  //cada que el input cambie captura el valor 
  //y lo guarda en la query
  //hacemos validacion para evitar que comience con espacio
  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
    debounceMovie(newQuery)
  }

  //debounce utilizando useCallback
  //para evitar tantas llamadas a la API
  const debounceMovie = useCallback(
    debounce((query) => {
      console.log('debounce');
      getMovies({ query });
    }, 300),
    [getMovies]
  );

  return (
    <div className='page'>
      <header>
        <h1>Movie Searcher</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" placeholder="Interestelar, Cars 2, Star Wars..." />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <span>{error}</span>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
      </main>

    </div>
  )
}

export default App
