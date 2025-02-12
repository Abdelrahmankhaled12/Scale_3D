import React from 'react';
import './style.scss';

/**
 * BoxChart Component
 * A reusable component for displaying a chart box with items and interactivity.
 * 
 * Props:
 * - title: The title of the box.
 * - items: An array of objects, each containing `title` and `number` for display.
 * - reverse: A boolean to reverse the box layout.
 * - setIsOpen: A function to toggle modal visibility.
 * - setDetails: A function to set details for the modal.
 */

const BoxChart = ({ title, items, reverse, setIsOpen, setDetails }) => {
    return (
        <div className={reverse ? "boxChart reverse" : "boxChart"}>
            {/* Title with click event to trigger modal */}
            <h4
                onClick={() => {
                    setIsOpen(); // Open the modal
                    setDetails({
                        items: items, // Pass items to the modal
                        title: title, // Pass title to the modal
                    });
                }}
            >
                {title}
            </h4>

            {/* Static section displaying the items */}
            <div className="static">
                {items.map((item, index) => {
                    if (index < 4) return (
                        <div className="item" key={index}>
                            <h5>{item.title}</h5> {/* Display item title */}
                            <div className="process">
                                <span></span> {/* Placeholder for process visualization */}
                            </div>
                            <p className="number">{item.number}</p> {/* Display item number */}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default BoxChart;
