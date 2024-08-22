// src/components/Divider.js
import React from 'react';

function Divider({ color = 'primary' }) {
  return (
    <div className={`w-full h-1 bg-${color} my-12 transform -skew-y-1`}></div>
  );
}

export default Divider;

// src/App.js에 Divider 추가
import Divider from './components/Divider';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-gray-900 text-white relative">
      {/* ... 기존 코드 ... */}
      <main className="container mx-auto px-4">
        <LandingSection />
        <Divider color="secondary" />
        <EventDetails />
        <Divider color="tertiary" />
        <LineupSchedule />
        <Divider color="accent" />
        <TicketInfo />
        <Divider color="primary" />
        <Gallery />
      </main>
      {/* ... 기존 코드 ... */}
    </div>
  );
}