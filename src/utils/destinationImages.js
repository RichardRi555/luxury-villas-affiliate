// src/utils/destinationImages.js
const imageCache = {};

function importAll(r) {
  r.keys().forEach(key => {
    const destinationName = key
      .replace('./', '')
      .replace('.jpg', '')
      .replace('.jpeg', '')
      .replace('.png', '')
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    imageCache[destinationName] = r(key).default || r(key);
  });
}

// Import all images from the destinations folder
importAll(require.context('../assets/images/destinations/', false, /\.(jpe?g|png)$/));

export function getDestinationImage(destinationName) {
  // Try exact match first
  if (imageCache[destinationName]) {
    return imageCache[destinationName];
  }

  // Try matching just the city name (before comma)
  const cityName = destinationName.split(',')[0].trim();
  if (imageCache[cityName]) {
    return imageCache[cityName];
  }

  // Try case-insensitive match
  const lowerName = destinationName.toLowerCase();
  for (const key in imageCache) {
    if (key.toLowerCase() === lowerName) {
      return imageCache[key];
    }
  }

  return null;
}