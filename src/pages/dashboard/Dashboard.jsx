// Importing required dependencies and styles
import React, { useState } from 'react';
import { ProjectStatistics, StructurePage } from '../../components'; // Layout wrapper
import './style.scss'; // Component-specific styles
import BoxChart from './boxChart/BoxChart'; // Chart component for displaying box data
import TotalProjects from './totalProjects/TotalProjects'; // Component showing total projects
import WifiAvailablity from './wifiAvailablity/WifiAvailablity'; // Component showing WiFi availability
import TopUsers from './topUsers/TopUsers'; // Component displaying top users

// Static data for top charts
const ITEMS_TOP_COMPANIES = [
  { title: "Ltd #1", number: "43" },
  { title: "Ltd #2", number: "35" },
  { title: "Ltd #3", number: "21" },
  { title: "Ltd #4", number: "11" },
];

const ITEMS_TOP_USERS = [
  { title: "Joe", number: "6" },
  { title: "Jack", number: "7" },
  { title: "William", number: "9" },
  { title: "Harris", number: "10" },
];

const ITEMS_TOP_COUNTRIES = [
  { title: "USA", number: "125" },
  { title: "Canada", number: "50" },
  { title: "UK", number: "30" },
  { title: "Australia", number: "10" },
];

/**
 * Dashboard Component
 * Displays an overview of various metrics including top countries, companies, users, and project stats.
 */
const Dashboard = () => {
  // State for controlling the modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // State for managing details displayed in the modal
  const [details, setDetails] = useState({
    items: [], // Items to display in the modal
    title: "", // Title of the modal
  });

  return (
    <>
      <StructurePage>
        <div className="dashboard">
          <div className="container">
            {/* Grid layout for dashboard sections */}
            <div className="grid">
              <div>
                {/* Section for total projects */}
                <TotalProjects />
              </div>
              <div className="partTwo">
                {/* Top Companies Chart */}
                <BoxChart
                  setIsOpen={() => setIsOpen(true)}
                  setDetails={(value) => setDetails(value)}
                  items={ITEMS_TOP_COMPANIES}
                  title="Top Companies"
                />
                {/* Users by Lowest Quality Chart */}
                <BoxChart
                  setIsOpen={() => setIsOpen(true)}
                  setDetails={(value) => setDetails(value)}
                  items={ITEMS_TOP_USERS}
                  title="Users by Lowest Quality"
                  reverse={true}
                />
              </div>
            </div>
            <div className="grid">
              {/* Left section: Top Users */}
              <div>
                <TopUsers />
              </div>
              {/* Right section: WiFi availability and top countries */}
              <div className="partTwo">
                <WifiAvailablity />
                <BoxChart
                  setIsOpen={() => setIsOpen(true)}
                  setDetails={(value) => setDetails(value)}
                  items={ITEMS_TOP_COUNTRIES}
                  title="Top Countries"
                />
              </div>
            </div>
          </div>
        </div>
      </StructurePage>
      {/* Modal for displaying project statistics */}
      <ProjectStatistics
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        title={details.title}
      />
    </>
  );
};

export default Dashboard;
