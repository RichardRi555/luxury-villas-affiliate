import { Link } from 'react-router-dom';
import VillaCard from '../components/common/VillaCard';
import Testimonial from '../components/common/Testimonial';
import RegionCard from '../components/common/RegionCard';
import { villas } from '../data/villas';
import { destinations } from '../data/destinations';

// Import your region images
import caribbeanImage from '../assets/images/popular_destinations/caribbean.jpg';
import asiaImage from '../assets/images/popular_destinations/asia.jpg';
import euImage from '../assets/images/popular_destinations/EU.jpg';
import naImage from '../assets/images/popular_destinations/NA.jpg';

const regionImages = {
  caribbean: caribbeanImage,
  asia: asiaImage,
  europe: euImage,
  northamerica: naImage,
};

export default function Home() {
  const featuredVillas = villas.slice(0, 3);
  const featuredRegions = destinations.regions.slice(0, 4);

  return (
    <div className="bg-[#FAFAFA] text-[#1C1C1E]">
      {/* Hero Section */}
      <section className="relative h-96 bg-[#1C1C1E] text-[#FAFAFA]">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Discover Luxury Villas</h1>
            <p className="text-xl mb-8 font-light">Experience the finest vacation rentals around the world</p>
            <Link 
              to="/destinations" 
              className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Regions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1C1C1E]">Popular Regions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRegions.map(region => {
              // Normalize region name key for matching images
              const key = region.name.toLowerCase().replace(/\s+/g, '');
              return (
                <RegionCard 
                  key={region.name}
                  region={{
                    ...region,
                    image: regionImages[key] || null,
                  }}
                />
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/destinations" 
              className="inline-block bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold transition-colors"
            >
              View All Regions
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Villas */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1C1C1E]">Featured Villas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVillas.map(villa => (
              <VillaCard key={villa.id} villa={villa} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/villas" 
              className="inline-block bg-blue-600 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold transition-colors"
            >
              View All Villas
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1C1C1E]">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonial 
              quote="The villa was absolutely stunning and exceeded all our expectations." 
              author="Sarah Johnson" 
              location="New York" 
            />
            <Testimonial 
              quote="Best vacation ever! The service was impeccable and the views breathtaking." 
              author="Michael Chen" 
              location="London" 
            />
            <Testimonial 
              quote="We'll definitely be coming back. The perfect luxury getaway." 
              author="Emma Rodriguez" 
              location="Dubai" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}
