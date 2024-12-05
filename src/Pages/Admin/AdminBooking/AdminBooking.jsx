import  { useState } from "react";

export default function AdminBooking() {
  const [bookings] = useState([]);

  return (
    <div className="w-full p-4 bg-red-900 text-white">
      <h1 className="text-2xl mb-4">Admin Booking</h1>
      <table className="min-w-full bg-white text-black rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2">Booking ID</th>
            <th className="px-4 py-2">Room ID</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Start Date</th>
            <th className="px-4 py-2">End Date</th>
            <th className="px-4 py-2">Reason</th>
            <th className="px-4 py-2">Notes</th>
            <th className="px-4 py-2">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            console.log(index)
            return(
            <tr key={booking.bookingId}>
              <td className="px-4 py-2">{booking.bookingId}</td>
              <td className="px-4 py-2">{booking.roomId}</td>
              <td className="px-4 py-2">{booking.email}</td>
              <td className="px-4 py-2">{booking.status || "N/A"}</td>
              <td className="px-4 py-2">{booking.start || "N/A"}</td>
              <td className="px-4 py-2">{booking.end || "N/A"}</td>
              <td className="px-4 py-2">{booking.reason || "N/A"}</td>
              <td className="px-4 py-2">{booking.notes || "N/A"}</td>
              <td className="px-4 py-2">{new Date(booking.timestamp).toLocaleString()}</td>
            </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
}
