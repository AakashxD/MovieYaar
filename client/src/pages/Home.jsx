import React from 'react'
import MovieList from '../components/MovieList'
import Navbar from "../components/Navbar"
import Welcom from '../components/Welcom'
const Home = () => {
  return (
   <>
    <Navbar/>
   <div >
     
   <Welcom/>
   </div>
   <MovieList/>
   </>
  )
}

export default Home