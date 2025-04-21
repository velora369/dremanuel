import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import SimpleStartSection from '@/components/SimpleStartSection';
import OnlineInPersonSection from '@/components/OnlineInPersonSection';
import CompleteCareSection from '@/components/CompleteCareSection';
import AboutDoctorSection from '@/components/AboutDoctorSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import TechnologySection from '@/components/TechnologySection';
import CourseSection from '@/components/CourseSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Dr. Emanuel Esposito - Médico Nefrologista';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SimpleStartSection />
        <OnlineInPersonSection />
        <CompleteCareSection />
        <AboutDoctorSection />
        <SpecialtiesSection />
        <TechnologySection />
        <CourseSection />
        <TestimonialsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
