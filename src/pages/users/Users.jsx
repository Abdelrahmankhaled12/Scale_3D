// Importing required dependencies and styles
import './style.scss';
import WebUsers from './webUsers/WebUsers'; // Web Users component
import MobileUsers from './mobileUsers/MobileUsers'; // Mobile Users component
import { StructurePage } from '../../components'; // Layout structure component

/**
 * Users Component
 * This component serves as the main page for managing users, including web and mobile users.
 */

const Users = () => {
    return (
        <StructurePage>
            <div className="users">
                <div className="container">
                    <div className="titlePage">
                        <div className="title">
                            <h2>Manage Users</h2>
                            <p>Administer and oversee user accounts and permissions.</p>
                        </div>
                    </div>
                    <div className="div">
                        {/* Web Users Section */}
                        <WebUsers />
                    </div>
                    <div className="div">
                        {/* Mobile Users Section */}
                        <MobileUsers />
                    </div>

                </div>
            </div>
        </StructurePage>
    );
};

export default Users;
