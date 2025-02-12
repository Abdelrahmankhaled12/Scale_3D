// Importing required dependencies and components
import React, { useEffect, useState } from 'react';
import './style.scss'; // Component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faLock, faEnvelope, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'; // Required icons
import { useNavigate } from "react-router-dom"; // Hook for programmatic navigation
import { Effect } from '../../components'; // Wrapper for animations or visual effects
import { setLogged, setUserData } from '../../store/loginUser'; // Redux actions
import { useDispatch } from "react-redux";
import { LOGIN_API } from '../../utils'; // API utility for login

/**
 * Login Component
 * Provides a login form for users to input their email and password.
 * Navigates to the dashboard upon successful submission.
 */

const Login = () => {
    const navigate = useNavigate(); // Navigation function for route handling
    const dispatch = useDispatch(); // Redux dispatch for managing global state

    // State variables for managing email, password, and visibility
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [error, setError] = useState(false); // State to handle login errors

    /**
     * Handles form submission for logging in.
     * Validates input, calls the API, and updates global state upon success.
     */

    const handleSubmit = async () => {
        if (email.trim() && password.trim()) {
            try {
                const res = await LOGIN_API({ email, password });

                if (res.message === "Invalid email or password") {
                    setError(true);
                    return;
                }
                // Update Redux state and session storage
                dispatch(setLogged(true));
                dispatch(setUserData(res));
                sessionStorage.setItem('loginU', true);
                sessionStorage.setItem("userData", JSON.stringify(res));
                navigate("/projects"); // Redirect to projects page
            } catch (error) {
                console.error("Login error:", error);
                setError(true); // Handle API errors
            }
        } else {
            alert("Please fill in both email and password.");
        }
    };

    useEffect(() => {
        if (error)
            setError(false)
    }, [email, password])

    return (
        <Effect>
            <div className="login">
                <div className="container_">
                    <div className="content">
                        {/* Login Title */}
                        <div className="title">
                            <h1>Login</h1>
                            <p>Enter your email and password below to login to your account.</p>
                        </div>

                        {/* Login Form */}
                        <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                            {/* Email Input */}
                            <div className="div">
                                <label htmlFor="email">Email</label>
                                <div className="input_div">
                                    <FontAwesomeIcon icon={faEnvelope} /> {/* Email icon */}
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Please enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Update email state
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="div">
                                <div className="textPassword">
                                    <label htmlFor="password">Password</label>
                                    <p onClick={() => navigate("/forgot-password")}>Forgot your password?</p>
                                </div>
                                <div className="input_div">
                                    <FontAwesomeIcon icon={faLock} /> {/* Lock icon */}
                                    {/* Toggle password visibility */}
                                    <div
                                        className="eye"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    >
                                        <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
                                    </div>
                                    <input
                                        type={isPasswordVisible ? "text" : "password"}
                                        id="password"
                                        placeholder="Please enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} // Update password state
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <p className="error-message">
                                    Invalid email or password. Please try again.
                                </p>
                            )}

                            {/* Login Button */}
                            <button
                                onClick={handleSubmit}
                                style={
                                    !email.trim() || !password.trim()
                                        ? { pointerEvents: "none", opacity: "0.5" }
                                        : {}
                                }
                            >
                                Login
                            </button>
                        </form>

                        {/* Navigation Links */}
                        <div className="orDiv">
                            Don’t have an account?{" "}
                            <span onClick={() => navigate("/register")}>Register</span>
                        </div>

                        {/* Footer */}
                        <div className="footer">
                            By logging in, you agree to our <br />
                            <span>Privacy Policy</span> and <span>Terms of Service</span>.
                        </div>
                    </div>
                </div>
            </div>
        </Effect>
    );
};

export default Login;
