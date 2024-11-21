import React from 'react';
import { Link } from 'react-router-dom';
function MovieCard({ item }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  const poster = item.poster_path;
  const originalLan = item.original_language;
  const title = item.title;
  const date = item.release_date;

  return (
    <div className="w-64 bg-gray-660 border border-2 rounded-lg p-3 shadow-lg mr-7 mb-4">
      <img
        alt={title}
        className="w-full h-50 object-cover rounded-lg"
        src={baseUrl + poster}
      />
      <div className="border-t border-purple-400 mt-2 pt-2">
        <h2 className="text-sm font-bold truncate">{title}</h2>
        <p className="text-xs mt-1">
          <strong>Language:</strong> {originalLan.toUpperCase()}
        </p>
        <p className="text-xs mt-1">
          <strong>Release Date:</strong> {date}
        </p>
      </div>
    
      <div className="mt-3">
      <Link to={`/details?v=${item.id}&title=${encodeURIComponent(item.
              original_title
              )}&img=${encodeURIComponent(item.poster_path)}&summary=${encodeURIComponent(item.overview)}`}> 
        <button className="w-full py-2 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-600">
          Book
        </button></Link>
      </div>
    </div>
  );
}

export default MovieCard;
