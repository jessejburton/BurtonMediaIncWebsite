import React from 'react';
import Header from '../components/header';
import AboutSection from '../components/AboutSection';
import PortfolioSection from './PortfolioSection';
import BlogSection from './BlogSection';
import EventsSection from './EventsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboutSection />
        <PortfolioSection />
        <BlogSection />
        <EventsSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}
