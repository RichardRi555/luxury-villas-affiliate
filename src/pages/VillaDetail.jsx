import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { villas } from '../data/villas';

export default function VillaDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const villa = villas.find(v => v.id === parseInt(id));

  useEffect(() => {
    if (!villa) {
      navigate('/villas');
      return;
    }

    console.log(`Redirecting to affiliate link for ${villa.name}`);

    const redirectTimer = setTimeout(() => {
      window.location.href = villa.affiliateLink;
    }, 1500);

    return () => clearTimeout(redirectTimer);
  }, [villa, navigate]);

  if (!villa) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-4">Redirecting to {villa.name}</h1>
        
        <div className="mb-6">
          <img 
            src={villa.image} 
            alt={villa.name} 
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600 mb-2">{villa.location}</p>
          <p className="text-lg font-semibold text-blue-600 mb-4">{villa.price}</p>
        </div>

        <div className="animate-pulse mb-6">
          <p className="text-gray-700">You're being redirected to our partner's booking page...</p>
          <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-2 bg-blue-500 rounded-full"
              style={{
                animation: 'progress 1.5s linear forwards',
                width: '0%'
              }}
            ></div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          If you're not redirected automatically,{' '}
          <a 
            href={villa.affiliateLink} 
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to continue
          </a>.
        </p>
      </div>
    </div>
  );
}