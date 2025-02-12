import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // FontAwesome icon component
import { faXmark, faFileExport } from '@fortawesome/free-solid-svg-icons'; // Required icons
import { useEffect, useState } from 'react';

const ProjectStatistics = ({ isOpen, closeModel, title }) => {
    // Fallback if items or title are not provided
    if (!title) {
        return null;
    }

    const [selectedValue, setSelectedValue] = useState(title)

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
        { title: "darion", number: "12" },
        { title: "john", number: "15" },
    ];

    const ITEMS_TOP_COUNTRIES = [
        { title: "USA", number: "125" },
        { title: "Canada", number: "50" },
        { title: "UK", number: "30" },
        { title: "Australia", number: "10" },
        { title: "Egypt", number: "5" },
        { title: "ARG", number: "2" },
    ];

    useEffect(() => {
        setSelectedValue(title)
    },[title])

    return (
        <div className={isOpen ? "projectStatistics" : "projectStatistics hide"}>
            <div className="closeModel" onClick={() => closeModel()}></div>
            <div className="projectStatisticsContent">
                {/* Header Section */}
                <div className="top">
                    <h3>Project Statistics</h3>
                    <button
                        className="button_close"
                        onClick={closeModel}
                        aria-label="Close Statistics Modal"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                {/* Body Section */}
                <div className="body">
                    <h4>Projects by:</h4>
                    <div className="data">
                        {/* Table Header */}
                        <div className="top_table">
                            <select name="" id="" onChange={(e) => setSelectedValue(e.target.value)}>
                                <option value="Top Companies" selected={selectedValue === "Top Companies"} >Top Companies</option>
                                <option value="Users by lowest quality" selected={selectedValue === "Users by lowest quality"} >Users by lowest quality</option>
                                <option value="Top countries" selected={selectedValue === "Top countries"} >Top countries</option>
                            </select>
                            <p>Projects</p>
                        </div>

                        {/* Data Rows */}
                        <div className="items">

                            {
                                selectedValue === "Top Companies" ? (
                                    ITEMS_TOP_COMPANIES.map((item, index) => (
                                        <div className="item" key={index}>
                                            <p>{item.title}</p>
                                            <p>{item.number}</p>
                                        </div>
                                    ))
                                ) : selectedValue === "Top countries" ? (
                                    ITEMS_TOP_COUNTRIES.map((item, index) => (
                                        <div className="item" key={index}>
                                            <p>{item.title}</p>
                                            <p>{item.number}</p>
                                        </div>
                                    ))
                                ) : (
                                    ITEMS_TOP_USERS.map((item, index) => (
                                        <div className="item" key={index}>
                                            <p>{item.title}</p>
                                            <p>{item.number}</p>
                                        </div>
                                    ))
                                )
                            }
                        </div>

                        {/* Generate Report Button */}
                        <button aria-label="Generate Project Report">
                            <FontAwesomeIcon icon={faFileExport} />
                            <p>Generate Report</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStatistics;
