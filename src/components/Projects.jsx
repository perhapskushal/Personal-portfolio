import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Inkvision OCR",
      description: "An advanced Nepali Optical Character Recognition system that converts handwritten and printed text into digital format. Features real-time text detection, multi-language support, and high accuracy text extraction using deep learning models.",
      techStack: ["Python", "OpenCV", "TensorFlow", "OCR", "Machine Learning"],
      repoLink: "https://github.com/perhapskushal/Inkvision_OCR"
    },
    {
      name: "Smart Home Heating System",
      description: "An intelligent IoT-based heating control system that optimizes energy consumption while maintaining comfortable temperatures. Features automated scheduling, remote control capabilities, and energy usage analytics.",
      techStack: ["Python", "IoT", "Raspberry Pi", "Machine Learning", "API Development"],
      repoLink: "https://github.com/perhapskushal/Smart-home-heating-system"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;