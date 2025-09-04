import React from 'react';

// Using your Cloudinary URLs within the categorized structure.
const categorizedSkills = {
  "Frontend": [
    { name: 'HTML', iconUrl: 'https://res.cloudinary.com/dexgotdr4/image/upload/v1756893454/html5-original_pldgjb.svg' },
    { name: 'CSS', iconUrl: 'https://res.cloudinary.com/dexgotdr4/image/upload/v1756893485/css3-original_eow9i8.svg' },
    { name: 'JavaScript', iconUrl: 'https://res.cloudinary.com/dexgotdr4/image/upload/v1756893525/javascript-original_z7flc1.svg' },
    { name: 'React', iconUrl: 'https://res.cloudinary.com/dexgotdr4/image/upload/v1756893545/react-original_ys7gpo.svg' },
    // { name: 'Responsive Design', iconUrl: 'https://www.svgrepo.com/show/443319/responsive-design-tablet-mobile-desktop.svg' } // Re-added this key skill
  ],
  "Backend": [
    { name: 'Python', iconUrl: 'https://res.cloudinary.com/dexgotdr4/image/upload/v1756893636/python-original_mwhcol.svg' },
    { name: 'Laravel', iconUrl: 'https://res.cloudinary.com/dexgotdr4/image/upload/v1756893851/OIP-removebg-preview_ghwb02.png' },
    // Corrected the C++ icon URL for you. The previous one was a duplicate of SQL.
    { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  ],
  "Database": [
    { name: 'SQL', iconUrl: 'https://res.cloudinary.com/dexgotdr4/image/upload/v1756893589/mysql-original-wordmark_hwrpsb.svg' }
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="about-section section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        {/* Loop through each category and its skills */}
        {Object.entries(categorizedSkills).map(([category, skills]) => (
          <div key={category}>
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill">
                  <img src={skill.iconUrl} alt={`${skill.name} logo`} className="skill-icon" />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;