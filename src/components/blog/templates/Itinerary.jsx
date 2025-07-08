import { ArrowRightIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid';

export default function Itinerary({ post }) {
  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <img
          src={post.hero.image}
          alt={post.hero.alt}
          className="w-full h-96 object-cover rounded-xl mb-8 shadow-md"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif tracking-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {post.content.description}
        </p>
      </div>

      {/* Timeline Section */}
      <div className="space-y-16">
        {post.content.days.map((day, index) => (
          <section key={index} className="scroll-mt-20" id={`day-${index + 1}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-blue-600 text-white w-12 aspect-square rounded-full flex items-center justify-center font-bold text-base sm:text-xl leading-none">
                {index + 1}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                {day.title}
              </h2>
            </div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-100"></div>

              {/* Activities List */}
              <div className="pl-12">
                {day.activities.map((activity, aIndex) => (
                  <div key={aIndex} className="relative pb-12">
                    {/* Dot */}
                    <div className="absolute left-0 top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-white transform -translate-x-1/2 z-10"></div>

                    {/* Activity Content */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row gap-8">
                        {activity.image && (
                          <div className="md:w-2/5">
                            <img
                              src={activity.image}
                              alt={activity.title}
                              className="w-full h-56 object-cover rounded-lg shadow-sm"
                            />
                          </div>
                        )}
                        <div className={activity.image ? "md:w-3/5" : "w-full"}>
                          <h3 className="text-2xl font-bold mb-3 text-gray-900">
                            {activity.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
                            <span className="flex items-center gap-1">
                              <ClockIcon className="h-4 w-4 text-blue-600" />
                              {activity.time}
                            </span>
                            {activity.location && (
                              <span className="flex items-center gap-1">
                                <MapPinIcon className="h-4 w-4 text-blue-600" />
                                {activity.location}
                              </span>
                            )}
                          </div>
                          <div className="prose text-gray-700 mb-6">
                            {activity.description}
                          </div>
                          {activity.villa && (
                            <div className="mt-6 p-5 bg-gray-50 rounded-lg border border-gray-200">
                              <h4 className="font-medium mb-3 text-gray-900">Featured Accommodation</h4>
                              <div className="flex flex-col md:flex-row gap-5">
                                <img
                                  src={activity.villa.image}
                                  alt={activity.villa.name}
                                  className="md:w-32 md:h-32 w-full h-48 object-cover rounded-lg"
                                />
                                <div>
                                  <h5 className="font-bold text-lg text-gray-900 mb-1">
                                    {activity.villa.name}
                                  </h5>
                                  <p className="text-sm text-gray-600 mb-2 flex items-center gap-1">
                                    <MapPinIcon className="h-3 w-3" />
                                    {activity.villa.location}
                                  </p>
                                  <p className="text-sm text-gray-600 mb-3">
                                    {activity.villa.price}
                                  </p>
                                  <a
                                    href={activity.villa.link}
                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                                  >
                                    View villa details <ArrowRightIcon className="ml-1 h-4 w-4" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Package CTA */}
      <div className="mt-16 p-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white text-center">
        <h2 className="text-3xl font-bold mb-4 font-serif">Book This Itinerary as a Package</h2>
        <p className="mb-8 max-w-3xl mx-auto text-blue-100">
          {post.content.packageText || "Our travel specialists can customize this itinerary to your preferences."}
        </p>
        <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors">
          View Similar Itineraries
        </button>
      </div>
    </article>
  );
}
