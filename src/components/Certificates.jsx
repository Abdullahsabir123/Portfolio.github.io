import React from 'react';

const Certificates = () => {
  return (
    <section className="certificates fade-in">
      <h1>Certificates</h1>
      <p>Here are the certifications I have earned:</p>
      <div className="certificate-list">
        <div className="certificate">
          <h3 className='text-center'>MERN Stack Certification</h3>
          <p>
            <strong>Continue</strong> at <strong>BMJ Digital Education (Youth Teach Campus)</strong>.
            This course covered all aspects of MERN Stack development, including MongoDB for database management, ExpressJS for building backend APIs, ReactJS for creating dynamic front-end interfaces, and NodeJS for executing JavaScript on the server-side. It taught how to integrate these powerful technologies to build efficient full-stack web applications.
          </p>
        </div>
        <div className="certificate">
          <h3 className='text-center'>Cloud Native Generative AI Engneering</h3>
          <p>
            <strong>Continue</strong> at <strong>Governer House</strong>.
            This course covered all aspects of Cloud Native Generative AI Engneering, including Typescript, NextJS, React, Tailwind CSS, LandGraph, LandChain,GraphRag, Neo4j, Pinecone,     Transformers, Python, UV, FastAPI, Neo4j/GQL, Kafka, Docker, Docker Compose, Kubernetes, Serverless Container, Github Actions, Terraform, Ray, Robotic Operating System (ROS 2), Nvidia Isaac ,Nvidia Project Groot,
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
