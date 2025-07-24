import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { storage } from '../../lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editName, setEditName] = useState('');
  const [editImage, setEditImage] = useState('');
  const [editError, setEditError] = useState('');
  const [editLoading, setEditLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setEditName(currentUser?.displayName || '');
      setEditImage(currentUser?.photoURL || '');
    });
    return () => unsubscribe();
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleProfileClick = () => setShowProfileDropdown((v) => !v);
  const handleEditProfile = () => setShowEditModal(true);
  const handleEditSave = async () => {
    setEditError('');
    setEditLoading(true);
    let photoURL = editImage;
    try {
      if (user) {
        await updateProfile(auth.currentUser, { displayName: editName, photoURL });
        // Force refresh user from Firebase
        await auth.currentUser.reload();
        setUser({ ...auth.currentUser });
        setShowEditModal(false);
      }
    } catch (err) {
      setEditError('Failed to update profile. Please try again.');
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <li><Link to="/">Crypture</Link></li></div>
      <ul className={isMobileMenuOpen ? 'nav-links mobile' : 'nav-links'}>
        <li> <Link to="/market">Market</Link></li>
        <li><Link to="/converter">Converter</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/news">News</Link></li>
        {!user && (
          <>
            <li><Link to="/login" className="btn login">Login</Link></li>
            <li><Link to="/signup" className="btn signup">Sign Up</Link></li>
          </>
        )}
        {user && (
          <li className="profile-menu">
            <div className="profile-section">
              <img
                src={user.photoURL || 'https://ui-avatars.com/api/?name=' + (user.displayName || 'U')}
                alt="profile"
                className="profile-img"
                onClick={handleProfileClick}
                style={{ cursor: 'pointer', width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid #2db4fd' }}
              />
              {showProfileDropdown && (
                <div className="profile-dropdown">
                  <div className="profile-info">
                    <div className="profile-name">{user.displayName}</div>
                    <div className="profile-email">{user.email}</div>
                  </div>
                  <button className="btn edit-profile" onClick={handleEditProfile}>Edit Profile</button>
                  <button className="btn logout" onClick={handleLogout}>Logout</button>
                </div>
              )}
              {showEditModal && (
                <div className="edit-modal">
                  <div className="edit-modal-content">
                    <h3>Edit Profile</h3>
                    <label>Name</label>
                    <input value={editName} onChange={e => setEditName(e.target.value)} />
                    <label>Image URL</label>
                    <input value={editImage} onChange={e => setEditImage(e.target.value)} />
                    {editError && <div style={{color:'red', marginBottom:'0.5rem'}}>{editError}</div>}
                    <button className="btn save" onClick={handleEditSave} disabled={editLoading}>{editLoading ? 'Saving...' : 'Save'}</button>
                    <button className="btn cancel" onClick={() => { setShowEditModal(false); setEditError(''); }}>Cancel</button>
                  </div>
                </div>
              )}
            </div>
          </li>
        )}
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
