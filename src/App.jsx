import './index.css';
import Homepage from "./Pages/Homepage";
import Adminpage from './Pages/Admin/Admin-page/Adminpage';

import Login from "./Pages/Login/Login";



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Categories from './Pages/client-page/Categories';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/categories' element={<Categories/>}/>
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
