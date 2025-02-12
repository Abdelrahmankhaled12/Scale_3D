// Importing required dependencies and components
import React, { useState } from 'react';
import './style.scss'; // Component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'; // Required icons
import { Effect } from '../../components'; // Wrapper for animations or visual effects
import { useNavigate, useLocation } from 'react-router-dom'; // Hooks for navigation and location data
import { RESET_PASS_API } from '../../utils'; // API utility for resetting password

/**
 * NewPassword Component
 * Allows users to set and confirm their new password.
 */

const NewPassword = () => {
    // State variables for managing password inputs and validation
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigate = useNavigate(); // Navigation hook
    const location = useLocation(); // Location hook for query params
    const token = new URLSearchParams(location.search).get('token'); // Extract token from query params

    /**
     * Validates and submits the form data.
     */
    const handleSubmit = () => {
        setErrorMessage(""); // Reset error message

        // Validate input fields
        if (!password || !confirmPassword) {
            setErrorMessage("Both fields are required.");
            return;
        }
        if (password.length < 6) {
            setErrorMessage("Password must be at least 6 characters long.");
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        // Call API to reset password
        RESET_PASS_API({ token, newPassword: password })
            .then((res) => {
                if (res.message === "Password successfully updated") {
                    navigate("/new-password/success"); // Redirect to success page
                } else {
                    setErrorMessage("Failed to update password. Please try again.");
                }
            })
            .catch(() => {
                setErrorMessage("An error occurred. Please try again later.");
            });
    };

    return (
        <Effect>
            <div className="newPassword">
                <div className="container_">
                    <div className="content">
                        {/* Title and description */}
                        <div className="title">
                            <h1>New Password</h1>
                            <p>Enter your new password and confirm it below.</p>
                        </div>

                        {/* Form for updating password */}
                        <form onSubmit={(e) => e.preventDefault()}>
                            {/* Password Input */}
                            <div className="div">
                                <label htmlFor="password">Password</label>
                                <div className="input_div">
                                    <FontAwesomeIcon icon={faLock} />
                                    <div
                                        className="eye"
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                        aria-label="Toggle password visibility"
                                    >
                                        <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
                                    </div>
                                    <input
                                        id="password"
                                        type={isPasswordVisible ? "text" : "password"}
                                        placeholder="Enter your password"
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
                                        onClick={() =>
                                            setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
                                        }
                                        aria-label="Toggle confirm password visibility"
                                    >
                                        <FontAwesomeIcon
                                            icon={isConfirmPasswordVisible ? faEye : faEyeSlash}
                                        />
                                    </div>
                                    <input
                                        id="confirmPassword"
                                        type={isConfirmPasswordVisible ? "text" : "password"}
                                        placeholder="Confirm your password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {errorMessage && <p className="error-message">{errorMessage}</p>}

                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                style={
                                    !password.trim() || !confirmPassword.trim()
                                        ? { pointerEvents: "none", opacity: "0.5" }
                                        : {}
                                }
                            >
                                Update Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Effect>
    );
};

export default NewPassword;
