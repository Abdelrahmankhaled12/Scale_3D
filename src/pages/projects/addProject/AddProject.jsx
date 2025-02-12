// Importing required styles and dependencies
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faXmark } from '@fortawesome/free-solid-svg-icons'; // Close icon
import { useState } from 'react';

/**
 * AddProject Component
 * Renders a modal form to add a new project with validation.
 */
const AddProject = ({ isOpen, closeModel }) => {
    // Initial state for the form
    const initialState = {
        firstname: '',
        surname: '',
        compName: '',
        numImages: '',
        status: 'Pending Processing',
    };

    // State for form data and error messages
    const [formData, setFormData] = useState(initialState);
    const [errorMessage, setErrorMessage] = useState('');

    // Handle input change for text and number fields
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
        setErrorMessage(''); // Clear error message when user starts typing
    };

    // Handle radio button change for status
    const handleRadioChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            status: e.target.value,
        }));
    };

    // Handle form submission
    const handleSubmit = () => {
        const { firstname, surname, compName, numImages } = formData;

        // Validate form inputs
        if (!firstname || !surname || !compName || !numImages) {
            setErrorMessage('All fields are required.');
            return;
        }

        // Perform your submission logic here
        console.log('Form submitted:', formData);

        // Reset form after successful submission
        setFormData(initialState);
        closeModel();
    };

    return (
        <div className={isOpen ? 'addProject' : 'addProject hide'}>
            {/* Overlay to close the modal */}
            <div
                className="closeModel"
                onClick={() => {
                    closeModel();
                    setFormData(initialState);
                }}
            ></div>

            {/* Modal Content */}
            <div className="addProjectContent">
                {/* Modal Header */}
                <div className="top">
                    <h3>Add Project</h3>
                    <button
                        className="button_close"
                        onClick={() => closeModel()}
                        aria-label="Close Modal"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                {/* Modal Body */}
                <div className="body">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="grid_form">
                            {/* Customer Firstname */}
                            <div className="div">
                                <label htmlFor="firstname">Cust. Firstname</label>
                                <div className="input_div">
                                    <input
                                        type="text"
                                        id="firstname"
                                        placeholder="Enter customer's firstname"
                                        value={formData.firstname}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Customer Surname */}
                            <div className="div">
                                <label htmlFor="surname">Cust. Surname</label>
                                <div className="input_div">
                                    <input
                                        type="text"
                                        id="surname"
                                        placeholder="Enter customer's surname"
                                        value={formData.surname}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Company Name */}
                            <div className="div">
                                <label htmlFor="compName">Comp. Name</label>
                                <div className="input_div">
                                    <input
                                        type="text"
                                        id="compName"
                                        placeholder="Enter company name"
                                        value={formData.compName}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            {/* Number of Images */}
                            <div className="div">
                                <label htmlFor="numImages">Num Images</label>
                                <div className="input_div">
                                    <input
                                        type="number"
                                        id="numImages"
                                        placeholder="Enter number of images"
                                        value={formData.numImages}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Status Radios */}
                        <div className="radiosFields">
                            <p>Status</p>
                            <div className="radios">
                                {[
                                    'Pending Processing',
                                    'Processing Failed',
                                    'Processing Successful',
                                    'DXF Exported',
                                ].map((statusOption) => (
                                    <div className="radio" key={statusOption}>
                                        <input
                                            type="radio"
                                            name="status"
                                            value={statusOption}
                                            checked={formData.status === statusOption}
                                            onChange={handleRadioChange}
                                            id={statusOption}
                                        />
                                        <label htmlFor={statusOption}>{statusOption}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Error Message */}
                        {errorMessage && <p className="errorMessage">{errorMessage}</p>}

                        {/* Submit Button */}
                        <button type="button" onClick={handleSubmit}>
                            Add Project
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProject;
