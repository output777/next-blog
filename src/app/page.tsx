import {getFeaturedPosts} from '@/service/posts';
import Image from 'next/image';
import Link from 'next/link';

export default async function HomePage() {
  const featuredPosts = await getFeaturedPosts();
  return (
    <section className="h-full w-full bg-slate-900">
      <h3 className="text-slate-50 p-5 font-bold text-xl">추천 포스트</h3>
      <div className="text-slate-50 flex flex-wrap gap-12 px-10">
        {featuredPosts.map((post) => (
          <>
            <Link href={`/posts/${post.id}`}>
              <div key={post.id} className="bg-gray-950 text-center">
                <Image src={`/images/${post.img}`} alt={post.title} width={250} height={250} />
                <p className="text-right p-2 text-sm">{post.date}</p>
                <p className="p-0.3 font-bold">{post.title}</p>
                <p className="p-0.5 text-sm">{post.subTitle}</p>
                <p className="p-0.5 bg-cyan-500 inline-block rounded-full px-2 mt-1 mb-3">
                  {post.category}
                </p>
              </div>
            </Link>
          </>
        ))}
      </div>
    </section>
  );
}
