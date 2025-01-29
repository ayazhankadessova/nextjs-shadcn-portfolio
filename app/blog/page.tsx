'use client'
import React, { useState } from 'react'
import { posts } from '#site/content'
import { PostItem } from '@/components/post-item'
import {
  sortPosts,
  filterPostsBySearchTerm,
  sortPostsByTitle,
} from '@/lib/utils'
import '@/styles/mdx-style.css'
import { CustomPagination } from '@/components/pagination-query'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface BlogPageProps {
  searchParams: {
    page?: string
    perPage?: string
  }
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const [searchText, setSearchText] = useState('')
  const [sortMethod, setSortMethod] = useState('createdAt')

  const publishedPosts = filterPostsBySearchTerm(
    posts.filter((post) => post.published),
    searchText
  )

  const sortedPosts =
    sortMethod === 'createdAt'
      ? sortPosts(publishedPosts)
      : sortPostsByTitle(publishedPosts)

  const currentPage = Number(searchParams?.page) || 1
  const currentPerPage = Number(searchParams?.perPage) || 5
  const totalPages = Math.ceil(publishedPosts.length / currentPerPage)

  const displayPosts = sortedPosts.slice(
    currentPerPage * (currentPage - 1),
    currentPerPage * currentPage
  )

  return (
    <div className='container max-w-4xl mx-auto px-2 md:px-4 py-16'>
      <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8'>
        <h1 className='text-xl font-semibold'>B L O G</h1>
        <div className='flex flex-col sm:flex-row gap-4'>
          <Input
            type='text'
            placeholder='Search'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className='w-3/4 sm:w-[200px]'
          />
          <Select onValueChange={setSortMethod}>
            <SelectTrigger className='w-3/4 sm:w-[140px]'>
              <SelectValue placeholder='Sort By' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Sort By</SelectLabel>
                <SelectItem value='createdAt'>Created At</SelectItem>
                <SelectItem value='title'>Title</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='space-y-16'>
        {displayPosts?.length > 0 ? (
          displayPosts.map((post) => <PostItem key={post.slug} post={post} />)
        ) : (
          <p>No articles yet...</p>
        )}
      </div>

      <CustomPagination totalPages={totalPages} className='mt-8' />
    </div>
  )
}
