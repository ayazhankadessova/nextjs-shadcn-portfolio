import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import Image from 'next/image'

interface PostItemProps {
  post: {
    slug: string
    title: string
    description?: string
    date: number
    tags?: Array<string>
    image: string
  }
}

export function PostItem({ post }: PostItemProps) {
  const { slug, title, description, date, tags, image } = post

  return (
    <article className='grid grid-cols-[240px_1fr] gap-8'>
      {/* Image Section */}
      <div className='relative h-40 group'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-cover rounded-lg shadow-md'
        />
        <div className='absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors rounded-lg' />
      </div>

      {/* Content Section */}
      <div>
        <div className='text-xs text-muted-foreground'>
          <time suppressHydrationWarning>{formatDate(date)}</time>
        </div>

        <Link href={'/' + slug} className='block group'>
          <h2 className='text-lg font-medium tracking-tight group-hover:text-primary transition-colors inline-flex items-center gap-1'>
            {title}
            <span className='font-semibold inline-block transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:translate-x-0.5'>
              ↗
            </span>
          </h2>
        </Link>

        {description && (
          <p className='text-sm text-muted-foreground mt-2'>{description}</p>
        )}

        {tags && tags.length > 0 && (
          <div className='flex flex-wrap gap-2 mt-3'>
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant='secondary'
                className='text-xs font-normal'
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
