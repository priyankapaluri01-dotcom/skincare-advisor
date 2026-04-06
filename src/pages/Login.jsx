import React, { useState } from 'react';
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 
import { Eye, EyeOff } from 'lucide-react';

function LoginForm({ setUsercame }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); 
  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(''); 

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in user:", userCredential.user.email);
      
      setLoading(false);
      setUsercame(true); 
      navigate('/'); 
    } catch (error) {
      setLoading(false);
      console.error("Login Error Code:", error.code);
      if (error.code === 'auth/invalid-credential') {
        setErrorMessage("Invalid email or password. Please check again!");
      } else if (error.code === 'auth/user-not-found') {
        setErrorMessage("No account found with this email.");
      } else if (error.code === 'auth/wrong-password') {
        setErrorMessage("Incorrect password.");
      } else {
        setErrorMessage("Something went wrong. Please try again later.");
      }
    }
  };
  return (
    <div className="login-wrap">
      <div className="login-container-stack">
        <div className="login-card">
          <h2 className="login-title">Welcome Back !</h2>
          {errorMessage && <p style={{ color: 'red', fontSize: '14px', marginBottom: '10px' }}>{errorMessage}</p>}
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="label">Email</label>
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <div className="input-group">
              <label className="label">Password</label>
              <div className="password-row">
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <button 
                  type="button" 
                  className="eye-icon" 
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button type="submit" className="primary" disabled={loading}>
              {loading ? 'Verifying...' : 'Sign In'}
            </button>
          </form>
          
          <div className="login-footer">
            New here? <Link to="/join-us">Create account</Link>
          </div>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>Back to home ?</button>
      </div>
    </div>
  );
}

export default LoginForm;