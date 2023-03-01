import './App.css';
import Login from './login';
import Regiser from './Regiser';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from './UserDetails';
function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/'element={<Regiser/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path="./UserDetails" element={<UserDetails/>}/>
        </Routes>
      </BrowserRouter >
  );
}
export default App;
