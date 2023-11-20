import { useNavigate } from "react-router-dom"

const ActorCard = ({ actor }) => {
  const navigate=useNavigate()

  const handleActorDetail = () => {
    navigate(`/actors/${actor}`)
  }
  
  return (
    <div style={{
      backgroundImage: "url('https://picsum.photos/200/300/?blur')"}} onClick={handleActorDetail} >
      <h3 style={{
        color: 'white'}}>{actor}</h3>
    </div>
  )
}

export default ActorCard