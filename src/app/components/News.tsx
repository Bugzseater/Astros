'use client'

import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const News = () => {
  const planets = [
    {
      name: 'Mercury',
      description: 'Lorem ipsum dolor sit amet.',
      size: 'w-48 h-48',
      image: 'https://dl0.creation.com/articles/p162/c16243/jw_telescope.jpg',
      shadow: 'shadow-gray-500/30',
      glowColor: 'shadow-gray-400/50',
    },
    {
      name: 'Venus',
      description: 'Lorem ipsum dolor sit amet.',
      size: 'w-64 h-64',
      image: 'https://dl0.creation.com/articles/p162/c16243/jw_telescope.jpg',
      shadow: 'shadow-orange-500/40',
      glowColor: 'shadow-orange-400/50',
    },
    {
      name: 'Mars',
      description: 'Lorem ipsum dolor sit amet.',
      size: 'w-52 h-52',
      image: 'https://dl0.creation.com/articles/p162/c16243/jw_telescope.jpg',
      shadow: 'shadow-red-500/40',
      glowColor: 'shadow-red-400/50',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <p className="text-gray-300 text-lg mb-4 tracking-wide">Astronomy Discovery</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">News</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      {/* Planets Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 lg:space-x-16 relative z-10">
        {planets.map((planet) => (
          <div key={planet.name} className="flex flex-col items-center group">
            {/* Planet */}
            <div className="relative mb-8">
              <div
                className={`${planet.size} relative cursor-pointer transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
              >
                {/* Planet Image wrapper for Next.js Image */}
                <div className={`relative w-full h-full rounded-full ${planet.shadow} shadow-2xl`}>
                  <Image
                    src={planet.image}
                    alt={planet.name}
                    fill
                    style={{
                      objectFit: 'cover',
                      filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                      borderRadius: '9999px',
                    }}
                  />
                </div>

                {/* Subtle highlight overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-radial from-white/30 to-transparent rounded-full blur-sm" />

                {/* Subtle shadow overlay */}
                <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-black/20 via-transparent to-transparent rounded-full" />
              </div>

              {/* Planet Glow */}
              <div
                className={`absolute inset-0 ${planet.size} rounded-full bg-gradient-radial from-current to-transparent opacity-20 blur-2xl -z-10 ${planet.glowColor}`}
              />
            </div>

            {/* Planet Info */}
            <div className="text-center max-w-xs flex justify-center flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{planet.name}</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">{planet.description}</p>
              <a
                href={`/planets/${planet.name.toLowerCase()}`}
                aria-label={`Learn more about ${planet.name}`}
                className="flex items-center justify-center space-x-2 text-white hover:text-blue-400 transition-colors duration-300 group-hover:scale-105 transform"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="font-medium">Learn More</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Orbital Rings (Decorative) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/5 rounded-full animate-spin"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              animationDuration: `${20 + i * 10}s`,
              animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default News
