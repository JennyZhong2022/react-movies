import MovieCard from './MovieCard'

const MoviesListPage = ({ movies }) => {
  return (
    <div>
       {movies.map((movie,index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
   
  )
}

export default MoviesListPage