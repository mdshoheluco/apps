import Link from 'next/link';
import React from 'react';

const getPosts = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
  return posts.json();
};

const Posts = async () => {
  const data = await getPosts();
  return (
    <>
      <div className='grid gap-4 grid-cols-4 container mx-auto mt-6 mb-6'>
        {data.map((post: any) => {
          return (
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={post.id}>
              <Link href={`posts/${post.id}`}>{post.title}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Posts;