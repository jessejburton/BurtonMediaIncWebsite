import React from 'react';

export const Header = () => (
  <div className="header" id="home">
    <div className="header__content">
      <span className="header__title">
        BURTON<strong>MEDIA</strong>
      </span>
      <span className="header__line">&nbsp;</span>
      <span className="header__subtitle">
        let's build the internet together.
      </span>
    </div>

    <div className="header__contact">
      <a href="mailto:jesse@burtonmediainc.com" title="e-mail me">
        <i className="fas fa-envelope" />
      </a>
      <a
        href="https://www.linkedin.com/in/jessejburton/"
        title="linked in"
        target="_blank"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a href="https://twitter.com/burtonmedia" title="twitter" target="_blank">
        <i className="fab fa-twitter-square" />
      </a>
      <a
        href="https://www.facebook.com/jessejamesburton"
        title="facebook"
        target="_blank"
      >
        <i className="fab fa-facebook" target="_blank" />
      </a>
      <a
        href="https://www.instagram.com/jessejburton/"
        title="instagram"
        target="_blank"
      >
        <i className="fab fa-instagram" target="_blank" />
      </a>
      <a href="https://github.com/jessejburton" title="GitHub" target="_blank">
        <i className="fab fa-github" />
      </a>
    </div>
  </div>
);

export default Header;
