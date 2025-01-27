import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Post } from '#site/content'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatDate(input: number): string {
  const date = new Date(input * 1000)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => b.date - a.date)
}

export function sortPostsByTitle(posts: Array<Post>): Array<Post> {
  return posts.sort((a, b) =>
    a.title.toLowerCase().localeCompare(b.title.toLowerCase())
  )
}

export function filterPostsBySearchTerm(
  posts: Array<Post>,
  searchTerm: string
): Array<Post> {
  if (!searchTerm) return posts

  const normalizedSearchTerm = searchTerm.toLowerCase().trim()

  return posts.filter((post) => {
    const { title, description, tags } = post
    const normalizedTitle = title.toLowerCase()
    const normalizedExcerpt = description?.toLowerCase()
    const normalizedTags = tags?.map((tag) => tag.toLowerCase())

    return (
      normalizedTitle.includes(normalizedSearchTerm) ||
      normalizedExcerpt?.includes(normalizedSearchTerm) ||
      normalizedTags?.some((tag) => tag.includes(normalizedSearchTerm))
    )
  })
}

/**
 * Capitalizes the first letter of a string
 * @param str - The input string to capitalize
 * @returns The capitalized string
 */
export const capitalize = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
