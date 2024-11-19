import React from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import MovieList from './components/MovieList'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  return (
   <>
 <Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='/login' element={<Login/>}  />
  <Route path='/signup' element={<Signup/>}  />
  <Route path='/movies' element={<MovieList/>}  />
 </Routes>
   </>
  )
}
// https://api.themoviedb.org/3/movie/now_playing?api_key=YOUR_API_KEY&language=en-US&page=1
export default App
