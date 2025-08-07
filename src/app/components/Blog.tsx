'use client'
import React from 'react'
import Link from 'next/link'
import { ExternalLink, Calendar, User, ArrowRight, Clock } from 'lucide-react'
import { blogPosts } from '../data/blogs'

const BlogListing = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center justify-center p-8 min-h-screen">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Blog Posts
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-xl leading-relaxed">
            Explore the latest discoveries, insights, and breakthroughs in space exploration, 
            astronomy, and the endless wonders of our universe.
          </p>
        </div>

        {/* Blog Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.id}`}
              className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                post.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:bg-white/10 transition-all duration-500 h-full">
                {post.featured && (
                  <div className="absolute top-3 left-3 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  </div>
                )}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-blue-500/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-center justify-between text-gray-400 text-xs mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-2 text-white hover:text-blue-400 transition-all duration-300 group-hover:scale-105 transform self-start group-hover:translate-x-1">
                    <span className="font-medium text-sm">Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogListing
