import React from 'react';
import Fade from 'react-reveal/Fade';
import Subscribe from './Subscribe';

export const EventsSection = () => (
  <section className="events-section center-flex" id="events">
    <Fade>
      <div className="content-container events-section__content">
        <div className="events-section__events">
          <h2>Upcoming Events</h2>
          <ul>
            <li>There are no events scheduled at this time.</li>
          </ul>
          <h2>Past Events</h2>
          <ul>
            <li>
              <a href="workshop">Building a Website | February 20th, 2019</a>
            </li>
          </ul>
        </div>
        <div className="events-section__subscribe">
          <Subscribe />
        </div>
      </div>
    </Fade>
  </section>
);

export default EventsSection;
