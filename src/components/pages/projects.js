import { useState } from "react";
import projects from "../utils/projectsData";
import "../styles/projects.css";
import { AiOutlineLink } from "react-icons/ai";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModel = (project) => setSelectedProject(project);
  const closeModel = () => setSelectedProject(null);

  return (
    <>
        <div className="projektid-container">
          <p className="no-select projects-h1">PROJECTS</p>
          <div className="projektid-grid-container">
            {projects.map((project) => (
                <div
                    key={project.id}
                    className="projektid-grid-item no-select"
                    onClick={() => openModel(project)}>
                    <p>{project.title}</p>
                    <img src={project.image} alt={project.title} className="grid-item-image" />
                </div>
            ))}
          </div>
      </div>

      {selectedProject && (
        <div className="model-overlay" onClick={closeModel}>
          <div className="model-content" onClick={(e) => e.stopPropagation()}>
            <div className="model-grid">
              <div className="model-left">
                <img src={selectedProject.image} alt="Project preview" />
                {selectedProject.live && (
                    <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkBtton"
                    >
                        <AiOutlineLink size="30"/>
                    </a>
                )}
              </div>
              <div className="model-right">
                <h2>{selectedProject.title}</h2>
                <p><strong>CATEGORY:</strong> {selectedProject.category}</p>
                <p><strong>RELEASE DATE:</strong> {selectedProject.releaseDate}</p>
                <p>{selectedProject.description}</p>
                <div className="model-tags">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                
              </div>
              
            </div>
            <div className="model-gallery">
              {selectedProject.gallery.map((img, i) => (
                <img key={i} src={img} alt={`Preview ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="projects_footer">
        <p>&copy; 2025 All rights reserved</p>
      </footer>
    </>
  );
};

export default Projects;
