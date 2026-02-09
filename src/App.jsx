import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Newsletter from './components/Newsletter';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import Modal from './components/Modal';
import BackToTopButton from './components/BackToTopButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <Stats />
      <Features />
      <Partners />
      <Testimonials />
      <Pricing onOpenModal={openModal} />
      <CTABanner onOpenModal={openModal} />
      <Newsletter />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <BackToTopButton />
    </>
  );
}

export default App;
