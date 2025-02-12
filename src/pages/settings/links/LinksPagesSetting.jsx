// Importing required dependencies and styles
import { useState } from 'react';
import './style.scss'; // Component-specific styles

/**
 * LinksPagesSetting Component
 * This component renders a list of settings links and allows users to select one.
 * The active link is visually highlighted.
 */

const LinksPagesSetting = ({ setSelectedTab }) => {
    const [active, setActive] = useState(0); // State to track the active link

    // List of items for the settings links
    const items = [
        "Account Setting",
        "Account Preferences",
    ];

    return (
        <ul className="linksPagesSetting">
            {items.map((item, index) => (
                <li
                    key={item} // Use item text as a unique key
                    className={active === index ? "active" : ""} // Add 'active' class if the item is selected
                    onClick={() => { setActive(index), setSelectedTab(index) }} // Update active state on click
                    role="button" // Add role to improve accessibility
                    tabIndex={0} // Make the list item focusable
                    aria-selected={active === index} // Accessibility enhancement
                >
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default LinksPagesSetting;
