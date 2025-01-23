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

  const handleSearchTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchText(event.target.value)
  }

  const handleSortMethodChange = (value: string) => {
    setSortMethod(value)
  }

  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      <div className='flex mb-6 w-half'>
        <Input
          type='text'
          placeholder='Search'
          value={searchText}
          onChange={handleSearchTextChange}
          className='border border-gray-300 rounded-md'
        />
      </div>
      <div className='flex justify-between'>
        <h1 className='font-black text-3xl lg:text-4xl'>Articles</h1>
        <Select onValueChange={handleSortMethodChange}>
          <SelectTrigger className='w-[180px]'>
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
      <hr className='mt-4'></hr>
      {displayPosts?.length > 0 ? (
        <ul className='flex flex-col'>
          {displayPosts.map((post) => {
            return (
              <li key={post.slug}>
                <PostItem post={post} />
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No articles yet...</p>
      )}
      <CustomPagination totalPages={totalPages} className='mt-4' />
    </div>
  )
}
