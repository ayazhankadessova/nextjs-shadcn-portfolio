import Link from 'next/link'
import { cn, formatDate } from '@/lib/utils'
import { Tag } from './tag'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
    <article className='flex-1 flex flex-col gap-2 border-border border-b py-3'>
      <div className='flex flex-col-reverse sm:flex-row justify-between'>
        <div className='flex-1'>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <Avatar className='h-5 w-10 mr-2'>
                <AvatarImage src='/me.png' />
              </Avatar>
              <div>
                <p className='text-sm font-bold'>AyazhanKad</p>
                <time className='text-sm' suppressHydrationWarning>
                  {formatDate(date)}
                </time>
              </div>
            </div>
          </div>
          <div>
            <h2 className='text-2xl font-bold'>
              <Link href={'/' + slug}>{title}</Link>
            </h2>
          </div>
          <div className='max-w-none text-muted-foreground'>{description}</div>
          <div className='flex gap-2 mt-2'>
            {tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
        <div>
          <Image
            src={image}
            alt=''
            className='rounded-lg sm:w-[12rem] xl:w-full p-4'
            width={500}
            height={100}
          />
        </div>
      </div>
    </article>
  )
}
