import React from 'react';
import Fade from 'react-reveal/Fade';

export default class ContactSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <section className="contact-section center-flex" id="contact">
        <Fade bottom>
          <div className="content-container contact-section__content">
            <h2>Contact Me</h2>
            <p className="contact-section__subtext">
              Ask me a question or tell me about your project! Reach me by
              e-mail{' '}
              <a href="mailto:jesse@burtonmediainc.com">
                jesse@burtonmediainc.com
              </a>{' '}
              or find me online.
            </p>
            <form className="contact-section__form">
              <div className="input-group" style={{ display: 'none' }}>
                <input
                  type=" text"
                  id="name"
                  name="name"
                  className="input-text"
                  value={this.state.name}
                  required
                  placeholder="name"
                  onChange={(e) => this.setState({ name: e.target.value })}
                />
              </div>
              <div className="input-group" style={{ display: 'none' }}>
                <input
                  type=" text"
                  id="email"
                  name="email"
                  className="input-text"
                  value={this.state.email}
                  required
                  placeholder="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="input-group" style={{ display: 'none' }}>
                <textarea
                  id="message"
                  name="message"
                  className="input-textarea"
                  placeholder="message"
                  onChange={(e) => this.setState({ message: e.target.value })}
                  value={this.state.message}
                />
              </div>
              <div className="input-group split-flex contact-section__buttons">
                <button
                  type="submit"
                  onClick={(e) => this.handleFormSubmit(e)}
                  className="button"
                  style={{ display: 'none' }}
                >
                  <i className="fa fa-envelope" /> Send Message
                </button>
                <div className="contact-section__social">
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
                  <a
                    href="https://twitter.com/burtonmedia"
                    title="twitter"
                    target="_blank"
                  >
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
                  <a
                    href="https://github.com/jessejburton"
                    title="GitHub"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </Fade>
      </section>
    );
  }
}
