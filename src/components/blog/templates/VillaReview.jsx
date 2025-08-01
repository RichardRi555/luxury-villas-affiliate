import { useState } from 'react';
import { CheckCircleIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function VillaReview({ post }) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = post.content.gallery.map((url) => ({ src: url }));

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      {/* Hero Section */}
      <header className="mb-16">
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
          <img
            src={post.content.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 font-serif tracking-tight">
          {post.title}
        </h1>
      </header>

      {/* Quick Facts */}
      <div className="mb-16 grid md:grid-cols-3 gap-6 bg-gray-50 p-8 rounded-xl border border-gray-200">
        <div className="border-b md:border-b-0 md:border-r border-gray-200 md:pr-6 pb-4 md:pb-0">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Location</h3>
          <p className="text-lg text-gray-900">{post.content.location}</p>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-gray-200 md:pr-6 md:pl-6 pb-4 md:pb-0">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Capacity</h3>
          <p className="text-lg text-gray-900">{post.content.maxGuests} guests</p>
        </div>
        <div className="md:pl-6 pt-4 md:pt-0">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Price Range</h3>
          <p className="text-lg text-gray-900">{post.content.pricePerNight}</p>
        </div>
      </div>

      {/* Highlights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 font-serif">Property Highlights</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {post.content.highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">{highlight}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 font-serif">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {post.content.gallery.map((image, i) => (
            <button
              key={i}
              className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow focus:outline-none"
              onClick={() => {
                setCurrentIndex(i);
                setOpen(true);
              }}
            >
              <img
                src={image}
                alt={`${post.title} view`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images}
          index={currentIndex}
          on={{ view: ({ index }) => setCurrentIndex(index) }}
        />
      </section>

      {/* Testimonial */}
      {post.content.testimonial && (
        <div className="mb-16 p-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-600">
          <blockquote className="max-w-3xl mx-auto">
            <p className="text-xl italic text-gray-700 mb-6">"{post.content.testimonial.quote}"</p>
            <footer className="font-medium text-gray-900">
              — {post.content.testimonial.name}
            </footer>
          </blockquote>
        </div>
      )}

      {/* Nearby Attractions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 font-serif">Nearby Attractions</h2>
        <div className="space-y-6">
          {post.content.nearbyAttractions.map((attraction, i) => (
            <div key={i} className="flex gap-6 items-center p-5 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex-shrink-0">
                <div className="h-14 w-14 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPinIcon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-medium text-gray-900">{attraction}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-col items-center p-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-white">
        <h3 className="text-3xl font-bold mb-4 font-serif text-center">Ready to Experience {post.title}?</h3>
        <p className="text-blue-100 mb-8 max-w-2xl text-center">
          Contact us for personalized booking assistance and special offers.
        </p>
        <a
          href={post.content.bookingLink}
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-700 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-colors max-w-full sm:max-w-max"
        >
          <span className="block text-center sm:inline">
            Check Availability
          </span>
          <ArrowRightIcon className="ml-2 h-5 w-5 hidden sm:inline" />
        </a>
      </div>
    </article>
  );
}
