import './index.css';
import Homepage from "./Pages/Homepage";
import Adminpage from './Pages/Admin/Admin-page/Adminpage';
import Test from './Components/test/Test'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/test" element={<Test/>}/>
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
