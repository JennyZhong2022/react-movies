import ActorCard from "./ActorCard"

const ActorListPage = ({ movies }) => {
  // The flatMap() method first performs a mapping function on each element of the original array and then flattens the result into a new array.
  // This method is great for working with nested array structures.
  const allActors = movies.flatMap(movie => movie.cast);
  console.log(allActors);

  // new Set(): Create a set from the  that make the value to be unique, no duplicate. but is an object. 
  // Array.from():create an array from a set
  const uniqueActors = Array.from(new Set(allActors))
 console.log(uniqueActors);


  return (
    <div>
      {uniqueActors.map((actor,index) => (
        <ActorCard key={index} actor={actor}  />
      ))
      }
    </div>
  )
}

export default ActorListPage