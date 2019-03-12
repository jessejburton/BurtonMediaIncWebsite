import React, { Component } from 'react';
import database from '../firebase/firebase';
import moment from 'moment';
import isEmail from 'validator/lib/isEmail'; // Only need to validate an e-mail

export default class Subscribe extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      autoreply: {
        type: '',
        text: ''
      }
    };
  }

  onSubscribe = (e) => {
    e.preventDefault();

    const t = this;

    if (!isEmail(this.state.email)) {
      t.setState({
        autoreply: {
          type: 'error',
          text: 'Please make sure to enter a valid email address.'
        }
      });
    } else {
      // Record the registration
      database
        .ref('registrants')
        .push({
          firstName: '',
          lastName: '',
          email: this.state.email,
          createdAt: moment().format(),
          isNewsletter: true
        })
        .then(function() {
          t.setState({
            autoreply: {
              type: 'success',
              text:
                'Thank you for you for your interest! You will receive an e-mail when new workshops and events are scheduled. You will be able to unsubscribe at any time that you no longer wish to be notified.'
            }
          });
        })
        .catch((err) => {
          t.setState({
            type: 'error',
            text: err
          });
        });
    }
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubscribe} className="subscribe">
        <h3>Get Notified</h3>
        {this.state.autoreply.text.length > 0 && (
          <p className={this.state.autoreply.type}>
            {this.state.autoreply.text}
          </p>
        )}
        <p>
          Enter your e-mail to be notified of upcoming events and workshops.
        </p>
        <div className="input-field">
          <input
            type="text"
            className="input-text"
            name="email"
            onChange={this.onChangeEmail}
            placeholder="Enter your email..."
          />
        </div>
        <div className="button-group">
          <button className="button button--primary button--full" type="submit">
            Keep Me Informed
          </button>
        </div>
      </form>
    );
  }
}
