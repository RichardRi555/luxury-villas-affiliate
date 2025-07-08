import { Link } from 'react-router-dom';

export default function RegionCard({ region }) {
  return (
    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img 
        src={region.image} 
        alt={region.name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1C1C1E] bg-opacity-60 flex flex-col items-center justify-center p-6 text-center">
        <h3 className="text-2xl font-extrabold text-[#FAFAFA] mb-1 drop-shadow-md">{region.name}</h3>
        <p className="text-[#F5F5F5] mb-6 font-light drop-shadow-sm">{region.count} luxury villas</p>
        <Link 
          to={`/villas?region=${encodeURIComponent(region.name)}`}
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
        >
          Explore Villas
        </Link>
      </div>
    </div>
  );
}
