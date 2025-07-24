import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../lib/firebase';
import './auth.css';

const getFriendlyError = (code) => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'This email is already registered.';
    case 'auth/invalid-email':
      return 'Please enter a valid email address.';
    case 'auth/weak-password':
      return 'Password should be at least 6 characters.';
    case 'auth/network-request-failed':
      return 'Network error. Please check your connection.';
    default:
      return 'An unexpected error occurred. Please try again.';
  }
};

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: imageUrl,
      });
      setSuccess('Signup successful! Redirecting to home...');
      setTimeout(() => navigate('/'), 1200);
    } catch (err) {
      setError(getFriendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-title">Sign Up</div>
      <form className="auth-form" onSubmit={handleSubmit}>
        <label className="auth-label" htmlFor="signup-name">Name</label>
        <input
          id="signup-name"
          className="auth-input"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="auth-label" htmlFor="signup-img">Profile Image URL</label>
        <input
          id="signup-img"
          className="auth-input"
          type="url"
          placeholder="Paste your image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <label className="auth-label" htmlFor="signup-email">Email</label>
        <input
          id="signup-email"
          className="auth-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="auth-label" htmlFor="signup-password">Password</label>
        <div className="auth-password-wrapper">
          <input
            id="signup-password"
            className="auth-input"
            type={showPassword ? 'text' : 'password'}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="auth-password-toggle"
            onClick={() => setShowPassword((v) => !v)}
            tabIndex={-1}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <button className="auth-btn" type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
      {error && <div className="auth-message error">{error}</div>}
      {success && <div className="auth-message success">{success}</div>}
      <div className="auth-toggle">
        <Link to="/login" style={{ textDecoration: 'underline', color: '#007bff', display: 'block' }}>
          Already have an account? Login
        </Link>
      </div>
    </div>
  );
};

export default Signup; 