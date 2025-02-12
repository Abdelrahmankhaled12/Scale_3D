// Importing required dependencies and components
import React from 'react';
import { useNavigate } from "react-router-dom"; // Hook for programmatic navigation
import { Effect } from '../../components'; // Wrapper for animations or visual effects
import './style.scss'; // Component-specific styles

/**
 * Home Component
 * This component serves as the landing page of the application.
 * It provides a welcome message and navigation options for login and registration.
 */

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function for route handling

  return (
    <Effect>
      <div className="home">
        <div className="container_H">
          <div className="content">
            <div className="text">
              <h2>Welcome to</h2>
              <h1>SCALA 3D</h1>
              <h2>Manage all your stairlift survey projects with this new platform</h2>
            </div>
            {/* Navigation buttons */}
            <div className="buttons">
              <button 
                onClick={() => navigate("/login")} 
                aria-label="Navigate to login page"
              >
                Login
              </button>
              <button 
                onClick={() => navigate("/register")} 
                aria-label="Navigate to register page"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </Effect>
  );
};

export default Home;
