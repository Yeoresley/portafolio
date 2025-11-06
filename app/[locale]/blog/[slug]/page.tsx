import { getPost } from '../../../../lib/blog';

export default async function Post({params}:{params:{slug:string}}){
  const post = await getPost(params.slug);
  return (
    <section className="container py-14 prose max-w-3xl">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="text-xs text-slate-500">{new Date(post.date).toLocaleDateString()}</div>
      <article className="mt-6" dangerouslySetInnerHTML={{__html: post.contentHtml}} />
    </section>
  );
}
