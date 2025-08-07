import Image from 'next/image'
import { blogPosts } from '@/app/data/blogs'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User } from 'lucide-react'
import type { ParsedUrlQuery } from 'querystring'

interface BlogPageProps {
  params: ParsedUrlQuery & { id: string }
}

export default function BlogPage({ params }: BlogPageProps) {
  const post = blogPosts.find((b) => b.id === Number(params.id))
  if (!post) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-10 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 text-transparent bg-clip-text">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
          <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>

        <div className="flex justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={400}
            className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        <article className="text-gray-300 text-lg leading-relaxed space-y-5">
          {post.content.split(/\n\s*\n/).map((block, idx) => {
            const trimmed = block.trim()

            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-2">
                  {trimmed.replace('## ', '')}
                </h2>
              )
            }

            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-semibold text-white mt-6 mb-2">
                  {trimmed.replace('### ', '')}
                </h3>
              )
            }

            return <p key={idx}>{trimmed}</p>
          })}
        </article>
      </div>
    </div>
  )
}
