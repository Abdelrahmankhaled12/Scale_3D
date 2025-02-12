// Importing required dependencies and styles
import { useEffect, useState } from "react";
import { Animation, StructurePage } from "../../../components";
import DetailsPR from "./details/DetailsPR";
import NavBarProjectDetails from "./navBarProjectDetails/NavBarProjectDetails";
import "./style.scss";
import DataProject from "./dataProject/DataProject";
import { useLocation } from "react-router-dom";
import DetailsSy from "./details/DetailsSy";

const ProjectDetails = () => {
    // State to track the selected tab
    const [selectedTab, setSelectedTab] = useState("Data");

    // State to handle loading animation
    const [isLoading, setIsLoading] = useState(false);

    // Hook to retrieve the query parameter `number` from the URL
    const location = useLocation();
    const projectNumber = new URLSearchParams(location.search).get("number");

    // Effect to handle loading animation whenever the selected tab changes
    useEffect(() => {
        startLoadingAnimation();
    }, [selectedTab]);

    // Function to start and stop the loading animation
    const startLoadingAnimation = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Stops loading after 1 second
    };

    // Function to render the content based on the selected tab and project number
    const renderContent = () => {
        if (selectedTab === "Data") {
            return <DataProject />;
        }
        return projectNumber === "SCA002002" ? <DetailsSy /> : <DetailsPR />;
    };

    return (
        <StructurePage>
            <div className="projectDetails">
                <div className="container">
                    {/* Navigation bar for project details */}
                    <NavBarProjectDetails
                        selectedTab={selectedTab}
                        setSelectedTab={setSelectedTab}
                    />
                    {/* Loading animation or main content */}
                    {isLoading ? (
                        <div className="loading">
                            <Animation />
                        </div>
                    ) : (
                        renderContent()
                    )}
                </div>
            </div>
        </StructurePage>
    );
};

export default ProjectDetails;
