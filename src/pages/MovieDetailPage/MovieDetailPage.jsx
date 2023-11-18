import { useParams } from "react-router-dom"


const MovieDetailPage = ({ movies }) => {
  // Extract the movieName property from the object returned by useParams, need {}
  const { movieName } = useParams()
  
  const movie=movies.find(movie=>movie.title===movieName)

  if (!movie) {
    return <p>Movie not found</p>
  }

  return (
    <div>
          <h2>{movie.title}</h2>
          <p>Release Date:{movie.releaseDate}</p>
      <img src={movie.posterPath} alt={`${movie.title}poster`} />
      <p>Cast:{movie.cast.join(', ')}</p>
    
    </div>
  )
}

export default MovieDetailPage