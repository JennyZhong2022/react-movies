import { useParams } from "react-router-dom"

const ActorDetail = ({ movies }) => {
  const { actorName } = useParams()

  const actorMovies = movies.filter(movie =>
    movie.cast.includes(actorName))

  const allActors = movies.flatMap(movie => movie.cast)
  const uniqueActors = Array.from(new Set(allActors))
    const actor = uniqueActors.find((actor) => actor === actorName)
  


  

  return (
    <div>
      <h1>{actor}'s movies</h1>
        {actorMovies.length>0? ( actorMovies.map((movie, index) => (
          <div key={index}  style={{
      backgroundImage: `url(${movie.posterPath})`,
      minHeight: '200px', 
     minWidth: '200px'}}>
          <h2>{movie.title}</h2>
          <h3>{movie.releaseDate}</h3>
        </div>
        ))) : (
            <p>No movies found</p>
             )}
    </div>

  )
}

export default ActorDetail