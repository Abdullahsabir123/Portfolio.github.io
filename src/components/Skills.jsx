import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGitAlt, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiTypescript, SiNextdotjs } from 'react-icons/si';

const Skills = () => {
  return (
    <section className="skills fade-in">
      <h1>Skills</h1>
      <p>I have 13 months of dedicated learning experience in MERN-stack web development, focusing on modern technologies and full-stack development.</p>
      <div className="skills-icons">
        <FaHtml5 className="icon html" title="HTML5" />
        <FaCss3Alt className="icon css" title="CSS3" />
        <FaJsSquare className="icon js" title="JavaScript" />
        <FaReact className="icon react" title="ReactJS" />
        <FaNode className="icon node" title="NodeJS" />
        <FaBootstrap className="icon bootstrap" title="Bootstrap" />
        <SiMongodb className="icon mongodb" title="MongoDB" />
        <SiExpress className="icon express" title="ExpressJS" />
        <SiTailwindcss className="icon tailwind" title="Tailwind CSS" />
        <FaGitAlt className="icon git" title="GitHub" />
        
        {/* Custom colors for TypeScript and Next.js icons */}
        <SiTypescript className="icon typescript" title="TypeScript" style={{ color: '#3178C6' }} />
        <SiNextdotjs className="icon nextjs" title="Next.js"/>
      </div>
    </section>
  );
};

export default Skills;
