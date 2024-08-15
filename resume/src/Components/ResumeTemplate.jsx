import React from 'react';


const ResumeTemplate = () => {
  return (
    <div className="resumeTemplate">
      <div className="heads">
        <div className="profile">
        <img src="assets/images/avatar2.png" alt="" className="img-avater" />
        </div>
        <div className="personal-info">
          <h1>John Doe</h1>
          <p>Computer Science Student</p>
          <p>Email: john.doe@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 College Street, City, Country</p>
        </div>
      </div>

      <div className="section">
        <h2>Education</h2>
        <div className="education-item">
          <h3>University Name</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>Expected Graduation: May 2024</p>
        </div>
      </div>

      <div className="section">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Programming Languages: JavaScript, Python, Java</li>
          <li>Web Development: HTML, CSS, React.js</li>
          <li>Database Management: SQL, MongoDB</li>
          <li>Version Control: Git, GitHub</li>
        </ul>
      </div>

      <div className="section">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Project Title</h3>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Technologies Used: React.js, Node.js, MongoDB</p>
        </div>
      </div>

      <div className="section">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Company Name</h3>
          <p>Position: Web Development Intern</p>
          <p>Duration: June 2023 - August 2023</p>
          <ul>
            <li>Assisted in building responsive web applications using React.js</li>
            <li>Worked collaboratively in an Agile environment to meet project milestones</li>
            <li>Gained practical experience with version control using Git and GitHub</li>
          </ul>
        </div>
      </div>

      <footer>
        <p>References available upon request</p>
      </footer>
    </div>
  );
}

export default ResumeTemplate;
