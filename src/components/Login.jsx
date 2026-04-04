import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; 
import { Eye, EyeOff } from 'lucide-react';


function LoginForm({ setUsercame }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUsercame(true); 
      navigate('/'); 
    }, 800);
  };

  return (
    <div className="login-wrap">
      <div className="login-container-stack">
        <div className="login-card">
          <h2 className="login-title">Welcome Back !</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="label">Email</label>
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <label className="label">Password</label>
              <div className="password-row">
                <input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="button" className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <button type="submit" className="primary" disabled={loading}>
              {loading ? 'Processing...' : 'Sign In'}
            </button>
          </form>
          <div className="login-footer">New here? <Link to="/join-us">Create account</Link></div>
        </div>
        <button className="back-button" onClick={() => navigate('/')}>Back to home ?</button>
      </div>
    </div>
  );
}

export default LoginForm;