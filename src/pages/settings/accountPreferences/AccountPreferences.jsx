// Importing required dependencies and styles
import { useState } from 'react';
import './style.scss';

/**
 * AccountPreferences Component
 * Allows users to update account preferences such as security question, security answer, and default file location.
 */

const AccountPreferences = () => {
    // State variables for managing form inputs
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [securityAnswer, setSecurityAnswer] = useState("");
    const [fileLocation, setFileLocation] = useState("");

    /**
     * Handles form submission for updating settings.
     */
    const handleSubmit = () => {
        if (!securityQuestion || !securityAnswer || !fileLocation) {
            alert("Please fill out all fields before submitting.");
            return;
        }
        alert("Settings updated successfully!");
    };

    return (
        <div className="accountPreferences">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="grid_form">
                    {/* Security Question Input */}
                    <div className="div">
                        <label htmlFor="securityQuestion">Security Question</label>
                        <select
                            id="securityQuestion"
                            value={securityQuestion}
                            onChange={(e) => setSecurityQuestion(e.target.value)}
                        >
                            <option value="" disabled>
                                Select a security question
                            </option>
                            <option value="Your Favorite Writer">Your Favorite Writer</option>
                            <option value="Your Favorite Actor">Your Favorite Actor</option>
                            <option value="Your Favorite Singer">Your Favorite Singer</option>
                            <option value="Your Best Friend's Nickname">
                                Your Best Friend's Nickname
                            </option>
                        </select>
                    </div>

                    {/* Security Answer Input */}
                    <div className="div">
                        <label htmlFor="securityAnswer">Security Answer</label>
                        <input
                            id="securityAnswer"
                            type="text"
                            placeholder="Please enter your security answer"
                            value={securityAnswer}
                            onChange={(e) => setSecurityAnswer(e.target.value)}
                        />
                    </div>

                    {/* File Location Input */}
                    <div className="div">
                        <label htmlFor="fileLocation">Default Destination File Location</label>
                        <p
                            onClick={() => document.getElementById("fileLocation").click()}
                            className="fileLocationLabel"
                        >
                            Click to choose a file location
                        </p>
                        <input
                            id="fileLocation"
                            type="file"
                            onChange={(e) => setFileLocation(e.target.value)}
                            style={{ display: "none" }}
                        />
                        {fileLocation && <p className="filePath">Selected: {fileLocation}</p>}
                    </div>
                </div>

                {/* Form Buttons */}
                <div className="buttons">
                    <button type="submit" onClick={handleSubmit}>
                        Update Preferences
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AccountPreferences;
