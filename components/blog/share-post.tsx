'use client'

import { CopyIcon, CheckIcon, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useState } from 'react'

interface SharePostProps {
  fullLink: string
}

export function SharePost({ fullLink }: SharePostProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(fullLink)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className='flex'>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='ghost'>
            <Share2 className='md:mr-2 h-4 w-4' />
            <span className='hidden md:block'>Share</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent align='end' className='w-[200px] md:w-[300px]'>
          <div className='flex flex-col space-y-2 text-left sm:text-left'>
            <h4 className='font-semibold'>Share this page</h4>
            <p className='text-sm text-muted-foreground'>
              Use the link below or directly share to twitter
            </p>
          </div>
          <div className='flex flex-nowrap mt-4 gap-2'>
            <div className='grid flex-1 gap-2'>
              <Label htmlFor='link' className='sr-only'>
                Link
              </Label>
              <Input
                id='link'
                defaultValue={fullLink}
                readOnly
                className='h-9'
                type='url'
              />
            </div>
            <Button
              type='button'
              size='sm'
              className='px-3 inline-flex items-center justify-center'
              variant='secondary'
              onClick={handleCopy}
            >
              {isCopied ? (
                <>
                  <CheckIcon className='h-4 w-4 mr-2' />
                  <span className='hidden md:block'> Copied!</span>
                </>
              ) : (
                <>
                  <CopyIcon className='h-4 w-4 mr-2' />
                  <span className='hidden md:block'>Copy Link</span>
                </>
              )}
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
