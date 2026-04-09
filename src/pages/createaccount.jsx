import React, { useState } from 'react';
import { auth, db } from "../firebase"; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { doc, setDoc } from 'firebase/firestore'; 
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react'; 
import './signup.css';

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        role: "user",
        createdAt: new Date()
      });

      setLoading(false);
      navigate('/'); 
    } catch (err) {
      setLoading(false);
      console.error(err.code);
      if (err.code === 'auth/email-already-in-use') {
        setError("Email already registered. Try logging in!");
      } else if (err.code === 'auth/weak-password') {
        setError("Password should be at least 6 characters.");
      } else if (err.code === 'auth/invalid-email') {
        setError("Invalid email format.");
      } else {
        setError("Registration failed. Please check your connection or Firebase rules.");
      }
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2 className="form-title">Create account</h2>
        
        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={handleSignup}>
          <div className="input-row">
            <div className="field">
              <label>First name</label>
              <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                required 
              />
            </div>
            <div className="field">
              <label>Last name</label>
              <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="field full">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className="field full password-field">
            <label>Password</label>
            <div className="input-with-icon">
              <input 
                type={showPassword ? 'text' : 'password'} 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
                required 
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <p className="legal-text">
            By proceeding, I agree to the <Link to="/tc">T&C</Link> and <Link to="/privacy">Privacy Notice</Link>.
          </p>

          <button type="submit" className="btn-create" disabled={loading}>
            {loading ? 'CREATING...' : 'CREATE'}
          </button>
        </form>

        <div className="form-footer">
          Returning customer? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;