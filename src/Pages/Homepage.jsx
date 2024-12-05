import Header from '../Components/Header/Header.jsx'
export default function Homepage(){

    return(

        <>
        <Header />
        
        <div className="w-full h-screen bg-blue-900 flex flex-col items-center justify-center">
          <div className="border border-white bg-white h-[100px] w-[700px] rounded-lg flex justify-center items-center p-4 space-x-4">
            <input type="date" className="p-2 border border-gray-300 rounded" />
            <input type="date" className="p-2 border border-gray-300 rounded" />
  
            
  
            <select className="p-2 border border-gray-300 rounded">
  
              <option>Luxury</option>
              <option>Normal</option>
              <option>Low</option>
            </select>
            <button className="p-2 bg-blue-500 text-white rounded">Book Now</button>
           
  
          </div>
  
          <h1 className="text-white text-[50px]">Welcome to City Lodge</h1>
        </div>
      </>
    )
}