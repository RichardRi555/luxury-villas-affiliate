import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <article className="mb-10 pb-10 border-b border-[#d4d4d4] last:border-0 transition-transform duration-300 hover:scale-[1.01]">
      <div className="flex flex-col md:flex-row gap-6 bg-[#F0F0F0] p-5 rounded-xl shadow-sm">
        <div className="md:w-1/3">
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-48 md:h-56 object-cover rounded-lg"
          />
        </div>
        <div className="md:w-2/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center flex-wrap gap-2 text-sm text-[#666] mb-2">
              <span>{post.date}</span>
              <span className="text-[#bbb]">•</span>
              <span>{post.category}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-[#1C1C1E] hover:text-[#1A3E5F] transition-colors">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-[#333] mb-4 leading-relaxed">{post.excerpt}</p>
          </div>
          <Link
            to={`/blog/${post.slug}`}
            className="self-start text-blue-600 hover:text-blue-800 font-semibold transition-colors text-sm tracking-wide"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
