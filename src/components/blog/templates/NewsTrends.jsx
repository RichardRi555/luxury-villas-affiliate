import { ArrowRightIcon } from '@heroicons/react/24/solid';

export default function NewsTrends({ post }) {
  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 uppercase tracking-wider">
          <span>{post.meta.category}</span>
          <span>•</span>
          <span>{post.meta.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif tracking-tight">
          {post.title}
        </h1>
        <div className="mb-10">
          <img
            src={post.hero.image}
            alt={post.hero.alt}
            className="w-full h-96 object-cover rounded-xl shadow-md mb-4"
          />
          {post.hero.caption && (
            <p className="text-lg text-gray-600 text-center italic">
              {post.hero.caption}
            </p>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        {post.content.sections.map((section, index) => (
          <section key={index} className="mb-16">
            {section.title && (
              <h2 className="text-3xl font-bold mb-6 text-gray-900 font-serif">
                {section.title}
              </h2>
            )}
            <div className="space-y-8 text-gray-700">
              {section.content.map((content, cIndex) => {
                if (content.type === 'paragraph') {
                  return <p key={cIndex} className="leading-relaxed">{content.text}</p>;
                }
                if (content.type === 'quote') {
                  return (
                    <blockquote 
                      key={cIndex} 
                      className="border-l-4 border-blue-600 pl-6 py-4 my-6 bg-blue-50 rounded-r-lg"
                    >
                      <p className="text-xl italic text-gray-700">
                        "{content.text}"
                      </p>
                      {content.author && (
                        <footer className="mt-4 not-italic font-medium text-gray-800">
                          — {content.author}
                        </footer>
                      )}
                    </blockquote>
                  );
                }
                if (content.type === 'image') {
                  return (
                    <figure key={cIndex} className="my-8">
                      <img
                        src={content.url}
                        alt={content.alt}
                        className="w-full rounded-xl shadow-sm"
                      />
                      {content.caption && (
                        <figcaption className="text-center text-sm text-gray-500 mt-3">
                          {content.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                if (content.type === 'villa') {
                  return (
                    <div key={cIndex} className="p-6 bg-gray-50 rounded-xl my-8 border border-gray-200">
                      <h3 className="text-xl font-bold mb-4 text-gray-900">
                        Featured Villa: {content.name}
                      </h3>
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={content.image}
                          alt={content.name}
                          className="md:w-1/3 w-full h-56 object-cover rounded-lg shadow-sm"
                        />
                        <div className="md:w-2/3">
                          <p className="text-gray-700 mb-4">{content.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                            <span className="flex items-center gap-1">
                              <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {content.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {content.price}
                            </span>
                          </div>
                          <a
                            href={content.link}
                            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                          >
                            Learn more about this property <ArrowRightIcon className="ml-1 h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Related News */}
      {post.content.related && (
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 font-serif border-b border-gray-200 pb-4">
            More Luxury Travel Updates
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {post.content.related.map((item, index) => (
              <div 
                key={index} 
                className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500 uppercase tracking-wider">
                    {item.date}
                  </span>
                  <h3 className="font-bold text-xl mb-3 text-gray-900">
                    <a 
                      href={item.link} 
                      className="hover:text-blue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  </h3>
                  <p className="text-gray-600">{item.excerpt}</p>
                  <a 
                    href={item.link} 
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read more <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}