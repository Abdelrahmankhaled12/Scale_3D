// Importing required dependencies and styles
import './style.scss'; // Component-specific styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'; // Required icons
import profile_icon from "../../assets/profile_icon.png"; // Profile icon asset
import { useNavigate } from 'react-router-dom'; // Navigation hook
import MenuMobile from './menuMobile/MenuMobile'; // Mobile menu component
import { useState } from 'react'; // State management hook
import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import { LOGOUT_API } from '../../utils'; // API utility for logout
import { setLogged, setUserData } from '../../store/loginUser'; // Redux actions

/**
 * Header Component
 * Displays the app's header with navigation controls, user info, and logout functionality.
 * Includes a responsive menu for mobile devices.
 */

const Header = ({ sidebarActive, setSidebarActive }) => {
    const navigate = useNavigate(); // Navigation function for route changes
    const [isOpenMenu, setIsOpenMenu] = useState(false); // State for managing mobile menu visibility
    const { loginUser } = useSelector((state) => state); // Access user data from Redux store
    const dispatch = useDispatch(); // Redux dispatch for managing global state

    /**
     * Handles user logout by calling the API and clearing session data.
     */

    const logout = () => {
        LOGOUT_API({
            email: loginUser.userData.email,
            _id: loginUser.userData._id,
        })
            .then((res) => {
                if (res.message === "Logged out successfully") {
                    // Clear user data in Redux store and session storage
                    navigate("/"); // Redirect to homepage
                    dispatch(setLogged(false));
                    dispatch(setUserData({}));
                    sessionStorage.setItem('loginU', false);
                    sessionStorage.setItem('userData', null);
                }
            })
            .catch((err) => {
                console.error("Logout failed:", err);
            });
    };

    return (
        <>
            <header>
                <div className="container_header">
                    {/* Left section with sidebar toggle and logo */}
                    <div className="partOne">
                        <div
                            className="button_navBarTablet"
                            onClick={() => setIsOpenMenu(true)}
                            aria-label="Open Mobile Menu"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div
                            className="button_navBar"
                            onClick={() => setSidebarActive()}
                            aria-label="Toggle Sidebar"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className="logo">
                            <h1>Scala 3D</h1>
                        </div>
                    </div>

                    {/* Right section with user info and logout */}
                    <div className="partTwo">
                        <div className="userIcon">
                            <div className="image">
                                <img src={profile_icon} alt="User Profile" />
                            </div>
                            <p>{loginUser?.userData?.name || "Guest"}</p>
                        </div>
                        <button onClick={logout}>
                            <p>Logout</p>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </button>
                    </div>

                    {/* Mobile responsive header */}
                    <div className="mobileResponsive">
                        <div className="logo">
                            <h1>Scala 3D</h1>
                        </div>
                        <div
                            className="button_navBar"
                            onClick={() => setIsOpenMenu(true)}
                            aria-label="Open Mobile Menu"
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <MenuMobile isOpenMenu={isOpenMenu} closeModalMenu={() => setIsOpenMenu(false)} />
        </>
    );
};

export default Header;
