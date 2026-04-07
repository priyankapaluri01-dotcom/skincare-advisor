import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CreateAccount from './pages/createaccount.jsx'; 
import Routine from './components/routine.jsx';
import AboutUs from "./pages/aboutus.jsx";          
import ContactUs from "./pages/contactus.jsx";       
import Myaccount from "./pages/Myaccount.jsx";
import "./App.css";

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
        <Route path="/routine/:type" element={<Routine />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/write-query" element={<Hero />} /> 
        <Route path="/suggestions" element={<Hero />} />
        <Route path="/book-demo" element={<Hero />} />
        <Route path="/profile" element={<Myaccount/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;