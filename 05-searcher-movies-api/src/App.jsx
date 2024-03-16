import './App.css'

import withMovies from './mocks/with-results.json'
//import withoudMovies from './mocks/not-results.json'

import { Movies } from './components/movies'

function App() {
  const movies = withMovies.Search

  return (
    <div>

      <header>
        <h1>Movie Searcher</h1>
        <form className="form">
          <input placeholder="Interestelar, Cars 2, Star Wars..." />
          <button type="submit">Search</button>
        </form>
      </header>

      <main>
       <Movies movies={movies}/>
      </main>

    </div>
  )
}

export default App
