import React from 'react';

const Skills = () => {
  const technicalSkills = [
    "Python Programming",
    "Web Development",
    "C Programming",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Prompt Engineering",
    "LLM Training",
    "Data Annotation",
    "Git Version Control",
    "OCR Technology",
    "IoT Development"
  ];

  const softSkills = [
    "Leadership",
    "Communication",
    "Team Collaboration",
    "Problem Solving",
    "Critical Thinking",
    "Project Management",
    "Quality Assurance",
    "Event Organization"
  ];

  const languages = [
    "Nepali (Native)",
    "English (Fluent)",
    "Hindi (Fluent)",
    "Newari (Conversational)"
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        
        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2c3e50' }}>Technical Skills</h3>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <h4>{skill}</h4>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2c3e50' }}>Soft Skills</h3>
          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-item">
                <h4>{skill}</h4>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#2c3e50' }}>Languages</h3>
          <div className="skills-grid">
            {languages.map((language, index) => (
              <div key={index} className="skill-item">
                <h4>{language}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;