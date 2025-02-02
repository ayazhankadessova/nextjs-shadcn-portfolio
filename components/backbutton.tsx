'use client'

import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }
  return (
    <Button variant='ghost' onClick={handleGoBack} className='px-2'>
      <ChevronLeft className='h-4 w-4' />
      BACK
    </Button>
  )
}
