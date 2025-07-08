import { Link } from 'react-router-dom';

export default function VillaCard({ villa }) {
  return (
    <div className="bg-[#FAFAFA] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img 
          src={villa.image} 
          alt={villa.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold shadow-md">
          {villa.price}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-[#1C1C1E] text-xl font-extrabold mb-1">{villa.name}</h3>
        <p className="text-[#3B3B3B] mb-3 font-medium">{villa.location}</p>
        
        <div className="flex flex-wrap gap-4 text-[#1C1C1E] text-sm mb-4 font-semibold">
          <span>{villa.bedrooms} BR</span>
          <span>{villa.bathrooms} BA</span>
          <span>Sleeps {villa.guests}</span>
          <span>{villa.size}</span>
        </div>

        <p className="text-[#3B3B3B] text-sm mb-5 line-clamp-2">{villa.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-blue-600 font-semibold">
            <span className="text-yellow-400">★</span>
            <span>{villa.rating}</span>
          </div>
          <Link 
            to={`/villas/${villa.id}`} 
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-sm font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
