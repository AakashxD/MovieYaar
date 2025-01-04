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

  const validateAtLeastOneTicket = () => selectedSeats.length > 0;

  const calculateTotalPrice = () => selectedSeats.length * 150; // Assuming ticket price is ₹150

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async (amount, formData) => {
    try {
      const response = await axios.post("http://localhost:4000/api/user/payment", {
        amount,
      });
      paymentVerify(response.data, formData);
    } catch (error) {
      console.error("Internal server error:", error);
    }
  };

  const paymentVerify = async (data, formData) => {
    if (window.Razorpay) {
      const { userName, mobileNumber } = formData;

      const options = {
        key: "rzp_test_ue6nB2PR1kro4m",
        amount: data.amount,
        currency: "INR",
        name: "Movie Ticket Booking",
        description: "Ticket Booking",
        image: "https://example.com/your_logo",
        order_id: data.id,
        callback_url: "http://localhost:4000/api/user/verify",
        handler: async function (response) {
          try {
            const body = {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            };

            const validateResponse = await axios.post(
              "http://localhost:4000/api/user/verify",
              body,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            if (validateResponse) {
              setConfirmedSeats([...selectedSeats]); // Persist confirmed seats
              setBookedSeats([...bookedSeats, ...selectedSeats]);
              setIsBooked(true);
            }
          } catch (error) {
            console.error("Error during payment verification:", error);
            alert("Payment verification failed. Please try again.");
          }
        },
        prefill: {
          name: userName || "Your Name",
          email: "example@example.com",
          contact: mobileNumber || "0000000000",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.on("payment.failed", function (response) {
        console.error("Payment failed:", response.error.reason);
        alert("Payment failed. Please try again.");
      });
      rzp1.open();
    } else {
      alert("Razorpay SDK not loaded. Please refresh the page.");
    }
  };

  const handleBooking = () => {
    if (!validateAtLeastOneTicket()) {
      alert("Please select at least one seat to book.");
      return;
    }
    const totalAmount = calculateTotalPrice();
    const formData = { userName: "John Doe", mobileNumber: "1234567890" };
    handlePayment(totalAmount, formData);
  };

  if (isBooked) {
    return (
      <div className="relative mt-6 bg-gradient-to-br from-yellow-50 to-yellow-100 text-center max-w-md mx-auto p-8 border-4 border-dashed border-gray-400 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎟 Booking Confirmed!</h2>
        <div className="bg-white border-t border-b border-gray-300 py-4 px-6 rounded-lg shadow-inner">
          <p className="text-lg text-gray-700 mb-2">
            Your tickets for <strong>{movieDetails.title}</strong> at <strong>{showtime}</strong>{" "}
            have been successfully booked.
          </p>
          <p className="text-gray-600">Seats: {confirmedSeats.join(", ")}</p>
        </div>
        <Link
          to="/"
          className="inline-block mt-6 bg-blue-500 text-white font-medium px-8 py-3 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
        >
          Back to Homepage
        </Link>
      </div>
    );
  }

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
          onClick={handleBooking}
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
