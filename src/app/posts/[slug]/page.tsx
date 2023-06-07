import {getFeaturedPost, getFeaturedPosts} from '@/service/posts';
import {NOTFOUND} from 'dns';

type Props = {
  params: {
    slug: string;
  };
};
export default async function postPage({params: {slug}}: Props) {
  const featuredPost = await getFeaturedPost(slug);

  // 서버 파일에 있는 데이터중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <div>{featuredPost?.title}</div>;
}

export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줌(SSG)
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.id,
  }));
}
