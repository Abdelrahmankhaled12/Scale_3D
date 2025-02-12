// Importing required dependencies and styles
import './style.scss'; // Component-specific styles
import { faXmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesomeIcon component
import { LINKS_ITEM_DASH } from '../../../constants'; // Dashboard navigation links
import { useNavigate, useLocation } from 'react-router-dom'; // Navigation and location hooks
import profile_icon from "../../../assets/profile_icon.png"; // Profile icon asset
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import { LOGOUT_API } from '../../../utils'; // API utility for logout
import { setLogged, setUserData } from '../../../store/loginUser'; // Redux actions

/**
 * MenuMobile Component
 * A responsive navigation menu for mobile devices with logout functionality.
 * 
 * @param {boolean} isOpenMenu - Indicates if the menu is open.
 * @param {function} closeModalMenu - Function to close the menu.
 */

const MenuMobile = ({ isOpenMenu, closeModalMenu }) => {
    const navigate = useNavigate(); // Navigation function for route changes
    const location = useLocation(); // Current location object
    const { loginUser } = useSelector((state) => state); // Access user data from Redux store
    const dispatch = useDispatch(); // Dispatch for updating Redux store

    /**
     * Handles user logout by calling the API and clearing session data.
     */

    const logout = () => {
        LOGOUT_API({
            email: loginUser.userData.email,
            _id: loginUser.userData._id,
        }).then((res) => {
            if (res.message === "Logged out successfully") {
                navigate("/"); // Navigate to the homepage
                // Clear user data in Redux store and session storage
                dispatch(setLogged(false));
                dispatch(setUserData({}));
                sessionStorage.setItem('loginU', false);
                sessionStorage.setItem('userData', null);
            }
        }).catch((err) => {
            console.error("Logout failed:", err);
        });
    };

    return (
        <>
            <div className={isOpenMenu ? "menu menu_active" : "menu"}>
                <div className="flex">
                    {/* Clickable area outside the menu to close it */}
                    <div style={{ flex: "1" }} onClick={closeModalMenu}></div>
                    <div className="content">
                        {/* Menu Header */}
                        <div>
                            <div className="top">
                                <div className="logo">
                                    <h1>Scala 3D</h1>
                                </div>
                                <button onClick={closeModalMenu}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <ul>
                                {LINKS_ITEM_DASH.map((item) => (
                                    <li
                                        key={item.path}
                                        className={location.pathname === item.path ? "active" : ""}
                                        onClick={() => {
                                            navigate(item.path);
                                            closeModalMenu();
                                        }}
                                        aria-label={`Navigate to ${item.label}`}
                                    >
                                        <FontAwesomeIcon icon={item.icon} />
                                        {item.label}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Footer Section */}
                        <div className="footer">
                            {/* User Information */}
                            <div className="userIcon">
                                <div className="image">
                                    <img src={profile_icon} alt="User Profile" />
                                </div>
                                <p>{loginUser?.userData?.name || "Guest"}</p>
                            </div>
                            {/* Logout Icon */}
                            <div className="icon" onClick={logout}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MenuMobile;
