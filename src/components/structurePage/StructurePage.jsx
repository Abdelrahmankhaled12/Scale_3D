// Importing required dependencies and components
import React, { useState } from 'react';
import Effect from '../effect/Effect'; // Wrapper for animations or visual effects
import Header from '../header/Header'; // Header component
import SideBar from '../sideBar/SideBar'; // Sidebar navigation component
import './style.scss'

/**
 * StructurePage Component
 * This component defines the layout structure for pages with a header, sidebar, and content area.
 * It uses children prop to render dynamic page content within the layout.
 */

const StructurePage = ({ children }) => {

    const [sidebarActive, setSidebarActive] = useState(true);

    return (
        <Effect>
            <div className="structurePage">
                {/* Page Header */}
                <Header sidebarActive={sidebarActive} setSidebarActive={() => setSidebarActive(!sidebarActive)} />

                {/* Main Layout Grid */}
                <div
                    className={sidebarActive ? "grid sidebar_active" : "grid"}
                >
                    {/* Sidebar */}
                    <SideBar sidebarActive={sidebarActive} />

                    {/* Dynamic Content */}
                    <div className="contentPage">
                        {children}
                    </div>
                </div>
            </div>
        </Effect>
    );
};

export default StructurePage;
