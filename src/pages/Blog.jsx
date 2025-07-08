import { getSortedPosts } from '../lib/posts';
import BlogCard from '../components/blog/BlogCard';

export default function Blog() {
  const allPostsData = getSortedPosts();

  return (
    <div className="min-h-screen bg-[#FAFAFA] px-4 py-6 md:py-10 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-[#1C1C1E]">
        VoyaVillas Blog
      </h1>

      <div className="w-full max-w-7xl px-2 sm:px-4">
        {allPostsData.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
