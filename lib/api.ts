import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = (folder: string) => join(process.cwd(), folder)

function getPostSlugs(folder: string) {
  return fs.readdirSync(postsDirectory(folder))
}

export function getPostBySlug(folder: string, slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory(folder), `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: { [key: string]: string } = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(folder: string, fields: string[] = []) {
  const slugs = getPostSlugs(folder)
  const posts = slugs
    .map(slug => getPostBySlug(folder, slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.priority > post2.priority ? -1 : 1))
  return posts
}
