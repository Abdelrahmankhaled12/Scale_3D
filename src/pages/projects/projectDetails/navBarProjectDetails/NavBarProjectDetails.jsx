// Importing required dependencies and styles
import './style.scss';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCheck } from '@fortawesome/free-solid-svg-icons';

const NavBarProjectDetails = ({ selectedTab, setSelectedTab }) => {
    // Available action options
    const options = ['Change status', 'Process Images', 'Export 3D Model', 'Sync with Salesforce'];

    // States
    const [menuOpen, setMenuOpen] = useState(false); // Tracks menu open/close state
    const anchorRef = useRef(null); // Reference for the actions menu button
    const [selectedAction, setSelectedAction] = useState(null); // Tracks the selected action from the menu

    // Extract project number from URL query parameters
    const location = useLocation();
    const projectNumber = new URLSearchParams(location.search).get('number') || 'N/A';

    // Determines the product type based on the project number
    const productType = projectNumber === 'SCA002002' ? 'Synergy Straight' : 'Infinity Curved';

    // Toggles the visibility of the menu
    const handleToggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    // Closes the menu when clicking outside
    const handleMenuClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setMenuOpen(false);
    };

    // Handles selection of a menu item
    const handleMenuSelect = (index) => {
        setSelectedAction(options[index]);
        setMenuOpen(false);
    };

    return (
        <div className="navBarProjectDetails">
            {/* Project Details Section */}
            <div className="name">
                Project Number {projectNumber}
                {selectedTab === 'Data' && ' - (85% Good Images)'}
                {selectedTab !== 'Data' && (
                    <ul>
                        <li>Product Type - {productType}</li>
                        <li>% Good Images - 85</li>
                    </ul>
                )}
            </div>

            {/* Tab Navigation */}
            <div className="switch">
                <div className="switchingTabs">
                    <div className="tabItems">
                        <span
                            className={selectedTab === 'Data' ? 'tabItem active' : 'tabItem'}
                            onClick={() => setSelectedTab('Data')}
                        >
                            Data
                        </span>
                        <span
                            className={selectedTab === 'Details' ? 'tabItem active' : 'tabItem'}
                            onClick={() => setSelectedTab('Details')}
                        >
                            Details
                        </span>
                    </div>
                </div>
            </div>

            {/* Actions Menu */}
            <div>
                <ButtonGroup variant="contained" ref={anchorRef} aria-label="Actions Menu">
                    <Button onClick={handleToggleMenu} className="actionButton">
                        <FontAwesomeIcon icon={faBars} />
                        Actions
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper
                    open={menuOpen}
                    anchorEl={anchorRef.current}
                    role="menu"
                    transition
                    disablePortal
                    style={{ zIndex: 1 }}
                >
                    {({ TransitionProps }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: 'center top',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleMenuClose}>
                                    <MenuList autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                selected={selectedAction === option}
                                                onClick={() => handleMenuSelect(index)}
                                                className="itemLi"
                                            >
                                                {selectedAction === option && <FontAwesomeIcon icon={faCheck} />}
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
};

export default NavBarProjectDetails;
