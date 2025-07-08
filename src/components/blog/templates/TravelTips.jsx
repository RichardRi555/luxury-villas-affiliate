import { LightBulbIcon, MapPinIcon } from '@heroicons/react/24/solid';

export default function TravelTips({ post }) {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Header */}
      <header className="mb-16">
        <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">
          {post.meta.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 text-gray-900 font-serif tracking-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
          {post.content.intro}
        </p>
      </header>

      {/* Tips List */}
      <div className="space-y-16">
        {post.content.tips.map((tip, index) => (
          <section 
            key={index} 
            className="scroll-mt-20 bg-gray-50 p-8 rounded-xl border border-gray-100"
            id={`tip-${index}`}
          >
            <div className="flex items-start gap-6">
              <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                <LightBulbIcon className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 font-serif">
                  {tip.title}
                </h2>
                <div className="prose text-gray-700 mb-6">
                  {tip.content}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Recommended Villas - moved outside tips loop */}
      {post.content.inlineVillas && (
        <div className="mt-20 space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 font-serif">Recommended Villas</h3>
          <div className="space-y-3">
            {post.content.inlineVillas.map((villa, i) => (
              <a
                key={i}
                href={villa.link}
                className="flex items-center gap-2 p-3 -m-3 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <MapPinIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-blue-600">
                    {villa.name}
                  </p>
                  <p className="text-sm text-gray-600">{villa.location}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Final CTA */}
      <div className="mt-20 p-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white text-center">
        <h3 className="text-3xl font-bold mb-4 font-serif">Ready to Plan Your Luxury Escape?</h3>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Let us help you create unforgettable travel experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 py-3 bg-white text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Browse All Villas
          </button>
          <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
            View Travel Guides
          </button>
        </div>
      </div>
    </article>
  );
}
