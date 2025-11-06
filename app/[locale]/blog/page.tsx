import Link from 'next/link';
import { getAllPostsMeta } from '../../../lib/blog';

export const dynamic = 'force-static';

export default async function Blog(){
  const posts = getAllPostsMeta();
  return (
    <section className="container py-14">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-slate-600">Notas técnicas, lanzamientos y buenas prácticas.</p>
      <div className="mt-8 space-y-6">
        {posts.map(p => (
          <article key={p.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold"><Link href={`./blog/${p.slug}`}>{p.title}</Link></h2>
            <div className="text-xs text-slate-500">{new Date(p.date).toLocaleDateString()}</div>
            <p className="mt-2 text-slate-700">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
