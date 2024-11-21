import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
const DetailsPage = () => {
  const [searchParams] = useSearchParams();

  const v = searchParams.get("v") || "Unknown";
  const img = searchParams.get("img") || "/placeholder.jpg";
  const summary = searchParams.get("summary") || "No summary available.";

  const showtimes = [
    { time: "10:00 AM", color: "bg-green-100 text-green-800" },
    { time: "1:00 PM", color: "bg-blue-100 text-blue-800" },
    { time: "6:00 PM", color: "bg-purple-100 text-purple-800" },
    { time: "9:00 PM", color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl space-y-6">
 
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 h-96 relative">
            <img
              src={`https://image.tmdb.org/t/p/w500${img}`}
              alt="Movie Poster"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => { e.target.src = '/placeholder.jpg' }}
            />
          </div>

          <div className="md:w-2/3 p-6 bg-gray-50">
            <div className="flex items-center mb-4">
              <Clock className="mr-2 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-800">Show Timings</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {showtimes.map((showtime, index) => (
                <button 
                  key={index} 
                  className={`${showtime.color} px-4 py-2 rounded-lg font-semibold 
                    hover:opacity-80 transition-all flex items-center justify-center space-x-2`}
                >
                  <Calendar size={16} />
                  <span>{showtime.time}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex items-center mb-4">
            <Film className="mr-2 text-gray-600" />
            <h1 className="text-3xl font-bold text-gray-900">Movie Summary</h1>
          </div>
          <p className="text-gray-700 leading-relaxed bg-gray-100 p-4 rounded-lg">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;