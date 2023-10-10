import React from 'react'; 
import SingleProjectCard from './Project'
import portfolio from '../assets/portfolio.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

function Portfolio () {  

    return (
        <section className="container">
          <div className="project">
            <h2 className="top-title">Full-stack Web Development Bootcamp Portfolio</h2>
            <hr></hr>
          </div>

          <Wrapper id="card-data">
            {portfolio.map((project) => (
              <SingleProjectCard key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} technologies={project.technologies}/>
            ))}
          </Wrapper>
        </section>
    
    );
  }

export default Portfolio;