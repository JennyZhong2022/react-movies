import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <Link to='/' >Movie List</Link>
      &nbsp; |  &nbsp;
      <Link to="/actors" > Actor List</Link>
    </nav>
  )
}

export default NavBar