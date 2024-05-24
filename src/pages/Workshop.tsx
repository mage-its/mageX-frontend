import React from 'react';
import Navbar from '../components/Navbar.tsx';
import WorkshopSlide from '@/components/WorkshopSlide.tsx';
import WorkshopFooter from '@/components/WorkshopFooter.tsx';
import AboutText from '@/components/AboutText.tsx';
import x from '../assets/brand/logo.svg';

const Workshop: React.FC = () => {
  return (
    <main className="bg-orange-gradient relative overflow-hidden pb-14 min-h-screen">
      {/* Satu container */}
        {/* Navigation Bar */}
        <Navbar />
        <h1 style={{ textAlign: 'center' }}>WORKSHOP</h1>
        {/* Image */}
        <img src={x}
          alt="X"
          className={
            "mx-auto select-none size-14"
          }   
        />
        {/* Teks untuk image */}
        {/* Guide book dan regist */}
      {/* Satu container */}
      <div style = {{marginTop: "1000px"}}></div>
      {/* Satu container */}
        <div style = {{ width: "80%", marginLeft: "10%", marginRight: "10%" }} >
          <AboutText />
          <WorkshopSlide />
        </div>
      {/* Satu container */}

      {/* Footer */}
      <WorkshopFooter />
    </main>
  );
}

export default Workshop;