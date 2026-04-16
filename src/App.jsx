import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CreateAccount from './pages/createaccount.jsx';
import AboutUs from "./pages/aboutus.jsx";          
import ContactUs from "./pages/contactus.jsx";       
import Myaccount from "./pages/Myaccount.jsx";
import "./App.css";
import SkincareTips from "./pages/skincaretips.jsx";
import Bookacall from "./pages/bookacall.jsx";
import Skin from './pages/skin.jsx'; 


const App = () => {
  const [Usercame, setUsercame] = useState(false);
  
  return (
    <div className="app-container">
      <Navbar Usercame={Usercame} /> 
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={
          Usercame ? <Navigate to="/" /> : <Login setUsercame={setUsercame} />
        } />
        <Route path="/join-us" element={<CreateAccount />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/write-query" element={<Hero />} /> 
        <Route path="/suggestions" element={<Hero />} />
        <Route path="/book-call" element={<Bookacall />} />
        <Route path="/Myaccount" element={<Myaccount/>}/>
        <Route path="/tips" element={<SkincareTips />} />
        <Route path="/skin" element={<Skin />} />
      </Routes>
    </div>
  );
};

export default App;