import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
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
  },
  {
    id: 3,
    title: 'The City of Airdrie',
    technologies: 'Coldfusion, Custom CMS, Residential Portal',
    content: (
      <div>
        <h3>Project Description</h3>
        <p>As a team of only two developers we created our own custom content management system for the City's website.</p>

        <p>After performing an in-depth business analysis of the Cities needs and we proposed that building a solution would offer the most flexible and affordable solution for the City to get a system that was customizable enough to meet the Cities needs and work with existing Coldfusion systems.</p>

        <h4>Key Features Include:</h4>
        <ul>
          <li>Integrations with internal systems (Dynamics, CityView etc.)</li>
          <li>Template based static page generation</li>
          <li>Many content type modules (i.e. html, calendars, custom code etc.)</li>
          <li>Content editor notification system (Dead links, Content Expiration etc)</li>
          <li>Document management</li>
          <li>Yearly third-party security reviews</li>
        </ul>

        <p>The CMS was built specifically for the needs of the City, making it easy to integrate with API’s and existing internal systems to provide a seamless experience for visitors. It is still being used today (2019).</p>

        <p>In 2016 we added a custom built citizen portal called MyAirdrie which allows citizens to manage their business with the city. The system offered features such as the ability to pay bills, view assessment notices, subscribe to garbage schedules and register at City facilities. This system includes full e-commerce and has a variety of API integrations with major systems such as Microsoft Dynamics and CityView.</p>
      </div>
    ),
    url: 'https://www.airdrie.ca',
    image: 'airdrie_small.png',
    styles: {
      backgroundImage: "url('/images/airdrie.jpg')"
    }
  },
  {
    id: 4,
    title: 'MyNet',
    technologies: 'Coldfusion, Custom Corporate Intranet',
    content: (
      <div>
        <h3>Project Description:</h3>
        <p>MyNet is a complete corporate intranet that replaced an older out-dated system. This was the first complete application that I was responsible for developing at the City of Airdrie. It was an enterprise system that was accessed daily by over 200 employees. I was responsible for the planning, database design and development for the first version of this application.</p>

        <p>Version 2 was released in 2015, this time by myself and another developer. This version has many more features than its predecessor. It has a huge focus on internal communication through a social media style design.</p>

        <h4>Key Features Include:</h4>
        <ul>
          <li>Employee profiles</li>
          <li>Team profiles</li>
          <li>Group / Project collaboration pages</li>
          <li>Document management (using MD5 hashing to avoid duplications)</li>
          <li>Outlook integrated training and out of office calendars</li>
          <li>Quick access to all Applications</li>
          <li>Enhanced search features</li>
        </ul>

        <p>MyNet is now accessed by more than 400 employees, many of which do so daily. It is a central communication portal that also helps to manage documents, content and applications that need to be accessed by employees of the City.</p>

        <p>MyNet is also now a platform for continued application development that will enable growth and change along with the needs of the organization.</p>
      </div>
    ),
    url: '',
    image: 'mynet_small.png',
    styles: {
      backgroundImage: "url('/images/mynet.jpg')"
    }
  },
  {
    id: 5,
    title: 'Online Census',
    technologies: 'Coldfusion, MS SQL Server, Mobile Data Collection',
    content: (
      <div>
        <h3>Project Description:</h3>
        <p>The first version of the census application was built right before I started with the City. It was a very specific application built with hard coded questions that enabled residents of Airdrie to enter basic census information using a secure PIN system. Together, over the past 8 years the development team at Airdrie has worked each year to implement new and better features and to grow the Online Census to a fully supported web application used by more than 25 municipalities across Alberta. Some, including Airdrie, collect data every year now due to the cost savings involved in having a system to handle the technical side of running a census.</p>

        <p>This adds huge value to the municipality since grant funding is based on population. Having an accurate and up to date count can mean huge benefits especially if your population is growing. The census application has won several municipal awards.</p>

        <h4>Key Features Include:</h4>
        <ul>
          <li>Fully responsive design for iPad (or any other mobile device) collection</li>
          <li>Browser based offline storage is utilized to ensure that data can still be collected in areas with little-to-no service</li>
          <li>Municipalities maintain their own questions and responses and can adjust as needed</li>
          <li>Question logic ensures the highest possible user experience by intelligently allowing the form to display only relevant questions</li>
          <li>Robust out of the box reports</li>
          <li>Real-time dashboards</li>
        </ul>

        <p>The system enables the City to collect very accurate census data. The response rate from the residents of Airdrie is consistently over 50% which means that Airdrie can take advantage every year of the grant funds that come with a growing population. On top of this the City has a way of offsetting the development costs by charging a reasonable hosting fee to other municipalities. The hosting also allows collaboration and idea sharing between municipalities so that the system is constantly being improved.</p>
      </div>
    ),
    url: 'http://www.onlinecensus.ca',
    image: 'census.jpg',
    styles: {
      backgroundImage: "url('/images/census.jpg')"
    }
  },
  {
    id: 6,
    title: 'BURTONMEDIA',
    technologies: 'React, Webpack, Babel, SASS',
    content: (
      <div>
        <h3>Project Description:</h3>

        <p>This website is used to showcase my work, provide a method to contact me and to experiment with new technologies and designs.</p>

        <h4>Key Implemented Features:</h4>
        <ul>
          <li>Built in ReactJS</li>
          <li>Fully responsive design</li>
        </ul>

        <h4>Features in development</h4>
        <ul>
          <li>Pull data from the blog using the WordPress REST API</li>
          <li>Data from the contact form will be collected in Firebase</li>
          <li>Potentially change site to Gatsby front-end</li>
          <li>Add a WordPress backend</li>
          <li>Improve the design of the Portfolio item displays (this screen)</li>
        </ul>

        <p>The continuous redevelopment and improvment of this website will be documented in my blog <a href="/blog">Yoga & Code.</a></p>
      </div>
    ),
    url: 'https://www.burtonmediainc.com',
    image: 'burtonmedia_small.png',
    styles: {
      backgroundImage: "url('/images/burtonmedia.png')"
    }
  },
    {
      id: 7,
      title: 'Airdrie Curling Club',
      technologies: 'WordPress, Custom Plugin Development',
      content: (
        <div>
          <h3>Project Description:</h3>

          <p>The Airdrie Curling Club needed a new website. We implemented a simple WordPress theme and customized it to meet the needs of the club.</p>

          <p>I built a custom plugin that allows them to easily update their weekly league schedules and standings.</p>

          <h4>Key Features:</h4>
          <ul>
            <li>WordPress website setup and implementation</li>
            <li>Theme Customizations</li>
            <li>Custom Plugin Deveopment</li>
          </ul>
        </div>
      ),
      url: 'https://www.airdriecurlingclub.ca',
      image: 'acc_small.png',
      styles: {
        backgroundImage: "url('/images/acc.png')"
      }
    },
      {
        id: 8,
        title: 'Accredited Supports to the Community',
        technologies: 'WordPress',
        content: (
          <div>
            <h3>Project Description:</h3>

            <p>The Accredited Supports to the Community needed a new website, being a non-profit support agency they needed it done as affordable as possible. We implemented a simple WordPress site for them.</p>

            <p>The support workers needed a way to access documents and forms while visiting clients. The office administrators needed an easy way of managing those documents and getting them to the support staff. We implemented a private, password protected area within the site where the admins could upload documents and the support staff could access them from wherever they needed via their phones, tablets or laptops.</p>

            <h4>Key Features:</h4>
            <ul>
              <li>WordPress website setup and implementation</li>
              <li>Password protected document management</li>
              <li>Custom user roles</li>
            </ul>
          </div>
        ),
        url: 'http://asc-mva.ab.ca',
        image: 'asc_small.png',
        styles: {
          backgroundImage: "url('/images/asc.jpg')"
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
              <a href={this.state.activePortfolioItem.url} target="_blank">
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
