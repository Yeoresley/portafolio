import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export type PostMeta = { slug:string; title:string; date:string; excerpt?:string; };
export type Post = PostMeta & { contentHtml:string; };

export function getAllPostsMeta(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  return files.map(f => {
    const slug = f.replace(/\.md$/, '');
    const file = fs.readFileSync(path.join(postsDir,f),'utf-8');
    const { data } = matter(file);
    return { slug, title: data.title || slug, date: data.date || '', excerpt: data.excerpt || '' };
  }).sort((a,b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug:string): Promise<Post> {
  const fullPath = path.join(postsDir, slug + '.md');
  const file = fs.readFileSync(fullPath,'utf-8');
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return { slug, title:data.title || slug, date:data.date || '', excerpt:data.excerpt || '', contentHtml };
}
