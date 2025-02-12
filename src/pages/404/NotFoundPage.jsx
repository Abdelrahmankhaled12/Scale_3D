// Importing required dependencies and styles
import './style.scss';
import { useNavigate } from "react-router-dom"; // For navigation between routes
import { useEffect } from 'react'; // React hook for side effects
import { Effect } from '../../components'; // Wrapper for animations or visual effects

/**
 * NotFoundPage Component
 * This component renders a 404 error page for undefined routes.
 * Includes a button to navigate back to the home page.
 */

const NotFoundPage = () => {
    const navigate = useNavigate(); // Initialize navigation function

    // Scroll to the top of the page on component mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Effect>
            <div className="notFoundPage">
                <div className="container">
                    <div className="content">
                        {/* Display 404 Error */}
                        <h1>404</h1>
                        <div className="text">
                            <h2>Nothing to see here!</h2>
                            <p>
                                The page you are looking for has been moved or no longer exists. 
                                You can return to our home page by clicking the button below.
                            </p>
                            {/* Navigation Button */}
                            <button onClick={() => navigate("/")}>Home Page</button>
                        </div>
                    </div>
                </div>
            </div>
        </Effect>
    );
};

export default NotFoundPage;
