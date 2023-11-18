import { useNavigate } from "react-router-dom"


const MovieCard = ({ movie }) => {
  // Call the useNavigate function and assign the returned function to navigate
 const navigate=useNavigate()
  
  const handleMovieDetails = () => {
   navigate(`/movies/${movie.title}`)
  }

  return (
    <div style={{
      backgroundImage: `url(${movie.posterPath})`,
      minHeight: '200px', 
     minWidth: '200px'}} onClick={handleMovieDetails}>
      <h2>{movie.title}</h2>
      <h3>{ movie.releaseDate}</h3>
     
      </div>
  )
}

export default MovieCard