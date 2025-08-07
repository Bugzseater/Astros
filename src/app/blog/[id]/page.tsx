// src/app/blog/[id]/page.tsx
import React from 'react'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/app/data/blogs'

interface BlogPageProps {
  params: {
    id: string
  }
}

const BlogPage = ({ params }: BlogPageProps) => {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-400 text-sm mb-2">
          {post.date} — {post.author}
        </p>
        <div className="mt-6 leading-relaxed text-lg text-gray-200">
          {post.content}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
