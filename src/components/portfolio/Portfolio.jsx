import React from 'react';
import IMG1 from '../../assets/IMG1.png';
import IMG2 from '../../assets/IMG2.png';
import IMG3 from '../../assets/IMG3.png';
import IMG4 from '../../assets/IMG4.png';
import IMG5 from '../../assets/IMG5.png';
import IMG6 from '../../assets/IMG6.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'LUXORA - MERN Ecommerce App',
      img: IMG1,
      description:
        'Fully responsive MERN Ecommerce web application',
      technologies: 'React, NodeJS, MongoDB',
      link: 'https://github.com/AdarshRpatil/LUXORA-E-COMMERCE',
      github: 'https://github.com/AdarshRpatil/LUXORA-E-COMMERCE',
    },
    {
      id: 2,
      title: 'DreamStay - Hotel booking app',
      img: IMG2,
      description:
        'Fully responsive Hotel booking website',
      technologies: 'React, Springboot, MySQL',
      link: 'https://github.com/AdarshRpatil/DreamStay',
      github: 'https://github.com/AdarshRpatil/DreamStay',
    },
    {
      id: 3,
      title: 'LearnPro - E Learning Platform',
      img: IMG3,
      description:
        'Fully functional E-Learning-Platform site for students',
      technologies: 'Angular JS, Springboot, MySQL',
      link: 'https://github.com/AdarshRpatil/E-learning-system',
      github: 'https://github.com/AdarshRpatil/E-learning-system',
    },
    {
      id: 4,
      title: 'FlameTrack - Wilefire tracking app',
      img: IMG4,
      description:
        'Wildfire tracking app using NASA api',
      technologies: 'React, NASA api',
      link: 'https://github.com/AdarshRpatil/FlameTrack',
      github: 'https://github.com/AdarshRpatil/FlameTrack',
    },
    {
      id: 5,
      title: 'GeminiAI',
      img: IMG5,
      description:
        'Fully responsive Gemini app',
      technologies: 'React, Gemini api',
      link: 'https://github.com/AdarshRpatil/Gemini-AI',
      github: 'https://github.com/AdarshRpatil/Gemini-AI',
    },
    {
      id: 6,
      title: 'Spotify - Music app',
      img: IMG6,
      description:
        'Fully functional Spotify app',
      technologies: 'React JS, Tailwind CSS',
      link: 'https://github.com/AdarshRpatil/Spotify-web-app',
      github: 'https://github.com/AdarshRpatil/Spotify-web-app',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
