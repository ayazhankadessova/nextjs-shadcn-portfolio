'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from './ui/pagination'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import '@/styles/mdx-style.css'

interface QueryPaginationProps {
  totalPages: number
  className?: string
}

export function CustomPagination({
  totalPages,
  className,
}: QueryPaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const currentPage = Number(searchParams.get('page')) || 1
  const currentPerPage = Number(searchParams.get('perPage')) || 5

  const prevPage = currentPage - 1
  const nextPage = currentPage + 1

  const createPageURL = (
    pageNumber: number | string,
    perPage: number | string
  ) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    params.set('perPage', perPage.toString())

    return `${pathname}?${params.toString()}`
  }

  const handlePerPageChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('perPage', value)
    params.set('page', '1')

    window.location.href = `${pathname}?${params.toString()}`
  }

  return (
    <Pagination className={className}>
      <PaginationContent>
        <p className='m-2 font-semibold'>Rows per page</p>
        <Select onValueChange={handlePerPageChange}>
          <SelectTrigger className='w-[70px]'>
            <SelectValue placeholder={currentPerPage} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='5'>5</SelectItem>
              <SelectItem value='10'>10</SelectItem>
              <SelectItem value='15'>15</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <p className='m-2 font-semibold'>
          Page {currentPage} of {totalPages}{' '}
        </p>

        <PaginationItem>
          <PaginationPrevious
            href={createPageURL(prevPage, currentPerPage)}
            aria-disabled={currentPage <= 1}
            tabIndex={currentPage <= 1 ? -1 : undefined}
            className={currentPage <= 1 ? 'pointer-events-none' : undefined}
          />
        </PaginationItem>

        <PaginationNext
          href={createPageURL(nextPage, currentPerPage)}
          aria-disabled={nextPage > totalPages}
          tabIndex={nextPage > totalPages ? -1 : undefined}
          className={nextPage > totalPages ? 'pointer-events-none' : undefined}
        />
      </PaginationContent>
    </Pagination>
  )
}
