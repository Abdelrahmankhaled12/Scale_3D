// Importing required dependencies and components
import { Effect } from '../../../components'; // Wrapper for animations or visual effects
import { FORGET_PASS_API } from '../../../utils'; // Utility for handling API requests
import './style.scss'; // Component-specific styles
import { useLocation } from 'react-router-dom'; // React Router hook for accessing location data
import Swal from 'sweetalert2/dist/sweetalert2.js'; // SweetAlert2 for styled alerts

/**
 * ResendLink Component
 * Displays a message to inform the user that a reset link has been sent
 * and provides a button to resend the reset link.
 */

const ResendLink = () => {
    // Extracting email from the URL query parameters
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get('email'); // Retrieve email from query params

    /**
     * Handles the resend link action.
     * Sends a request to the server to resend the reset email.
     */

    const handleResendLink = async () => {
        try {
            const response = await FORGET_PASS_API({ email });

            if (response.message === "Reset email sent") {
                Swal.fire({
                    title: "Success!",
                    text: "A reset link has been sent to your email address again.",
                    icon: "success",
                    iconColor:"#0003",
                    confirmButtonColor: "#000000",
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to resend the reset link. Please try again later.",
                    icon: "error",
                    iconColor:"#0003",
                    confirmButtonColor: "#000000",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please check your connection and try again.",
                icon: "error",
                iconColor:"#0003",
                confirmButtonColor: "#000000",
            });
        }
    };

    return (
        <Effect>
            <div className="resendLink">
                <div className="container_">
                    <div className="content">
                        {/* Title and message */}
                        <div className="title">
                            <h1>Check your email</h1>
                            <p>
                                A reset link has been sent to your email address.
                            </p>
                        </div>
                        {/* Button to resend the link */}
                        <button onClick={handleResendLink}>Resend Link</button>
                    </div>
                </div>
            </div>
        </Effect>
    );
};

export default ResendLink;
