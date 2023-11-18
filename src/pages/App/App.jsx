import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import LoginPage from '../../components/LoginPage/LoginPage'
import MoviesListPage from '../MoviesListPage/MoviesListPage'
import NavBar from '../../components/NavBar/NavBar'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import ActorListPage from '../ActorListPage/ActorListPage'
import { movies } from "../../data.cjs";



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
          <Route path="/actors"  element={<ActorListPage/> }> </Route>
        </Routes>
        </>
        :
        <LoginPage/>
      }
    </main>
  )
}

export default App
