import React from 'react';
import { StarIcon, CheckIcon } from '@heroicons/react/24/solid';

export default function Comparison({ post }) {
  if (!post?.content) return <p className="text-gray-700 p-6">Missing content</p>;

  const { items, criteria, intro, recommendation } = post.content;

  if (!items || !Array.isArray(items)) {
    return <p className="text-gray-700 p-6">Invalid comparison data</p>;
  }

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 font-serif tracking-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {intro}
        </p>
      </header>

      {/* Comparison Table */}
      {Array.isArray(criteria) && criteria.length > 0 && (
        <div className="mb-16 overflow-hidden rounded-xl shadow-sm border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr className="border-b border-gray-200">
                  <th className="py-6 px-6 text-left w-1/4">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Features
                    </span>
                  </th>
                  {items.map((item, index) => (
                    <th key={index} className="py-6 px-6 text-center">
                      <div className="flex flex-col items-center">
                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-full mb-3 border-2 border-white shadow-md"
                          />
                        )}
                        <span className="text-lg font-bold text-gray-900">
                          {item.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {criteria.map((criterion, critIndex) => (
                  <tr key={critIndex} className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 font-medium text-gray-900">
                      {criterion.name}
                    </td>
                    {items.map((item, itemIndex) => (
                      <td key={itemIndex} className="py-5 px-6 text-center">
                        {criterion.type === 'text' && (
                          <span className="text-gray-700">
                            {item.criteria?.[critIndex]?.value || '-'}
                          </span>
                        )}
                        {criterion.type === 'rating' && (
                          <div className="flex items-center justify-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`h-5 w-5 ${
                                  i < item.criteria?.[critIndex]?.value
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        )}
                        {criterion.type === 'check' && (
                          <div className="flex justify-center">
                            {item.criteria?.[critIndex]?.value ? (
                              <CheckIcon className="h-6 w-6 text-green-500" />
                            ) : (
                              <span className="text-gray-300">—</span>
                            )}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Pros & Cons */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-sm"
                />
              )}
              <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
            </div>
            
            <div className="space-y-6">
              {item.pros?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-green-600 flex items-center gap-2">
                    <CheckIcon className="h-5 w-5" />
                    Advantages
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {item.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckIcon className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.cons?.length > 0 && (
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-red-500 flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Considerations
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {item.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation */}
      {recommendation?.text && (
        <div className="p-8 rounded-xl mb-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Our Recommendation</h2>
            <div className="prose text-blue-50 mb-6">
              {recommendation.text}
            </div>
            <div className="flex flex-wrap gap-4">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.link || "#"}
                  className="px-6 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-all font-semibold flex items-center gap-2"
                >
                  View {item.name}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}