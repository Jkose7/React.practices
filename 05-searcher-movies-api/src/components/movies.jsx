import PropTypes from 'prop-types'

function RenderMovies({movies}){
    return (
        <ul>
        {
          movies.map(movie =>(
            <li key={movie.imdbID}> 
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))
        }
      </ul>  
    )
}


function RenderNoMovies(){
    return(
        <h1>Not found movies</h1>
    )
}

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