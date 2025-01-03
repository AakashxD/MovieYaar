import React, { useState } from 'react';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const seats = [
    { id: 1, isAvailable: true },
    { id: 2, isAvailable: true },
    { id: 3, isAvailable: false },
    { id: 4, isAvailable: true },
    { id: 5, isAvailable: true },
    { id: 6, isAvailable: false },
    { id: 7, isAvailable: true },
    { id: 8, isAvailable: true },
    { id: 9, isAvailable: true },
    { id: 10, isAvailable: false },
  ];

  const toggleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  return (
    <div className="seat-selection">
      <h2>Select Your Seats</h2>
      <div className="seating-layout">
        {seats.map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.isAvailable ? 'available' : 'unavailable'} ${selectedSeats.includes(seat.id) ? 'selected' : ''}`}
            onClick={() => seat.isAvailable && toggleSeatSelection(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>
      <div className="selected-seats">
        <h3>Selected Seats: {selectedSeats.join(', ')}</h3>
      </div>
    </div>
  );
};

export default SeatSelection;