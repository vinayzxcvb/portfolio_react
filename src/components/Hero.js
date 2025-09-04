import React from 'react';

const Hero = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section relative overflow-hidden">
      <div className="container hero-container flex flex-col md:flex-row items-center justify-center py-12 md:py-24 relative z-10">
        
        {/* Profile Image */}
        <div className="hero-image-container mb-8 md:mb-0 md:mr-12 flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dexgotdr4/image/upload/v1756892087/Linkedin_Photo_1_1_qciwe8.jpg" // Your new image URL
            alt="Siva Vinay"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover shadow-lg"
          />
        </div>

        {/* Main Text Content */}
        <div className="hero-content text-center md:text-left">
          <h1 className="hero-title">Hey, I'm <span>Siva Vinay</span></h1>
          <p className="hero-subtitle">Crafting Beautiful Digital Experiences</p>
          <a href="#projects" className="btn btn-primary" onClick={handleScrollToProjects}>
            Explore My Work
          </a>
        </div>
      </div>

      {/* Social Media Links - moved further up and left */}
      {/* Changed bottom-8 to bottom-16 and right-8 to right-16 */}
      <div className="absolute bottom-16 right-16 flex gap-6 text-3xl z-20">
        <a href="https://github.com/vinayzxcvb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 hover:drop-shadow-[0_0_10px_rgba(156,163,175,0.8)] transition duration-300">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.instagram.com/_siva_vinay_07/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] transition duration-300">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/siva-vinay/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition duration-300">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;