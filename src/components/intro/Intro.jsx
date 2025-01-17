import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7+ months</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>9+ Projects </small>
            </article>
          </div>
          <p>Hello! I'm Adarsh Patil, as a passionate<strong> MERN fullstack developer </strong>, I bring dynamic energy and innovative thinking to every project. I thrive on building seamless web applications, from dynamic frontends to robust backends. With a keen eye for design and a strong foundation in <strong>MongoDB, Express.js, React, and Node.js,</strong> I excel in crafting user-friendly, efficient solutions. My portfolio showcases my ability to transform ideas into reality, leveraging the power of fullstack development to deliver impactful results. Let's collaborate to create exceptional web experiences that captivate and engage users!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Intro