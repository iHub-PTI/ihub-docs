import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = (folder: string[]) => join(process.cwd(), ...folder)

function getPostSlugs(folder: string[]) {
  return fs.readdirSync(postsDirectory(folder))
}

export function getPostBySlug(folder: string[], slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory(folder), `${decodeURIComponent(realSlug)}.md`)
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

export function getAllPosts(folder: string[], fields: string[] = []) {
  const slugs = getPostSlugs(folder)
  const posts = slugs
    .map(slug => getPostBySlug(folder, slug, fields))
    .sort((post1, post2) => (post1.priority > post2.priority ? -1 : 1))
  return posts
}

const dotFiles = (item: string) => !/(^|\/)\.[^\/\.]/g.test(item)

export function getAllDocs(fields: string[] = ['slug', 'priority']) {
  const repos = getPostSlugs(['docs']).filter(dotFiles)

  const docs = repos.map(repo => {
    const folder = ['docs', repo]
    const slugs = getPostSlugs(folder)
      .filter(dotFiles)
      .map(str => encodeURIComponent(str))

    const posts = slugs
      .map(slug => getPostBySlug(folder, slug, fields))
      .sort((post1, post2) => (post1.priority > post2.priority ? -1 : 1))

    const priority = posts[0]?.priority || 0

    return { repo, posts, priority }
  })

  return docs.sort((post1, post2) => (post1.priority > post2.priority ? -1 : 1))
}
