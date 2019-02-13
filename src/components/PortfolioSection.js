import React from 'react';
import Modal from 'react-modal';
import PortfolioItem from './PortfolioItem';

const portfolioData = [
  {
    id: 1,
    title: 'Salt Spring Centre of Yoga',
    technologies: 'WordPress, AngularJS',
    content: (
      <div>
        <p>
          The Salt Spring Centre of Yoga was in need of a new website. They had
          an existing WordPress site that was using a lot of plugins and
          customizations. Time for a fresh new look! The main design of the site
          was created by Marianne Butler who provided the SASS and CSS files
          which I then used to create the WordPress theme.
        </p>

        <p>
          The theme includes custom post types for managing testimonials,
          banners and job postings. The site uses Gravity Forms along with the
          PayPal and MailChimp plugins to manage payments, memberships and
          newsletter subscriptions.
        </p>

        <p>
          We have added an online registration system built with AngularJS. This
          allows yoga teachers to manage their own schedules and provides the
          office with metrics about class enrollment. This was previously a
          manual process done with pen and paper.
        </p>
      </div>
    ),
    url: 'https://www.saltspringcentre.com',
    image: 'saltspringcentre_small.png',
    styles: {
      backgroundImage: "url('/images/saltspringcentre.png')"
    }
  },
  {
    id: 2,
    title: 'Toko-pa',
    technologies: 'WordPress, WooCommerce, LearnDash',
    content: (
      <div>
        <p>
          In the summer of 2018 I began working with Toko-pa to assist with the
          performance of her website and to help configure online shipping with
          Woo Commerce.
        </p>

        <p>
          By implementing and configuring the W3 Total Cache plugin and a few
          other modifications to the theme we were able to reduce average load
          times from 9s to around 3s.
        </p>

        <p>
          We also setup shipping to be automatically calculated within Canada
          and US using a Canada Post plugin and serveral Woo Commerce plugins in
          order to get the configuration just right for orders of any size. This
          also includes discounts for orders of specific sizes.
        </p>

        <p>
          Starting in November of 2018 we are beginning to set up an
          implementation of the LearnDash LMS in order to provide online
          courseware. This project is planned to be completed in March of 2019.
        </p>
      </div>
    ),
    url: 'https://www.toko-pa.com',
    image: 'toko-pa_small.png',
    styles: {
      backgroundImage: "url('/images/toko-pa.png')"
    }
  }
];

const portfolioData2 = [
  {
    id: 3,
    title: 'Airdrie Curling Club',
    technologies: 'WordPress, Custom Plugins',
    content: (
      <div>
        <p>The Airdrie Curling Club needed a website.</p>
      </div>
    ),
    url: 'https://www.airdriecurlingclub.ca',
    image: 'acc_small.png',
    styles: {
      backgroundImage: "url('/images/acc.png')"
    }
  },
  {
    id: 4,
    title: 'BURTONMEDIA',
    technologies: 'React',
    content: (
      <div>
        <p>This website.</p>
      </div>
    ),
    url: 'https://www.burtonmediainc.com',
    image: 'burtonmedia_small.png',
    styles: {
      backgroundImage: "url('/images/burtonmedia.png')"
    }
  }
];

export default class ContactSection extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showModal: false,
      activePortfolioItem: {
        title: '',
        technologies: '',
        content: '',
        url: '',
        image: '',
        styles: {}
      }
    };
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  showPortfolioItem = (item) => {
    this.setState({
      activePortfolioItem: item
    });
    this.onToggleModal();
  };

  onToggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };

  render() {
    return (
      <section className="portfolio-section column-flex" id="portfolio">
        {portfolioData.map((item) => {
          return (
            <PortfolioItem
              {...item}
              handleOpenItem={this.showPortfolioItem}
              key={item.id}
            />
          );
        })}

        <Modal
          isOpen={this.state.showModal}
          onRequestClose={this.onToggleModal}
          shouldCloseOnOverlayClick={true}
          closeTimeoutMS={500}
          style={{
            overlay: {
              backgroundColor: 'rgba(0,0,0,.7)'
            },
            content: {
              backgroundColor: 'rgb(0,0,0)',
              color: '#8a8a8a',
              border: 'none',
              borderRadius: 0,
              padding: 0,
              fontSize: '1.4rem'
            }
          }}
        >
          <div className="portfolio-modal__container">
            <div className="portfolio-modal__heading">
              <div className="portfolio-modal__heading-text">
                <div>
                  <h1 className="portfolio-modal__title">
                    {this.state.activePortfolioItem.title}
                  </h1>
                  <div className="portfolio-modal__technologies">
                    {this.state.activePortfolioItem.technologies}
                  </div>
                </div>
              </div>
              <div
                className="portfolio-modal__image"
                style={this.state.activePortfolioItem.styles}
              />
            </div>
            <div className="portfolio-modal__content">
              <div className="portfolio-modal__scroll portfolio-modal__scroll--up">
                &nbsp;
              </div>
              {this.state.activePortfolioItem.content}
              <div className="portfolio-modal__scroll portfolio-modal__scroll--down">
                &nbsp;
              </div>
            </div>
            <div className="portfolio-modal__url">
              <a href="{this.state.activePortfolioItem.url}">
                {this.state.activePortfolioItem.url}
              </a>
            </div>
            <div
              className="portfolio-modal__close"
              onClick={this.onToggleModal}
            >
              close
            </div>
          </div>
        </Modal>
      </section>
    );
  }
}
