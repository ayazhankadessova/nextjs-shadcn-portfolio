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
    <article className='grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-4 sm:gap-6 md:gap-8'>
      {/* Content Section */}
      <div className='sm:order-2'>
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

      {/* Image Section */}
      <div className='w-1/2 mx-auto sm:w-full sm:order-1'>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className='rounded-lg hover:border hover:border-solid hover:border-primary'
          sizes='(max-width: 640px) 66vw, 25vw'
        />
      </div>
    </article>
  )
}
