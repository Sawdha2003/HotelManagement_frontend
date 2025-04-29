export default function Carousal() {
    return (
      <div className="w-full bg-white py-10 flex justify-center">
       
        <div className="flex space-x-6 overflow-x-auto px-4">
          <img
            src="HOTEL-MANAGEMENT-FRONTEND/Images/room2.jpg"
            alt="room"
            className="w-72 h-48 object-cover rounded shadow-md"
          />
          <img
            src="HOTEL-MANAGEMENT-FRONTEND/Images/gym.jpg"
            alt="gym"
            className="w-72 h-48 object-cover rounded shadow-md"
          />
          <img
            src="HOTEL-MANAGEMENT-FRONTEND/Images/pool.jpg"
            alt="pool"
            className="w-72 h-48 object-cover rounded shadow-md"
          />
        </div>
      </div>
    );
  }
  