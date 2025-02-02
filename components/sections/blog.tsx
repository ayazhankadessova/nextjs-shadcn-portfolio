'use client'
import React from 'react'
import { posts } from '#site/content'
import { PostItem } from '@/components/blog/post-item'
import { sortPosts } from '@/lib/utils'
import '@/styles/mdx-style.css'
import Link from 'next/link'

export default function BlogPage() {
  const sortedPosts = sortPosts(posts).slice(3, posts.length)

  return (
    <section className='mb-16' id='blog'>
      <h1 className='text-xl font-semibold mb-8'>B L O G</h1>
      <div className='space-y-12'>
        {sortedPosts?.length > 0 ? (
          sortedPosts.map((post) => <PostItem key={post.slug} post={post} />)
        ) : (
          <p>No articles yet...</p>
        )}
      </div>

      <Link href={'/blog'} className='block group mt-8'>
        <h3 className='text-lg font-medium tracking-tight group-hover:text-primary transition-colors inline-flex items-center gap-1'>
          <span className='relative transition-colors'>
            View Full Blog
            <span className='absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-500 transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
          </span>
          <span className='font-semibold inline-block transition-transform duration-200 ease-out group-hover:translate-x-1'>
            →
          </span>
        </h3>
      </Link>
    </section>
  )
}
