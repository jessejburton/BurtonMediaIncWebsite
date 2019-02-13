import React from 'react';
import Fade from 'react-reveal/Fade';

export const EventsSection = () => (
  <section className="events-section center-flex" id="events">
    <Fade>
      <div className="content-container events-section__content">
        <h1>Building a Website</h1>
        <span className="header__line">&nbsp;</span>
        <p className="events-section__text">
          February 20th @ The Koffee Kabin Carstairs, AB ~ $20
        </p>
        <p className="events-section__call">
          <button className="button">Learn More >>></button>
        </p>
      </div>
    </Fade>
  </section>
);

export default EventsSection;
