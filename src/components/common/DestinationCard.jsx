import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function DestinationCard({ destination }) {
  const [imageError, setImageError] = useState(false);
  const [currentImage, setCurrentImage] = useState(destination.image);

  useEffect(() => {
    setImageError(false);
    setCurrentImage(destination.image);
  }, [destination.image]);

  const getVillaFilterParams = () => {
    const params = new URLSearchParams();
    
    if (destination.name.includes('Bali (')) {
      params.set('destination', 'Bali');
      params.set('country', 'Indonesia');
    } else if (destination.name.includes('(')) {
      const baseName = destination.name.split('(')[0].trim();
      params.set('destination', baseName);
      params.set('country', destination.country);
    } else if (destination.country) {
      params.set('destination', destination.name);
      params.set('country', destination.country);
    } else {
      params.set('country', destination.name);
    }

    return params.toString();
  };

  const getDisplayName = () => {
    if (destination.name.includes('(')) {
      return destination.name.split('(')[0].trim();
    }
    return destination.name;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img 
            src={currentImage}
            alt={`${destination.name}, ${destination.country}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={() => {
              console.log('Image failed to load:', currentImage);
              setImageError(true);
            }}
            loading="lazy"
            decoding="async"
            width={800}
            height={600}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Image not available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-30 transition-all duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-1 text-gray-800">{getDisplayName()}</h3>
        <p className="text-gray-600 mb-4">{destination.country}</p>
        <Link 
          to={`/villas?${getVillaFilterParams()}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
          aria-label={`View villas in ${getDisplayName()}, ${destination.country}`}
        >
          View Villas
        </Link>
      </div>
    </div>
  );
}
