import { useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CreateAccount from './pages/createaccount';
import Routine from './components/routine';
import AboutUs from "./pages/aboutus";
import ContactUs from "./pages/contactus";
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;