'use client'
import React, { useState, useEffect } from 'react';
import { Star, Menu, X, ChevronRight, Telescope, Rocket, Globe, Camera } from 'lucide-react';
import News from './components/News';
import BlogListing from './components/Blog';
import Nav from './components/Nav';
import Footer from './components/Footer';

const SpaceObservatory = () => {
  
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const features = [
    {
      icon: <Telescope className="w-8 h-8" />,
      title: "Advanced Telescopes",
      description: "State-of-the-art optical and radio telescopes for deep space observation"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "High-Resolution Imaging",
      description: "Capture stunning images of distant galaxies and celestial phenomena"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Network",
      description: "Connected observatories worldwide for comprehensive sky coverage"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Space Missions",
      description: "Supporting current and future space exploration missions"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      
      <Nav/>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/30 to-orange-900/20"></div>
        <div 
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage: `url('/show.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 mt-[15rem]">

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-yellow-400 bg-clip-text text-transparent">
            SPACE ✦ ASTRONOMY
          </h1>
          <h2 className="text-4xl md:text-6xl font-light mb-8 text-gray-300">
            OBSERVATORY
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Exploring the cosmos and bringing the universe closer to you through cutting-edge astronomy and space observation.
          </p>
          <div className=' mt-[10rem]'>
            <BlogListing/>
            <News/>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SpaceObservatory;