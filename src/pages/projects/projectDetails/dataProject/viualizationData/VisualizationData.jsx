// Importing required dependencies and assets
import './style.scss';
import image2 from '../../../../../assets/image1 (1).png';
import image3 from '../../../../../assets/image1 (2).png';
import icon from '../../../../../assets/image 14.png';
import icon2 from '../../../../../assets/image 13.png';
import icon3 from '../../../../../assets/image 12.png';
import icon4 from '../../../../../assets/image 11.png';
import { useState } from 'react';

const VisualizationData = ({ selectedTab, setSelected, imageActive }) => {
    const [zoomLevel, setZoomLevel] = useState(1); // State to control zoom level
    const [rotation, setRotation] = useState(0); // State to control image rotation

    // Function to zoom in
    const handleZoomIn = () => {
        setZoomLevel((prev) => Math.min(prev + 0.1, 2)); // Max zoom level is 2x
    };

    // Function to zoom out
    const handleZoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 0.1, 0.5)); // Min zoom level is 0.5x
    };

    // Function to reset transformations
    const handleReset = () => {
        setZoomLevel(1);
        setRotation(0);
    };

    // Function to rotate the image
    const handleRotate = () => {
        setRotation((prev) => prev + 90); // Rotate 90 degrees clockwise
    };

    // Function to render the main visualization image
    const renderImage = () => {
        return (
            <img
                src={selectedTab === 'Images' ? imageActive : selectedTab === '2D DXF' ? image3 : image2}
                alt="Visualization"
                className="visualizationImage"
                style={{
                    transform: `scale(${zoomLevel}) rotate(${rotation}deg)`,
                }}
            />
        );
    };

    // Function to render file details
    const renderDetails = () => {
        return selectedTab === 'Images' ? (
            <p>Name - image1.jpg</p>
        ) : (
            <p>Name - model1.dxf</p>
        );
    };

    return (
        <div className="visualization">
            {/* Header Section */}
            <div className="top">
                <h2>Visualization</h2>
                <div className="buttons">
                    {/* Render tab buttons */}
                    {['2D DXF', '3D DXF', 'Images'].map((tab) => (
                        <button
                            key={tab}
                            className={selectedTab === tab ? 'buttonVis buttonVisActive' : 'buttonVis'}
                            onClick={() => setSelected(tab)} // Update the selected tab
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Visualization Image */}
            <div className="image">{renderImage()}</div>

            {/* Footer Section */}
            <div className="footer">
                {/* File details */}
                <div className="details">
                    {renderDetails()}
                    <p>Size - 1.92MB</p>
                    <p>Date created - 22 Oct 2024, 14:01:35</p>
                </div>

                {/* Action controls */}
                <div className="controls">
                    <div className="icons">
                        <div className="icon" onClick={handleZoomIn}>
                            <img src={icon3} alt="Zoom In" title="Zoom In" />
                        </div>
                        <div className="icon" onClick={handleZoomOut}>
                            <img src={icon4} alt="Zoom Out" title="Zoom Out" />
                        </div>
                        <div className="icon" onClick={handleRotate}>
                            <img src={icon2} alt="Rotate" title="Rotate" />
                        </div>
                        <div className="icon" onClick={handleReset}>
                            <img src={icon} alt="Reset" title="Reset" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisualizationData;
