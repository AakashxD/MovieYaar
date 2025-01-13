import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";
import { Clock } from "lucide-react";
const SeatSelection = ({ showtime, movieDetails, preBookedSeats = [] }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [confirmedSeats, setConfirmedSeats] = useState([]);
  const [isBooked, setIsBooked] = useState(false);
  const [bookedSeats, setBookedSeats] = useState(preBookedSeats);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) {
      alert("This seat is already booked.");
      return;
    }
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };


  return (
    <div className="mt-6 bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Select Seats for {showtime}
      </h2>
      <div className="grid grid-cols-8 gap-2">
        {Array.from({ length: 64 }, (_, i) => (
          <button
            key={i}
            className={`w-10 h-10 rounded-lg ${
              bookedSeats.includes(i)
                ? "bg-red-200 text-white cursor-not-allowed"
                : selectedSeats.includes(i)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-blue-400 transition-all`}
            onClick={() => handleSeatClick(i)}
            disabled={bookedSeats.includes(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all"
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

const DetailsPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  const v = searchParams.get("v") || "Unknown";
  const img = searchParams.get("img") || "/placeholder.jpg";
  const summary = searchParams.get("summary") || "No summary available.";

  const showtimes = [
    { time: "10:00 AM", color: "bg-green-100 text-green-800" },
    { time: "1:00 PM", color: "bg-blue-100 text-blue-800" },
    { time: "6:00 PM", color: "bg-purple-100 text-purple-800" },
    { time: "9:00 PM", color: "bg-orange-100 text-orange-800" },
  ];

  const movieDetails = {
    title: v,
    img,
    summary,
  };

  const preBookedSeats = [2, 5, 8, 12, 18, 22, 31, 40, 50, 60];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl space-y-6">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 h-96 relative">
            <img
              src={img ? `https://image.tmdb.org/t/p/w500${img}` : "/placeholder.jpg"}
              alt="Movie Poster"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.src = "/placeholder.jpg";
              }}
            />
          </div>

          <div className="md:w-2/3 p-6 bg-gray-50">
            <div className="flex items-center mb-4">
              <Clock className="mr-2 text-gray-600" />
              <h2 className="text-2xl font-semibold text-gray-800">Show Timings</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {showtimes.map((showtime, index) => (
                <button
                  key={index}
                  className={`${showtime.color} px-4 py-2 rounded-lg font-semibold hover:opacity-80 transition-all flex items-center justify-center space-x-2`}
                  onClick={() => setSelectedShowtime(showtime.time)}
                >
                  <Clock className="w-4 h-4" />
                  <span>{showtime.time}</span>
                </button>
              ))}
            </div>

            <div className="mt-6 border border-gray-300 rounded-lg p-4 bg-white shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                Movie Summary 📽️
              </h3>
              <p className="text-gray-600 text-center">{summary}</p>
            </div>
          </div>
        </div>

        {selectedShowtime && (
          <SeatSelection
            showtime={selectedShowtime}
            movieDetails={movieDetails}
            preBookedSeats={preBookedSeats}
          />
        )}
      </div>
    </div>
  );
};
export default DetailsPage;
