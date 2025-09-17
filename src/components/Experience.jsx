import React from 'react';

const Experience = () => {
  const experiences = [
    {
      date: "July 2025 – August 2025",
      title: "Transcriptionist and QA",
      company: "Appen",
      description: "Transcribed and reviewed over 5,000 audio files with 95%+ accuracy. Conducted quality assurance on transcripts and utilized Automatic Speech Recognition (ASR) tools with manual corrections."
    },
    {
      date: "May 2024 – July 2025",
      title: "Data Annotator and AI Trainer",
      company: "Appen",
      description: "Used RLHF and SFT to train AI Large Language Models through 500+ optimized prompts. Audited and fact-checked 1000+ AI model outputs to improve performance and accuracy."
    },
    {
      date: "Feb 2025 – Aug 2025",
      title: "Event Coordinator",
      company: "Sunway Student Representative Council",
      description: "Coordinated various cultural and technical events, managed logistics, and enhanced event planning skills through hands-on experience in organizing large-scale activities."
    }
  ];

  const education = [
    {
      date: "2024 – 2028 (Expected)",
      title: "Bachelor's in Computer Science",
      company: "Sunway College Kathmandu (Birmingham University)",
      description: "Specialization in Artificial Intelligence and Machine Learning. Focus on advanced AI concepts, data science, and practical applications of machine learning technologies."
    },
    {
      date: "Graduated 2024",
      title: "High School Diploma",
      company: "Global College of Management",
      description: "Commerce stream with strong foundation in mathematics and analytical thinking, preparing for computer science studies."
    }
  ];

  const certifications = [
    "Harvard's CS50P - Introduction to Programming with Python",
    "Understanding Prompt Engineering for AI Systems",
    "Introduction to Git Version Control",
    "AI Ethics and Responsible AI Development"
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience & Education</h2>
        
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#c084fc' }}>Professional Experience</h3>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-date">{exp.date}</div>
                  <h4 className="timeline-title">{exp.title}</h4>
                  <div className="timeline-company">{exp.company}</div>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#c084fc' }}>Education</h3>
          <div className="experience-timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-date">{edu.date}</div>
                  <h4 className="timeline-title">{edu.title}</h4>
                  <div className="timeline-company">{edu.company}</div>
                  <p>{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#c084fc' }}>Certifications</h3>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            {certifications.map((cert, index) => (
              <div key={index} style={{ 
                background: 'linear-gradient(135deg, #1e1b4b, #581c87)', 
                padding: '1.5rem', 
                marginBottom: '1rem', 
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(139, 92, 246, 0.2)',
                borderLeft: '4px solid #8b5cf6',
                border: '1px solid rgba(192, 132, 252, 0.2)'
              }}>
                <p style={{ margin: 0, fontWeight: '500', color: '#e5e7eb' }}>{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;