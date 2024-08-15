import React from 'react';

const ResumeBasic = () => {
  return (
    <div className="resumeBasic">
      <div className="left">
        <header className="hed">
          <div className="pro">
            <img src="assets/images/avatar1.png" alt="" className="img-avater" />
          </div>
        </header>

        <section className="deet">
          <h1>Shubhi Dev</h1>
          <p>Web Developer</p>
          <address>
            <p>Email: shubhi.dev@example.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Street, City, Country</p>
          </address>
        </section>

        <section className="educat">
          <h2>Education</h2>
          <div className="educat-item">
            <h3>University Name</h3>
            <p>Bachelor of Science in Computer Science</p>
            <p>Graduated: May 2020</p>
          </div>
        </section>

        <section className="exper">
          <h2>Experience</h2>
          <div className="exper-item">
            <h3>Company Name</h3>
            <p>Position: Web Developer</p>
            <p>Duration: June 2020 - Present</p>
            <ul>
              <li>Developed and maintained web applications using React.js</li>
              <li>Collaborated with team members to deliver projects on time</li>
              <li>Implemented responsive designs to ensure compatibility across devices</li>
            </ul>
          </div>
        </section>

        <footer>
          <p>References available upon request</p>
        </footer>
      </div>
    </div>
  );
}

export default ResumeBasic;
