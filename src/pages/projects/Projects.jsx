// Importing required dependencies and styles
import { useState } from 'react';
import { StructurePage } from '../../components'; // Layout wrapper component
import AddProject from './addProject/AddProject';
import './style.scss'; // Component-specific styles
import TableShowProjects from './tableShowProjects/TableShowProjects'; // Table for displaying projects

/**
 * Projects Component
 * This component displays a list of projects using the TableShowProjects component.
 */

const Projects = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <StructurePage>
        <div className="projects">
          <div className="container">
            {/* Projects Table */}
            <div className="div">
              <TableShowProjects setIsOpen={() => setIsOpen(true)} />
            </div>
          </div>
        </div>
      </StructurePage>
      <AddProject isOpen={isOpen} closeModel={() => setIsOpen(false)} />
    </>


  );
};

export default Projects;
