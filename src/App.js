import React from 'react';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;