import PropTypes from 'prop-types'

//Componente cuando se reciben las peliculas
function RenderMovies({movies}){
    return (
        <ul>
        {
          movies.map(movie =>(
            <li key={movie.id}> 
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          ))
        }
      </ul>  
    )
}

//Componente cuando no se recibe ningun resultado
function RenderNoMovies(){
    return(
        <h1>Not found movies</h1>
    )
}

//Renderizado condicional dependiendo si recibe o no las peliculas
export function Movies ({movies}){
    const hasMovies = movies?.length > 0

    return(
        hasMovies
        ? <RenderMovies movies={movies} ></RenderMovies>
        : <RenderNoMovies />
    )
}

Movies.propTypes = {
    movies:PropTypes.array
}

RenderMovies.propTypes = {
    movies:PropTypes.array
}