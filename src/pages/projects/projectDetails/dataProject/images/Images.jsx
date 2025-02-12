// Importing required dependencies and styles
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'; // Required icons
import './style.scss'; // Component-specific styles

// Placeholder images array
import image from '../../../../../assets/image1.png'; 
import image2 from '../../../../../assets/image2.jpg'; 
import image3 from '../../../../../assets/image3.jpg'; 
import image4 from '../../../../../assets/image4.jpg'; 
import image5 from '../../../../../assets/image5.jpg'; 
import image6 from '../../../../../assets/image6.jpg'; 
import image7 from '../../../../../assets/image7.jpg'; 
import image8 from '../../../../../assets/image8.jpg'; 
import image9 from '../../../../../assets/image9.jpg'; 
import image10 from '../../../../../assets/image10.jpg'; 
import image11 from '../../../../../assets/image11.jpg'; 
import image12 from '../../../../../assets/image12.jpg'; 
import image13 from '../../../../../assets/image13.jpg'; 
import image14 from '../../../../../assets/image14.jpg'; 
import image15 from '../../../../../assets/image15.jpg'; 

/**
 * Images Component
 * Displays a grid of images with pagination controls.
 */
const imagesPlaceholder = [
    image, image2, image3, image4, image5,
    image6, image7, image8, image9, image10,
    image11, image12, image13, image14, image15,
];

const Images = ({ setImageActive }) => {
    // State for active image and pagination
    const [active, setActive] = useState(0); // Tracks the active image
    const [currentPage, setCurrentPage] = useState(1); // Tracks the current page

    // Configuration for pagination
    const totalImages = imagesPlaceholder.length; // Total number of images
    const imagesPerPage = 14; // Number of images displayed per page
    const totalPages = Math.ceil(totalImages / imagesPerPage); // Total number of pages

    // Prepare the images array
    const images = Array.from({ length: totalImages }, (_, index) => ({
        id: index,
        src: imagesPlaceholder[index],
        alt: `Image ${index + 1}`,
    }));

    // Calculate visible images for the current page
    const startIndex = (currentPage - 1) * imagesPerPage;
    const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);

    // Handle navigation
    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    return (
        <div className="imagesComponent">
            {/* Header Section */}
            <div className="top">
                <h1>Images</h1>
                <p>
                    Showing {startIndex + 1} - {startIndex + visibleImages.length} of {totalImages}
                </p>
            </div>

            {/* Pagination Controls */}
            <div className="controls">
                <button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    aria-label="Previous Page"
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    aria-label="Next Page"
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>

            {/* Images Grid */}
            <div className="imagesApi">
                {visibleImages.map((img) => (
                    <div
                        key={img.id}
                        className={`image ${active === img.id ? 'imageActive' : ''}`}
                        onClick={() => {
                            setActive(img.id); // Set the active image ID
                            setImageActive(img.src); // Update the active image in the parent component
                        }}
                        aria-label={`Select ${img.alt}`}
                    >
                        <img src={img.src} alt={img.alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Images;
