import React from 'react';
import Fade from 'react-reveal/Fade';

export const AboutSection = () => (
  <section className="about-section center-flex" id="about">
    <Fade>
      <div className="content-container about-section__content">
        <div>
          <h1>Jesse James Burton</h1>
          <p>
            I'm a web developer with over 15 years of professional experience. I
            spent the first 10 years of my career working in municipal
            government for the{' '}
            <a href="https://www.airdrie.ca">City of Airdrie</a> in Alberta,
            Canada.
          </p>

          <p>
            Now I work as a freelancer finding projects that inspire me. My main
            current focus is on frontend development with React and Custom
            WordPress development.
          </p>

          <p>
            I enjoy collaboration and supporting open source development.
            <br />
            <a href="">Let's build the internet together.</a>
          </p>
        </div>
      </div>
    </Fade>
  </section>
);

export default AboutSection;
