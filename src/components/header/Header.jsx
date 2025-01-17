import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import Typewriter from 'typewriter-effect';



const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h4>Hello I'm</h4>

        <h1> <Typewriter
          options={{
            strings: ['Adarsh Patil'],
            autoStart: true,
            pauseFor: 3000,
            loop: true,
          }}
        />
        </h1>
        <h2 className="text-light">MERN Stack Developer || Springboot</h2>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
