// Importing required dependencies and styles
import React, { useState } from 'react';
import './style.scss'; // Component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faUser, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'; // Required icons
import { useNavigate } from "react-router-dom"; // Navigation hook
import { Effect } from "../../components"; // Wrapper for animations or visual effects
import { REGISTER_API } from '../../utils'; // API utility for registration
import { setLogged, setUserData } from '../../store/loginUser'; // Redux actions
import { useDispatch } from "react-redux"; // Redux hook for state management

/**
 * Register Component
 * Provides a registration form for creating an account.
 */

const Register = () => {
    const navigate = useNavigate(); // Initialize navigation function
    const dispatch = useDispatch(); // Redux dispatch for managing global state

    // State variables for managing form inputs
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState(""); // State to handle errors

    /**
     * Handles form submission by validating inputs and navigating to the dashboard upon success.
     */

    const handleSubmit = () => {
        // Validation for empty fields
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
            alert("Please fill out all fields.");
            return;
        }

        // Validation for password mismatch
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Validation for password length
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // API call for user registration
        REGISTER_API({
            name: `${firstName} ${lastName}`,
            email: email,
            password: password,
        })
            .then((res) => {
                if (res.message === "User already exists") {
                    setError("User already exists");
                    return;
                }

                // Update Redux state and session storage
                dispatch(setLogged(true));
                dispatch(setUserData(res));
                sessionStorage.setItem('loginU', true);
                sessionStorage.setItem("userData", JSON.stringify(res));

                // Navigate to the projects page
                navigate("/projects");
            })
            .catch(() => {
                setError("An unexpected error occurred. Please try again.");
            });
    };

    return (
        <Effect>
            <div className="register">
                <div className="container_">
                    <div className="content">
                        {/* Registration Form Header */}
                        <div className="title">
                            <h1>Register</h1>
                            <p>Create an account with your email and password below.</p>
                        </div>

                        {/* Registration Form */}
                        <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                            {/* First Name Input */}
                            <div className="div">
                                <label htmlFor="firstName">First Name</label>
                                <div className="input_div">
                                    <FontAwesomeIcon icon={faUser} />
                                    <input
                                        type="text"
                                        placeholder="Please enter your first name"
                                        id="firstName"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Last Name Input */}
                            <div className="div">
                                <label htmlFor="lastName">Last Name</label>
                                <div className="input_div">
                                    <FontAwesomeIcon icon={faUser} />
                                    <input
                                        type="text"
                                        placeholder="Please enter your last name"
                                        id="lastName"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="div">
                                <label htmlFor="email">Email</label>
                                <div className="input_div">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <input
                                        type="email"
                                        placeholder="Please enter your email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="div">
                                <label htmlFor="password">Password</label>
                                <div className="input_div">
                                    <FontAwesomeIcon icon={faLock} />
                                    <div
                                        className="eye"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    >
                                        <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
                                    </div>
                                    <input
                                        id="password"
                                        type={isPasswordVisible ? "text" : "password"}
                                        placeholder="Please enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Confirm Password Input */}
                            <div className="div">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <div className="input_div">
                                    <FontAwesomeIcon icon={faLock} />
                                    <div
                                        className="eye"
                                        onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                    >
                                        <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEye : faEyeSlash} />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        type={isConfirmPasswordVisible ? "text" : "password"}
                                        placeholder="Please confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && <p className="error-message">{error}</p>}

                            {/* Submit Button */}
                            <button onClick={handleSubmit}
                                style={
                                    !email.trim() || !password.trim() || !confirmPassword.trim() || !firstName.trim() || !lastName.trim()
                                        ? { pointerEvents: "none", opacity: "0.5" }
                                        : {}
                                }
                            >Create Account</button>
                        </form>

                        {/* Navigation to Login */}
                        <div className="orDiv">
                            Already have an account?{" "}
                            <span onClick={() => navigate("/login")}>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </Effect>
    );
};

export default Register;
