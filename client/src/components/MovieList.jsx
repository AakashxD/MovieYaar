import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import API_URL from '../../utils/apikey';
const MovieList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const movieData = await response.json();
        console.log(movieData.results)
        setList(movieData.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
      <div className=''>
        
      <div className="flex flex-wrap p-4 m-4">
        {list.map((item) => (
             <MovieCard key={item.id} item={item} ></MovieCard>
        ))}
      </div>
      </div>
  );
};

export default MovieList;
