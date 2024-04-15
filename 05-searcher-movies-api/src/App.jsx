import './App.css'
//importamos componente que renderiza las peliculas 
//importamos custom hooks que realiza el mapeo de las peliculas

import { useMovies } from './hooks/useMovie'
import { useQuery } from './hooks/useQuery'

import { Movies } from './components/movies'

function App() {
  const { query, setQuery, error } = useQuery()
  const { movies, getMovies, loading } = useMovies({ query })


  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies()
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie Searcher</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} name="query" placeholder="Interestelar, Cars 2, Star Wars..." />
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
