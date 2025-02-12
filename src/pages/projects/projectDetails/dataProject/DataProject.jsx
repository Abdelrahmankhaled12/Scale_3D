// Importing required dependencies and styles
import { useState } from "react";
import Images from "./images/Images";
import "./style.scss";
import VisualizationData from "./viualizationData/VisualizationData";
import image from "../../../../assets/image1.png";

const DataProject = () => {
  // State to track the currently selected tab
  const [selectedTab, setSelectedTab] = useState("Images");

  // State to track the currently active image
  const [imageActive, setImageActive] = useState(image);

  return (
    <div className="dataProject">
      {/* Conditionally render content based on the selected tab */}
      {selectedTab === "Images" ? (
        <div className="grid">
          {/* Visualization Component */}
          <VisualizationData
            selectedTab={selectedTab}
            setSelected={setSelectedTab} // Function to change the selected tab
            imageActive={imageActive} // Currently active image
          />
          {/* Images Component */}
          <Images setImageActive={(value) => setImageActive(value)} /> {/* Updates the active image */}
        </div>
      ) : (
        <VisualizationData
          selectedTab={selectedTab}
          setSelected={setSelectedTab} // Function to change the selected tab
          imageActive={imageActive} // Currently active image
        />
      )}
    </div>
  );
};

export default DataProject;
