// Importing required dependencies and components
import { Effect } from '../../../components'; // Wrapping component for animations or effects
import './style.scss'; // Importing specific styles for this component
import { useNavigate } from "react-router-dom"; // Hook for programmatic navigation

/**
 * Success Component
 * This component displays a success message after a user has reset their password.
 * It provides a button to navigate the user to the login page.
 */

const Success = () => {
    // Initialize the navigation function using the useNavigate hook
    const navigate = useNavigate();

    // Handle navigation to the login page
    const handleLoginNavigation = () => {
        navigate("/login"); // Navigate to the login route
    };

    return (
        <Effect> 
            <div className="success_pass">
                <div className="container_">
                    <div className="content">
                        <div className="title">
                            <h1>Success!</h1>
                            <p>
                                Your password has been successfully reset. <br />
                                Please login to your account below.
                            </p>
                        </div>
                        {/* Button to navigate to the login page */}
                        <button onClick={handleLoginNavigation}>Login</button>
                    </div>
                </div>
            </div>
        </Effect>
    );
};

export default Success;
