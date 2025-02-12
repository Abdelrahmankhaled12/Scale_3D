// Importing required dependencies and styles
import './style.scss'; // Component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Envelope icon for email input
import { useNavigate } from "react-router-dom"; // Hook for programmatic navigation
import { useEffect, useState } from 'react'; // Hook for managing component state
import { Effect } from '../../components'; // Wrapping component for animations or effects
import { FORGET_PASS_API } from '../../utils';

/**
 * ForgotPassword Component
 * This component provides a UI for users to request a password reset link via their email.
 */

const ForgotPassword = () => {

    const navigate = useNavigate(); // Initialize navigation function using the useNavigate hook
    const [email, setEmail] = useState(""); // State to store the user's email input
    const [error, setError] = useState(false); // Track errors for invalid email


    /**
     * Handles form submission for resetting the password.
     * Navigates to the resend-link page if the email input is valid.
     */

    const handleSubmit = () => {
        if (email.trim()) {
            FORGET_PASS_API({ email })
                .then((res) => {
                    if (res.message === "Reset email sent") {
                        navigate(`/forgot-password/resend-link?email=${email}`);
                    } else {
                        setError(true);
                    }
                })
                .catch(() => {
                    setError(true); // Handle unexpected API errors
                });
        }
    };

    /**
     * Resets the error state when the email input changes.
     */
    useEffect(() => {
        setError(false)
    }, [email])

    return (
        <Effect>
            <div className="forgotPassword">
                <div className="container_">
                    <div className="content">
                        <div className="title">
                            <h1>Forgot password</h1>
                            <p>
                                Enter your email address below and we’ll send <br />
                                you a link to create a new password.
                            </p>
                        </div>
                        {/* Form for email input */}
                        <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                            <div className="div">
                                <label htmlFor="email">Email</label>
                                <div className="input_div">
                                    {/* Email input field with icon */}
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Please enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Update state on input change
                                    />
                                </div>
                            </div>
                            {error && <p className="error-message">User not found</p>}

                            {/* Button to trigger password reset */}
                            <button onClick={handleSubmit}
                                style={email.trim() === "" ? {
                                    pointerEvents: "none",
                                    opacity: "0.5"
                                } : {}}

                            >Reset Password</button>
                        </form>

                        {/* Link to navigate back to the login page */}
                        <div className="orDiv">
                            Remember your password?{" "}
                            <span onClick={() => navigate("/login")}>Login</span>
                        </div>
                    </div>
                </div>
            </div>
        </Effect>
    );
};

export default ForgotPassword;
