import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { scrollPageTo } from '../utils';

export default class Navigation extends React.Component {
  constructor(props) {
    super();
    this.state = {
      menuOpen: false
    };
  }

  toggleMenu = (event) => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  render() {
    return (
      <nav className={this.state.menuOpen ? 'navigation open' : 'navigation'}>
        <div className="navigation__brand">
          <NavLink
            to="/"
            onClick={(e) => {
              e.preventDefault();
              this.toggleMenu();
              scrollPageTo('home');
            }}
          >
            BURTON<span>MEDIA</span>
          </NavLink>
        </div>
        <div className="navigation__links-container">
          <div className="navigation__links">
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link--active"
              to="/"
              onClick={(e) => {
                e.preventDefault();
                this.toggleMenu();
                scrollPageTo('home');
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link--active"
              to="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                this.toggleMenu();
                scrollPageTo('portfolio');
              }}
            >
              Portfolio
            </NavLink>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link--active"
              to="#about"
              onClick={(e) => {
                e.preventDefault();
                this.toggleMenu();
                scrollPageTo('about');
              }}
            >
              About
            </NavLink>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link--active"
              to="#blog"
              onClick={(e) => {
                e.preventDefault();
                this.toggleMenu();
                scrollPageTo('blog');
              }}
            >
              Blog
            </NavLink>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link--active"
              to="#events"
              onClick={(e) => {
                e.preventDefault();
                this.toggleMenu();
                scrollPageTo('events');
              }}
            >
              Events
            </NavLink>
            <NavLink
              className="navigation__link"
              activeClassName="navigation__link--active"
              to="#contact"
              onClick={(e) => {
                e.preventDefault();
                this.toggleMenu();
                scrollPageTo('contact');
              }}
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="navigation__mobile-background">&nbsp;</div>
        <div className="navigation__mobile" onClick={this.toggleMenu}>
          <span className="navigation__mobile-bar" />
        </div>
      </nav>
    );
  }
}
