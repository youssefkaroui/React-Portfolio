import React from "react";

function Resume() {
  return (
    <section className="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div className="mt-5">
          <h2 className="top-title">Skills</h2>
          <ul>
            <li>
              Main competencies in customer service, team building and team management. 
            </li>
          </ul>
          <div className="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML5, CSS (Bootstrap, HandleBars,Bulma, Chakra UI), JavaScript, jQuery, React.js, IndexedDB,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, MongoDB Atlas, NoSQL, APIs, React, PWA, Appollo, GraphQL .
            </li>
          </ul>
        </div>
      </div>

          <p className="mt-5">
            <a href="https://www.linkedin.com/in/youssef-karoui-930877121/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/youssefkaroui/react-portfolio/raw/main/src/assets/Youssef's resume.pdf"
            className="link"
          >
            Download my resume
          </a>
        </div>
      </div>

      
    </section>
  );
}

export default Resume;