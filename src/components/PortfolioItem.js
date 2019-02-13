import React from 'react';

export default class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.handleOpenItem(this.props);
  }

  render() {
    return (
      <div className="portfolio-item" style={{backgroundImage: `url('/images/${this.props.image}')`}} onClick={this.handleClick}>
        <div className="portfolio-item__hover">
          <div className="portfolio-item__title">{this.props.title}</div>
          <div className="portfolio-item__technologies">
            {this.props.technologies}
          </div>
        </div>
      </div>
    )
  };
};