import { Link, Route, Routes } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { MdOutlineCategory } from "react-icons/md";
import { FaHotel } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";
import AdminCategory from "../AdminCategory/AdminCategory";
import AdminBooking from "../AdminBooking/AdminBooking";
import AdminRooms from "../Adminrooms/Adminrooms"; // Ensure consistent naming
import AdminUser from "../AdminUser/AdminUser";
import AdminFeedback from "../AdminFeedback/AdminFeedback";
import AdminGallery from "../AdminGallery/AdminGallery";

export default function Adminpage() {
  return (
    <div className="w-full max-h-[100vh] overflow-hidden overflow-y-hidden flex">
      <div className="w-[20%] bg-yellow-950 h-[100vh] flex flex-col">
        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <CiBookmarkCheck />
          <Link to="/admin/Adminbooking">Bookings</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <MdOutlineCategory />
          <Link to="/admin/Categories">Categories</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <FaHotel />
          <Link to="/admin/Rooms">Rooms</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <FaUserFriends />
          <Link to="/admin/Users">Users</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <MdFeedback />
          <Link to="/admin/Feedbacks">Feedbacks</Link>
        </div>

        <div className="text-white text-[30px] hover:font-bold flex items-center gap-2">
          <AiOutlinePicture />
          <Link to="/admin/Gallery">Gallery Items</Link>
        </div>
      </div>

      <div className="w-[80%] bg-orange-100 h-[100vh] overflow-y-scroll">
        <Routes>
          <Route path="/admin/Adminbooking" element={<AdminBooking />} />
          <Route path="/admin/Categories" element={<AdminCategory />} />
          <Route path="/admin/Rooms" element={<AdminRooms />} /> {/* Updated to match import */}
          <Route path="/admin/Users" element={<AdminUser />} />
          <Route path="/admin/Feedbacks" element={<AdminFeedback />} />
          <Route path="/admin/Gallery" element={<AdminGallery />} />
        </Routes>
      </div>
    </div>
  );
}
