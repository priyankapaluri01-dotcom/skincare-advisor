import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './MyAccount.css';


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
      <div className="sk-nav-back">
        <span>‹ My Profile</span>
      </div>

      <div className="sk-main-content">
        {!userData?.skinType ? (
          <div className="sk-empty-state">
            <div className="sk-illustration">
            </div>
            
            <p className="sk-welcome-msg">
              Your customized skin  regimens await!<br />
              Take the quiz and get your products now.
            </p>

            <div className="sk-action-btns">
              <button className="sk-btn sk-btn-cyan" onClick={() => navigate('/routine/skin')}>
                TAKE SKIN QUIZ
              </button>
              <button className="sk-btn sk-btn-cyan" onClick={() => navigate('/routine/hair')}>
                TAKE MAKEUP QUIZ
              </button>
            </div>
          </div>
        ) : (
          <div className="sk-data-display">
            <h2>Hello, {userData.firstName}!</h2>
            
          </div>
        )}

        <button className="sk-signout-btn" onClick={handleSignOut}>
          <span className="sk-icon-rev">⟳</span> Sign Out
        </button>
      </div>
    </div>
  </div>
);
}
export default Myaccount;