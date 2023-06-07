import path from 'path';
import {promises as fs} from 'fs';

export type Post = {
  id: string;
  title: string;
  date: string;
  subTitle: string;
  category: string;
  img: string;
};

export async function getFeaturedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'featuredPosts.json');
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data);
}

export async function getFeaturedPost(id: string): Promise<Post | undefined> {
  const featuredPosts = await getFeaturedPosts();
  return featuredPosts.find((post) => post.id === id);
}
