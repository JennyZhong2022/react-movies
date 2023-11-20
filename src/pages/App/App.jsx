import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LoginPage from '../../components/LoginPage/index.jsx'
import MoviesListPage from '../MoviesListPage/index.jsx'
import NavBar from '../../components/NavBar/index.jsx'
import MovieDetailPage from '../MovieDetailPage/index.jsx'
import ActorListPage from '../ActorListPage/index.jsx'
import ActorDetailPage from '../ActorDetailPage/index.jsx'
import { movies } from "../../data.js";



function App() {
  const [user, setUser] = useState({})
  console.log(setUser);

  return (
    <main className="App">
      {user ? <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<MoviesListPage movies={movies} />}></Route>
          <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />}> </Route>
          <Route path="/actors" element={<ActorListPage movies={movies} />}> </Route>
          <Route path="/actors/:actorName" element={<ActorDetailPage movies={movies} />}> </Route>
        </Routes>
        </>
        :
        <LoginPage/>
      }
    </main>
  )
}

export default App
