import Header from '../Components/Header/Header.jsx'
import Carousal from './Carousal.jsx';
import './Homepage.css';

export default function Homepage() {
  return (
    <>
      <Header />
      
      <div className="w-full h-[100vh] bg-pic flex flex-col justify-center items-center relative">
        {/* Welcome Message */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-serif font-Regular leading-tight">
            Luxury Hotel Experience <br /> Comfort and Elegance
          </h1>

          <p className="mt-4 text-lg md:text-xl font-Adamina Font-Regular max-w-2xl">
            Discover the ultimate comfort and luxury with our handpicked selection of hotels designed to make your stay unforgettable.
          </p>
        </div> 
      </div>

      <Carousal/>


    </>
  );
}