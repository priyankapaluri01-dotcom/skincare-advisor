import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Menu, X, User, BookOpen, PenTool, 
  MessageSquare, HeartHandshake, HelpCircle, Calendar 
} from 'lucide-react';
import "./Navbar.css";
const Navbar = ({ Usercame }) => { //p.drilling
  const [userclicked, setuserclicked] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => setuserclicked(!userclicked);
  return (
    <>
      <nav className="top-nav">
        <div className="nav-section left">
          <button className="icon-btn menu-trigger" onClick={toggleMenu} aria-label="Open Menu">
            <Menu size={28} />
          </button>
        </div>
        <div className="nav-section center">
          <h1 className="logo-text" onClick={() => navigate('/')}>GLOW</h1>
        </div>
        <div className="nav-section right">
          {Usercame ? (
            <User className="user-icon" onClick={() => navigate('/profile')} />
          ) : (
            <button className="login-outline-btn" onClick={() => navigate('/login')}>
              Login
            </button>
          )}
        </div>
      </nav>
      {userclicked && <div className="sidebar-overlay" onClick={toggleMenu}></div>}
      <div className={`side-navbar ${userclicked ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="menu-title"></span>
          <button className="icon-btn" onClick={toggleMenu}>
            <X size={24} />
          </button>
        </div>
        <ul className="side-links">
          <li><Link to="/" onClick={toggleMenu}><BookOpen size={18} /> Home</Link></li>
          <li><Link to="/aboutus" onClick={toggleMenu}><HeartHandshake size={18} /> About Us</Link></li>
          <li><Link to="/tips" onClick={toggleMenu}><PenTool size={18} />Skincare Tips</Link></li>
          <li><Link to="/suggestions" onClick={toggleMenu}><HelpCircle size={18} /> Reviews</Link></li>
          <li><Link to="/book-demo" onClick={toggleMenu}><Calendar size={18} /> Book a call</Link></li>
          <li><Link to="/contactus" onClick={toggleMenu}><MessageSquare size={18} /> Contact Us</Link></li>
          <div className="nav-divider"></div>
          {Usercame && (
            <li>
              <Link to="/profile" onClick={toggleMenu}>
                <User size={18} /> My Profile
              </Link>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;