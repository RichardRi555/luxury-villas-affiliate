import { ArrowRightIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function TopList({ post }) {
  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Hero Section */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif tracking-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {post.content.intro}
        </p>
      </header>

      {/* List Items */}
      <div className="space-y-20">
        {post.content.villas.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            {/* Number */}
            <div className="hidden md:block pt-2 min-w-[40px] text-right">
              <span className="text-3xl font-semibold text-blue-700 tracking-wide font-serif">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Villa Card */}
            <div className="flex-1 flex flex-col md:flex-row gap-10 group hover:bg-gray-50 p-6 rounded-xl transition-colors">
              {/* Image */}
              <div className="md:w-2/5">
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="md:w-3/5">
                <h2 className="text-3xl font-bold mb-3 text-gray-900 font-serif">
                  {item.name}
                </h2>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPinIcon className="h-5 w-5 text-blue-600" />
                  <span>{item.location}</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline"
                >
                  View Villa Details
                  <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary CTA */}
      <div className="mt-20 text-center bg-gradient-to-r from-blue-600 to-blue-800 p-10 rounded-xl text-white">
        <h3 className="text-3xl font-bold mb-4 font-serif">Find Your Perfect Villa</h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          {post.content.callToAction || "Browse our curated collection of luxury properties."}
        </p>
        <button className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-all font-semibold text-lg">
          Browse All Villas
        </button>
      </div>
    </article>
  );
}
