import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { getLatestPost } from '../helpers/Wordpress';
import moment from 'moment';

export default class BlogSection extends Component {
  constructor() {
    super();

    this.state = {
      blogURL: 'http://burtonmediainc.com/blog',
      blogTitle: 'YOGA & CODE',
      postTitle: '',
      postURL: '',
      postExcerpt: '',
      postDate: '',
      postAuthor: ''
    };
  }

  componentWillMount() {
    const post = getLatestPost(this.state.blogURL).then((post) => {
      this.setState(post);
    });
  }

  render() {
    return (
      <section className="blog-section center-flex" id="blog">
        <Fade right>
          <div className="content-container blog-section__content">
            <h1>
              <a href={this.state.blogURL} target="_blank">
                {this.state.blogTitle}
              </a>
            </h1>
            <h2 className="blog-section__post-title">
              <a href={this.state.postURL} target="_blank">
                {this.state.postTitle}
              </a>
            </h2>
            <p dangerouslySetInnerHTML={{ __html: this.state.postExcerpt }} />
            <p className="blog-section__posted-on">
              POSTED ON {moment(this.state.postDate).format('MMMM DD, YYYY')} BY{' '}
              {this.state.postAuthor}
            </p>
          </div>
        </Fade>
      </section>
    );
  }
}
