import { Link, useSearchParams } from 'react-router-dom';
import SeatSelection from './SeatSelection';

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
        <h1 className="text-3xl font-bold">{v}</h1>
        <img src={img} alt={v} className="w-full h-auto rounded-lg" />
        <p className="text-lg">{summary}</p>
        <div className="flex flex-col space-y-4">
          {showtimes.map((showtime, index) => (
            <button key={index} className={`py-2 px-4 rounded ${showtime.color}`}>
              {showtime.time}
            </button>
          ))}
        </div>
        <SeatSelection />
      </div>
    </div>
  );
};

export default DetailsPage;