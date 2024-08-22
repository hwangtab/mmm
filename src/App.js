// src/App.js
import React from 'react';
import Header from './components/Header';
import LandingSection from './components/LandingSection';
import EventDetails from './components/EventDetails';
import LineupSchedule from './components/LineupSchedule';
import ArtistInterview from './components/ArtistInterview';
import EventHistory from './components/EventHistory';
import FAQ from './components/FAQ';
import TicketInfo from './components/TicketInfo';
import Gallery from './components/Gallery';
import ContactFooter from './components/ContactFooter';

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-900 text-white">
      <Header scrollToSection={scrollToSection} scrollToTop={scrollToTop} />
      <main>
        <LandingSection />
        <EventDetails />
        <LineupSchedule />
        <ArtistInterview />
        <EventHistory />
        <FAQ />
        <TicketInfo />
        <Gallery />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;