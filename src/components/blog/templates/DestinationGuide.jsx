import React from "react";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'; // ✅ Import Link

export default function DestinationGuide({ post }) {
  if (!post?.content) return <p className="text-gray-700 p-6">Missing content</p>;

  const {
    overview,
    bestTimeToVisit,
    topAttractions,
    recommendedVillas,
    travelTips
  } = post.content;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Hero Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif tracking-tight">
          {post.title}
        </h1>
        {post.date && (
          <p className="text-gray-500 uppercase tracking-wider text-sm">
            Published {post.date}
          </p>
        )}
      </header>

      {/* Overview Section */}
      <section className="mb-16">
        <div className="bg-gray-50 p-8 rounded-xl mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 border-b border-gray-200 pb-4">
            Destination Overview
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            {overview}
          </p>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 font-serif">
          Best Time to Visit
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 space-y-4">
          {Array.isArray(bestTimeToVisit) ? (
            bestTimeToVisit.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="text-gray-700 leading-relaxed">{bestTimeToVisit}</p>
          )}
        </div>
      </section>

      {/* Top Attractions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 font-serif">
          Top Attractions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {topAttractions?.map((attraction, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <span className="text-blue-600 font-medium">{i + 1}</span>
              </div>
              <p className="text-gray-700">{attraction}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Villas */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 font-serif">
          Recommended Villas
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {recommendedVillas?.map((villa, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              {villa.image && (
                <img
                  src={villa.image}
                  alt={villa.name}
                  className="w-full h-56 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{villa.name}</h3>
                <p className="text-gray-600 mb-4">{villa.description}</p>
                {villa.link && (
                  <a
                    href={villa.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Villa <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 font-serif">
          Travel Tips
        </h2>
        <div className="space-y-6">
          {travelTips?.map((tip, i) => (
            <div key={i} className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-600 text-white p-2 rounded-full flex-shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Experience This Destination?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Discover more luxury destinations for your next vacation.
        </p>
        
        {/* ✅ Link to /villas */}
        <Link to="/villas">
          <button className="px-10 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:bg-opacity-10 transition-all font-semibold text-lg">
            Browse All Villas
          </button>
        </Link>
      </div>
    </article>
  );
}
