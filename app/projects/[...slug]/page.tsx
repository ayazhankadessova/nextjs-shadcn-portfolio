import { projectDocs } from '#site/content'
import { notFound } from 'next/navigation'
import { MDXContent } from '@/components/blog/mdx-components'
import BackButton from '@/components/backbutton'
import '@/styles/mdx-style.css'

interface ProjectDocPageProps {
  params: {
    slug: string[]
  }
}

function getProjectFromParams(params: ProjectDocPageProps['params']) {
  const slug = params?.slug?.join('/')
  return projectDocs.find((project) => project.slugAsParams === slug)
}

export async function generateStaticParams(): Promise<
  { slug: string[]; revalidate?: number }[]
> {
  return projectDocs
    .filter((project) => project.published)
    .map((project) => ({
      slug: project.slugAsParams.split('/'),
      revalidate: 7200,
    }))
}

export default function ProjectDocPage({ params }: ProjectDocPageProps) {
  const project = getProjectFromParams(params)

  if (!project || !project.published) {
    notFound()
  }

  return (
    <div className='container max-w-5xl mx-auto px-6 md:px-8 py-10'>
      <BackButton />
      <article className='prose prose-img:rounded-xl max-w-none mt-2'>
        <h1 className='mb-2'>{project.title}</h1>
        {project.description ? (
          <p className='text-xl mt-0 text-muted-foreground'>
            {project.description}
          </p>
        ) : null}
        <hr className='my-4' />
        <MDXContent code={project.body} />
      </article>
    </div>
  )
}
