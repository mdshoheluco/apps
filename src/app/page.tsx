import { Post } from '@/utilities/prisma';
import Link from 'next/link';

async function getPosts() {
  const allPosts = await Post.findMany();
  return allPosts;
}

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div className="container mx-auto mt-10 text-blue-600 visited:text-purple-600">
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}
