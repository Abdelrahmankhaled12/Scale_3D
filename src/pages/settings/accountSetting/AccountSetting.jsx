// Importing required dependencies and styles
import './style.scss'; // Component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'; // Required icons
import { useState } from 'react'; // React hook for managing state
import icon from '../../../assets/gallery-add.png'; // Image for upload icon

/**
 * AccountSetting Component
 * This component allows users to update their account details, including profile picture, contact information, and password.
 */

const AccountSetting = () => {
    // State variables for user input fields
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [lastName, setLastName] = useState("");
    const [uploadImage, setUploadImage] = useState("");

    // State variables for password visibility toggles
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    // State variables for password inputs
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    /**
     * Handles form submission.
     * This could include form validation and submission to an API endpoint.
     */
    const handleSubmit = () => {
        alert("Profile Updated Successfully");
    };

    /**
     * Handles image upload and stores the file.
     * @param {Object} e - The file input change event
     */
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUploadImage(file.name); // Store the file name or handle file upload logic here
        }
    };


    return (
        <div className="accountSetting">
            <form onSubmit={(e) => e.preventDefault()}> {/* Prevent default form submission */}
                {/* Profile Picture Upload */}
                <div
                    className="input_image"
                    onClick={() => document.getElementById("uploadImage").click()}
                >
                    <h4>Your Profile Picture</h4>
                    <div className="div">
                        <div className="icon">
                            <img src={icon} alt="Upload Icon" />
                        </div>
                        <p>Upload your <br /> photo</p>
                    </div>
                    <input
                        type="file"
                        id="uploadImage"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                    />
                </div>
                {/* User Details Form */}
                <div className="grid_form">
                    {/* Input Fields for User Information */}
                    <div className="div">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id="firstName"
                            type="text"
                            placeholder="Please enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="div">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Please enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="div">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Please enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="div">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            id="phoneNumber"
                            type="text"
                            placeholder="+1 | Please enter your phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    {/* Password and Confirm Password Fields */}
                    <div className="div">
                        <label htmlFor="password">Password</label>
                        <div className="input_div">
                            <input
                                id="password"
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Please enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div
                                className="eye"
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                            >
                                <FontAwesomeIcon icon={isPasswordVisible ? faEye : faEyeSlash} />
                            </div>
                        </div>
                    </div>

                    <div className="div">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="input_div">
                            <input
                                id="confirmPassword"
                                type={isConfirmPasswordVisible ? "text" : "password"}
                                placeholder="Please confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <div
                                className="eye"
                                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                            >
                                <FontAwesomeIcon icon={isConfirmPasswordVisible ? faEye : faEyeSlash} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notes Section */}
                <div className="div div_textarea">
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        id="notes"
                        placeholder="Write your notes here e.g your hobbies, interests, etc."
                        value={confirmPassword} // Consider using a separate state for notes
                        onChange={(e) => setConfirmPassword(e.target.value)} // Update to handle notes
                    />
                </div>

                {/* Submit Buttons */}
                <div className="buttons">
                    <button type="submit" onClick={handleSubmit}>Update Settings</button>
                </div>
            </form>
        </div>
    );
};

export default AccountSetting;
