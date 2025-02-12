// Importing required dependencies and styles
import './style.scss'; // Component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { useNavigate, useLocation } from 'react-router-dom'; // Hooks for navigation and location
import { LINKS_ITEM_DASH } from '../../constants';

/**
 * SideBar Component
 * This component renders a sidebar navigation menu with links to different sections.
 * Active links are visually highlighted based on the current route.
 */

const SideBar = ({ sidebarActive }) => {
    const navigate = useNavigate(); // Navigation function for route changes
    const location = useLocation(); // Get the current path

    return (
        <div className={sidebarActive ? "sideBar sideBarActive" : "sideBar"}>
            <ul>
                {LINKS_ITEM_DASH.map((item) => (
                    <li
                        key={item.path}
                        className={location.pathname === item.path ? "active" : ""} // Highlight active menu item
                        onClick={() => navigate(item.path)} // Navigate to the respective path
                        aria-label={`Navigate to ${item.label}`} // Accessibility enhancement
                    >
                        <FontAwesomeIcon icon={item.icon} /> {/* Icon */}
                        {item.label} {/* Label */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SideBar;
