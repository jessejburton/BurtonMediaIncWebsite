import React from 'react';
import Fade from 'react-reveal/Fade';

export const BlogSection = () => (
  <section className="blog-section center-flex" id="blog">
    <Fade right>
      <div className="content-container blog-section__content">
        <h1>
          <a href="http://burtonmediainc.com/blog">YOGA & CODE</a>
        </h1>
        <h2>
          <a
            href="http://burtonmediainc.com/blog/my-mind-or-my-egos-scapegoat/"
            target="_blank"
          >
            MY MIND? OR MY EGO’S SCAPEGOAT?
          </a>
        </h2>
        <p>
          Yesterday I skipped my practice for the first time in a couple of
          weeks. I slept in and by the time I got up it was time for a phone
          call that I had scheduled with a client{' '}
          <a
            href="http://burtonmediainc.com/blog/my-mind-or-my-egos-scapegoat/"
            target="_blank"
          >
            more...
          </a>
        </p>
        <p className="blog-section__posted-on">
          POSTED ON JANUARY 30, 2019 BY JESSEJBURTON
        </p>
      </div>
    </Fade>
  </section>
);

export default BlogSection;
