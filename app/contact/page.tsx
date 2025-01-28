import React from 'react'
import { Card } from '@/components/ui/card'
import { Mail, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { contactInfo } from '@/data/contact'

export default function ContactPage() {

  return (
    <div className='container max-w-4xl mx-auto px-8 py-16'>
      <h1 className='text-3xl font-bold'>Contact</h1>

      <div className='text-center'>
        <h2 className='text-2xl font-semibold mb-4'>Want to Collaborate?</h2>
        <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          I am always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions.
        </p>
      </div>

      <div className='mt-10 grid gap-8 md:grid-cols-2'>
        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex flex-col items-center text-center'>
            <Mail className='h-12 w-12 mb-4 text-purple-500' />
            <h2 className='text-xl font-semibold mb-2'>Email</h2>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              {contactInfo.email}
            </p>
            <Button asChild variant='outline'>
              <Link href={`mailto:${contactInfo.email}`}>Send Email</Link>
            </Button>
          </div>
        </Card>

        <Card className='p-6 hover:shadow-lg transition-shadow'>
          <div className='flex flex-col items-center text-center'>
            <Send className='h-12 w-12 mb-4 text-purple-500' />
            <h2 className='text-xl font-semibold mb-2'>Telegram</h2>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              {contactInfo.telegram}
            </p>
            <Button asChild variant='outline'>
              <Link
                href={`https://t.me/${contactInfo.telegram.substring(1)}`}
                target='_blank'
              >
                Message on Telegram
              </Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
