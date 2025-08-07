// src/app/blog/[id]/page.tsx
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Calendar, Clock, User } from 'lucide-react'
import { blogPosts } from '@/app/data/blogs'

type PageParams = {
  params: { id: string }
}

export default function Page({ params }: PageParams & { 
  params: Promise<any> 
}) {
  const postId = Number(params.id)
  if (isNaN(postId)) notFound()

  const post = blogPosts.find((post) => post.id === postId)
  if (!post) notFound()
  
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-10 animate-fadeIn">
        {/* Title with gradient */}
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-blue-300 via-purple-400 to-pink-300 text-transparent bg-clip-text">
          {post.title}
        </h1>

        {/* Post metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
          <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs font-semibold">
            {post.category}
          </span>
        </div>

        {/* Featured image */}
        <div className="flex justify-center">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="w-full max-w-2xl rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>

        {/* Content with markdown parsing */}
        <article className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed space-y-5">
          {post.content.split(/\n\s*\n/).map((block, idx) => {
            const trimmed = block.trim()

            if (trimmed.startsWith('### ')) {
              return (
                <h3 key={idx} className="text-xl font-semibold text-white mt-6 mb-2">
                  {trimmed.replace('### ', '')}
                </h3>
              )
            }

            if (trimmed.startsWith('## ')) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-2">
                  {trimmed.replace('## ', '')}
                </h2>
              )
            }

            return <p key={idx} className="mb-4">{trimmed}</p>
          })}
        </article>
      </div>
    </div>
  )
}

// Required for static generation
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

// Optional: For better SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = blogPosts.find((post) => post.id === Number(params.id))
  return {
    title: post?.title || 'Blog Post',
    description: post?.excerpt || '',
  }
}