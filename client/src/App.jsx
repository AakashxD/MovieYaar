import React from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Home from './pages/Home'
import MovieList from './components/MovieList'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MovieDetails from "./pages/MovieDetails"
function App() {
  return (
   <>
 <Routes>
  <Route path='/' element={<Home/>}  />
  <Route path='/login' element={<Login/>}  />
  <Route path='/signup' element={<Signup/>}  />
  <Route path='/movies' element={<MovieList/>}  />
  <Route path='details' element={<MovieDetails/>}/>
 </Routes>
   </>
  )
}

export default App
