import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import VillaCard from '../components/common/VillaCard';
import { villas } from '../data/villas';

// Utility function for consistent location parsing
const parseLocation = (location) => {
  if (!location) return { city: '', country: '' };
  if (location.includes(', ')) {
    const [city, country] = location.split(', ');
    return { city: city.trim(), country: country.trim() };
  }
  return { city: '', country: location.trim() };
};

export default function Villas() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  // Memoized data processing
  const { allRegions, regionCountryMap } = useMemo(() => {
    const allRegions = [...new Set(villas.map(v => v.region))];
    const regionCountryMap = villas.reduce((acc, villa) => {
      const { country } = parseLocation(villa.location);
      if (!acc[villa.region]) {
        acc[villa.region] = new Set();
      }
      acc[villa.region].add(country);
      return acc;
    }, {});
    return { allRegions, regionCountryMap };
  }, []);

  // Process filtered villas
  const filteredVillas = useMemo(() => {
    let results = [...villas];
    const regionParam = searchParams.get('region');
    const countryParam = searchParams.get('country');
    const destinationParam = searchParams.get('destination');

    // Filter by region if selected
    if (selectedRegion || regionParam) {
      const region = selectedRegion || regionParam;
      results = results.filter(villa => villa.region === region);
    }

    // Filter by country if selected
    if (selectedCountry || countryParam) {
      const country = selectedCountry || countryParam;
      results = results.filter(villa => {
        const { country: villaCountry } = parseLocation(villa.location);
        return villaCountry.toLowerCase() === country.toLowerCase();
      });
    }

    // Filter by destination if specified
    if (destinationParam) {
      const normalizedDestination = destinationParam.toLowerCase().trim();
      results = results.filter(villa => {
        const { city } = parseLocation(villa.location);
        return city.toLowerCase().includes(normalizedDestination);
      });
    }

    // Remove duplicates
    return results.filter((villa, index, self) => 
      index === self.findIndex(v => v.id === villa.id)
    );
  }, [selectedRegion, selectedCountry, searchParams]);

  // Initialize state from URL params
  useEffect(() => {
    const regionParam = searchParams.get('region');
    const countryParam = searchParams.get('country');
    const destinationParam = searchParams.get('destination');

    if (regionParam) setSelectedRegion(regionParam);
    if (countryParam) setSelectedCountry(countryParam);

    if (destinationParam && !countryParam) {
      const normalizedDestination = destinationParam.toLowerCase().trim();
      const matchingVilla = villas.find(v => {
        const { city } = parseLocation(v.location);
        return city.toLowerCase().includes(normalizedDestination);
      });

      if (matchingVilla) {
        setSelectedRegion(matchingVilla.region);
        const { country } = parseLocation(matchingVilla.location);
        setSelectedCountry(country);
      }
    }
  }, [searchParams]);

  // Get countries for the selected region
  const countriesForRegion = useMemo(() => {
    if (!selectedRegion) return [];
    return Array.from(regionCountryMap[selectedRegion] || []).sort();
  }, [selectedRegion, regionCountryMap]);

  const handleRegionChange = (e) => {
    const newRegion = e.target.value;
    setSelectedRegion(newRegion);
    setSelectedCountry('');
    
    const params = new URLSearchParams();
    if (newRegion) params.set('region', newRegion);
    const destinationParam = searchParams.get('destination');
    if (destinationParam) params.set('destination', destinationParam);
    setSearchParams(params);
  };

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    
    const params = new URLSearchParams();
    if (selectedRegion) params.set('region', selectedRegion);
    if (newCountry) params.set('country', newCountry);
    const destinationParam = searchParams.get('destination');
    if (destinationParam) params.set('destination', destinationParam);
    setSearchParams(params);
  };

  const resetFilters = () => {
    setSelectedRegion('');
    setSelectedCountry('');
    navigate('/villas', { replace: true });
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Our Luxury Villas</h1>
      
      {/* Region and Country Filters */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
          <select
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="">All Regions</option>
            {allRegions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <select
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 disabled:opacity-50"
            value={selectedCountry}
            onChange={handleCountryChange}
            disabled={!selectedRegion}
          >
            <option value="">All Countries</option>
            {countriesForRegion.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-gray-600">
        {filteredVillas.length > 0 ? (
          <>
            Showing {filteredVillas.length} of {villas.length} villas
            {selectedRegion && ` in ${selectedRegion}`}
            {selectedCountry && `, ${selectedCountry}`}
          </>
        ) : (
          'No villas match your current filters'
        )}
      </div>

      {/* Villas Grid */}
      {filteredVillas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVillas.map(villa => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <div className="max-w-md mx-auto">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No villas found</h3>
            <p className="mt-1 text-gray-500">
              {selectedRegion || selectedCountry || searchParams.get('destination')
                ? "We couldn't find any villas matching your filters."
                : "No villas are currently available in our database."}
            </p>
            <div className="mt-6">
              <button
                onClick={resetFilters}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Reset Filters
              </button>
              <Link
                to="/destinations"
                className="ml-3 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Browse Destinations
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}