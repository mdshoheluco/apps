import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto mt-10 text-blue-600 visited:text-purple-600">
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}
