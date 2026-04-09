import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Myaccount.css';

function Myaccount() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const unsubscribeData = onSnapshot(userDocRef, (docSnap) => {
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          }
          setLoading(false);
        });
        return () => unsubscribeData();
      } else {
        navigate('/login');
      }
    });
    return () => unsubscribeAuth();
  }, [navigate]);

  const handleSignOut = () => {
    signOut(auth).then(() => navigate('/'));
  };

  if (loading) return <div className="loading-screen">Loading Profile...</div>;

  return (
    <div className="profile-page-wrapper">
      <div className="sk-container">
        <div className="account-header-section">
          <div className="avatar-large">
            {userData?.firstName?.charAt(0) || "U"}
          </div>
          <h1>Account Settings</h1>
          <p className="subtitle">Manage your personal information and security</p>
        </div>

        <div className="account-grid">
          <div className="info-card">
            <h3>Identity</h3>
            <div className="detail-row">
              <label>Display Name</label>
              <p>{userData?.firstName} {userData?.lastName}</p>
            </div>
            <div className="detail-row">
              <label>Account Status</label>
              <p className="status-verified">Verified Member</p>
            </div>
          </div>
          <div className="info-card">
            <h3>Contact Information</h3>
            <div className="detail-row">
              <label>Primary Email</label>
              <p>{auth.currentUser?.email}</p>
            </div>
            <div className="detail-row">
              <label>Communication Preference</label>
              <p>Email Notifications Only</p>
            </div>
          </div>
        </div>
        <div className="account-footer">
          <button className="sk-btn sk-btn-outline" onClick={() => navigate('/')}>
             Back to Home
          </button>
          <button className="sk-signout-btn" onClick={handleSignOut}>
            Logout Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Myaccount;