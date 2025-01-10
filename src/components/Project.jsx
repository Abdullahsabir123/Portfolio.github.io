import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function BasicExample() {
  return (
    <>
      <section className="project fade-in">
        <h1 className="text-center">Projects</h1>
        <div className="container d-flex flex-wrap justify-content-around">

          {/* Card-1 */}
          <Card
            style={{ width: "18rem" }}
            className="card text-center mt-5 margin-top"
          >
            
            <Card.Body>
              <Card.Title>Netflix</Card.Title>
              <Card.Text>
              This is a Netflix landing page, marking the inception of my MERN-stack web development journey. 
              </Card.Text>
              <a
                href="https://zingy-pothos-1ec101.netlify.app "
                target="_blank"
              >
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>

          {/* Card-2 */}
          <Card
            style={{ width: "18rem" }}
            className="card text-center mt-5 margin-top"
          >
            <Card.Body>
              <Card.Title>Resume Builder</Card.Title>
              <Card.Text>
                I participated in a resume-building hackathon, where I developed
                an editable and dynamic resume template.
              </Card.Text>
              <a
                href="https://resumebuilder-editible-resume.netlify.app"
                target="_blank"
              >
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>

          {/* Card-3 */}
          <Card
            style={{ width: "18rem" }}
            className="card text-center mt-5 margin-top"
          >
            <Card.Body>
              <Card.Title>Timer</Card.Title>
              <Card.Text>
                I built a stopwatch application using JavaScript, which was my
                first major project in the language and provided valuable
                experience.
              </Card.Text>
              <a
                href="https://j-s-stop-watch.netlify.app"
                target="_blank"
              >
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>

          {/* Card-4 */}
          <Card
            style={{ width: "18rem" }}
            className="card text-center mt-5 margin-top"
          >
            <Card.Body>
              <Card.Title>Template</Card.Title>
              <Card.Text>
                I developed a non-responsive landing page template using
                Bootstrap, which enhanced my practical experience with the
                framework.
              </Card.Text>
              <a
                href="https://bootstrap-made-templete.netlify.app"
                target="_blank"
              >
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>

          {/* Card-5 */}
          <Card
            style={{ width: "18rem" }}
            className="card text-center mt-5 margin-top"
          >
            <Card.Body>
              <Card.Title>Home-Brandstore</Card.Title>
              <Card.Text>
                Home-Brandstore is an e-commerce website that I developed as my
                final and largest project, using HTML, CSS, and JavaScript.
              </Card.Text>
              <a href="https://home-brandstore.netlify.app" target="_blank">
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>

          {/* Card-6 */}
          <Card
            style={{ width: "18rem" }}
            className="card text-center mt-5 margin-top"
          >
            <Card.Body>
              <Card.Title>Transport-web</Card.Title>
              <Card.Text>
              This is my first non-responsive React project, where I applied core concepts like components and props.
              </Card.Text>
              <a href="https://transport-app1st.netlify.app" target="_blank">
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>

          {/* Card-7 */}
          <Card
            style={{ width: "18rem" }}
            className="card text-center mt-5 margin-top"
          >
            <Card.Body>
              <Card.Title>E-com</Card.Title>
              <Card.Text>
              This is my second non-responsive React project, where I applied core concepts like components, useState, useEffect, and props.
              </Card.Text>
              <a href="https://fabulous-kitsune-524093.netlify.app" target="_blank">
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>
          
          {/* card-8 */}
          <Card
            style={{ width: "18rem" }}
            className="card text-center mt-5 margin-top"
          >
            <Card.Body>
              <Card.Title>Stop-watch</Card.Title>
              <Card.Text>
              This is my third React project, where I applied core concepts like components, useState, useEffect, setTimeout, props, and additional functionality.
              </Card.Text>
              <a href="https://stopwatch-1st.netlify.app" target="_blank">
                <Button variant="primary">Visit site</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </section>
    </>
  );
}

export default BasicExample;
