// Importing required dependencies and styles
import React from 'react';
import './style.scss'; // Component-specific styles

/**
 * TopUsers Component
 * Displays a list of top users with their respective scores in a visual format.
 */

const TopUsers = () => {
    // Static data for top users
    const ITEMS = [
        { title: "Bill", number: 48 },
        { title: "Donald", number: 35 },
        { title: "Joe", number: 24 },
        { title: "Barack", number: 12 },
    ];

    return (
        <div className="topUsers">
            {/* Component Title */}
            <h4>Top Users</h4>

            {/* Static List of Top Users */}
            <div className="static">
                {ITEMS.map((item, index) => (
                    <div className="item" key={index}>
                        {/* User Name */}
                        <h5>{item.title}</h5>

                        {/* Visual Indicator */}
                        <div className="process">
                            {/* Dynamic progress bar width */}
                            <span></span>
                        </div>

                        {/* User Score */}
                        <p className="number">{item.number}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopUsers;
