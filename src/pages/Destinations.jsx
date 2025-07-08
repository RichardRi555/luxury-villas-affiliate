// pages/Destinations.jsx
import DestinationCard from '../components/common/DestinationCard';
import { destinations } from '../data/destinations';
import defaultImage from '../assets/images/destinations/default.webp';

// Auto-import all destination images
const imageContext = require.context(
  '../assets/images/destinations/',
  false,
  /\.webp$/
);

// Create image mapping
const destinationImageMap = {};
imageContext.keys().forEach(key => {
  const destinationKey = key
    .replace('./', '')
    .replace('.webp', '') // Updated extension
    .replace(/-/g, ' ') // Convert hyphens to spaces
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize first letters

  destinationImageMap[destinationKey] = imageContext(key).default || imageContext(key);
});

export default function Destinations() {
  // Smart image getter with multiple matching strategies
  const getDestinationImagePath = (destinationName) => {
    // 1. Try exact match
    if (destinationImageMap[destinationName]) {
      return destinationImageMap[destinationName];
    }

    // 2. Try city name only (before comma)
    const cityName = destinationName.split(',')[0].trim();
    if (destinationImageMap[cityName]) {
      return destinationImageMap[cityName];
    }

    // 3. Try case-insensitive match
    const lowerDestination = destinationName.toLowerCase();
    const foundKey = Object.keys(destinationImageMap).find(key => 
      key.toLowerCase() === lowerDestination
    );
    if (foundKey) {
      return destinationImageMap[foundKey];
    }

    // 4. Try partial match in city name
    const partialMatchKey = Object.keys(destinationImageMap).find(key => 
      cityName.toLowerCase().includes(key.toLowerCase()) ||
      key.toLowerCase().includes(cityName.toLowerCase())
    );
    if (partialMatchKey) {
      return destinationImageMap[partialMatchKey];
    }

    // 5. Fallback to default
    return defaultImage;
  };

  // Region detection
  const getRegionForCountry = (countryName) => {
    if (destinations.tier1.some(c => c.country === countryName)) return 'tier1';
    if (destinations.tier2.some(c => c.country === countryName)) return 'tier2';
    if (destinations.tier3.some(c => c.country === countryName)) return 'tier3';
    return '';
  };

const renderDestinationCards = (tier, tierKey) => {
  return tier.flatMap((country) =>
    country.destinations.map((dest, index) => {
      // Extract clean destination name (remove parentheses)
      const destinationName = dest.includes('(') 
        ? dest.split('(')[0].trim()
        : dest;
      
      return (
        <DestinationCard
          key={`${tierKey}-${country.country}-${index}`}
          destination={{
            name: dest, // Keep original name for display
            country: country.country,
            image: getDestinationImagePath(destinationName),
            region: getRegionForCountry(country.country)
          }}
        />
      );
    })
  );
};

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Explore Luxury Destinations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the world's most exquisite villa destinations, from tropical paradises to alpine retreats
        </p>
      </div>

      {/* Tier 1 Destinations */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Most Popular Luxury Destinations</h2>
          <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
            {destinations.tier1.reduce((sum, country) => sum + country.destinations.length, 0)} destinations
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderDestinationCards(destinations.tier1, 't1')}
        </div>
      </section>

      {/* Tier 2 Destinations */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Emerging Luxury Hotspots</h2>
          <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
            {destinations.tier2.reduce((sum, country) => sum + country.destinations.length, 0)} destinations
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderDestinationCards(destinations.tier2, 't2')}
        </div>
      </section>

      {/* Tier 3 Destinations */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Exclusive & Remote Escapes</h2>
          <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
            {destinations.tier3.reduce((sum, country) => sum + country.destinations.length, 0)} destinations
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderDestinationCards(destinations.tier3, 't3')}
        </div>
      </section>
    </div>
  );
}