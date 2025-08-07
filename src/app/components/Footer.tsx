'use client'
import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

function Footer() {
  return (
    <footer className=" w-full bg-[#2f2f2f] backdrop-blur-md text-white py-8 px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full">
        
        {/* Brand */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="text-2xl font-bold">ASTROS</h2>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} Astros. All rights reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 w-full md:w-auto">
          <a href="#home" className="hover:text-yellow-400 transition-colors duration-200">Home</a>
          <a href="#explore" className="hover:text-yellow-400 transition-colors duration-200">Blog</a>
          <a href="#contact" className="hover:text-yellow-400 transition-colors duration-200">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 w-full md:w-auto">
          <a href="#" className="hover:text-yellow-400"><Facebook /></a>
          <a href="#" className="hover:text-yellow-400"><Twitter /></a>
          <a href="#" className="hover:text-yellow-400"><Instagram /></a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
