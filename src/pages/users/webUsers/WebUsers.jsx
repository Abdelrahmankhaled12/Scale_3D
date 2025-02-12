// Importing required dependencies and styles
import React, { useState } from 'react';
import './style.scss';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons'; // Icons for actions
import person from '../../../assets/person.png';
import person2 from '../../../assets/person2.png';
import person3 from '../../../assets/person3.png';
import person4 from '../../../assets/person4.png';
import person5 from '../../../assets/person5.png';
import icon_add from '../../../assets/Shrink.png';
import Swal from 'sweetalert2/dist/sweetalert2.js'; // SweetAlert2 for styled alerts

/**
 * Static list of users and their details for demonstration purposes
 */

const items = [
    {
        img: person,
        name: "Matthew Wilson",
        role: "Super Admin",
        account_created_date: "06-03-2021",
        role_created_date: "06-03-2021",
    },
    {
        img: person2,
        name: "Sarah Martinez",
        role: "Admin",
        account_created_date: "06-03-2021",
        role_created_date: "06-03-2021",
    },
    {
        img: person3,
        name: "Christopher Brown",
        role: "Admin",
        account_created_date: "18-03-2021",
        role_created_date: "20-03-2021",
    },
    {
        img: person4,
        name: "Emily Thompson",
        role: "Manager",
        account_created_date: "11-06-2021",
        role_created_date: "11-06-2021",
    },
    {
        img: person5,
        name: "David Smith",
        role: "Manager",
        account_created_date: "25-06-2021",
        role_created_date: "28-06-2021",
    },
];

/**
 * WebUsers Component
 * Displays a collapsible group of web users with their details and actions.
 */

const WebUsers = () => {
    const [open, setOpen] = useState(true); // State to toggle collapse

    // Handle collapse toggle
    const handleClick = () => {
        setOpen(!open);
    };

    const deleteProject = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            iconColor:"#0003",
            showCancelButton: true,
            confirmButtonColor: "#000000",
            cancelButtonColor: "#0003",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                    iconColor:"#0003",
                    confirmButtonColor: "#000000",
                })
            }
        });
    }


    return (
        <div className="webUsers">
            {/* Collapsible List Header */}
            <ListItemButton className="buttonList" onClick={handleClick}>
                <ListItemText primary="Group 1 - Web users" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* Collapsible Content */}
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {/* User Table */}
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Account Created Date</th>
                                <th>Role Created Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index}
                                style={(index + 1) % 2 !== 0 ?{backgroundColor: 'rgba(238, 238, 238, 0.5)'} : {}}
                                >
                                    <td>
                                        <div className="name">
                                            <div className="icon">
                                                <img src={item.img} alt={`${item.name}`} />
                                            </div>
                                            <p>{item.name}</p>
                                        </div>
                                    </td>
                                    <td>{item.role}</td>
                                    <td>{item.account_created_date}</td>
                                    <td>{item.role_created_date}</td>
                                    <td>
                                        <div className="buttons">
                                            <button title="Edit User">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button title="Delete User" onClick={() => deleteProject()}>
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Footer Section */}
                    <div className="footer">
                        <div className="add">
                            <button title="Add New User">
                                <img src={icon_add} alt="Add Icon" />
                            </button>
                        </div>
                    </div>
                </List>
            </Collapse>
        </div>
    );
};

export default WebUsers;
