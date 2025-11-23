import OtherSection from '@/components/sections/other'
import BackToMain from '@/components/ui/back-to-main'

export default function OtherPage() {
  return (
    <div className='container max-w-4xl mx-auto px-6 md:px-8 py-10'>
      <div className='mb-4'>
        <BackToMain />
      </div>
      <OtherSection variant='default' section='activities' />
    </div>
  )
}
