import amalfiHero from '../../assets/images/itineraries/amalfi-hero.webp';
import amalfiVista from '../../assets/images/itineraries/amalfi-vista.webp';

const post = {
  slug: "itinerary-amalfi-7days",
  template: "Itinerary",
  title: "FAKE 7-Day Luxury Villa Itinerary: Amalfi Coast",
  date: "2025-07-07",
  hero: {
    image: amalfiHero,
    alt: "Amalfi Coast coastline view"
  },
  content: {
    description: "Experience the best of Amalfi Coast with this luxury villa itinerary",
    days: [
      {
        title: "Day 1: Arrival & Villa Experience",
        activities: [
          {
            title: "Arrive in Naples",
            time: "Morning",
            location: "Naples International Airport",
            description: "Meet your private driver at the airport for transfer to your villa"
          },
          {
            title: "Villa Check-in & Relaxation",
            time: "Afternoon",
            description: "Settle into your luxury villa and enjoy the amenities"
          },
          {
            title: "Private Chef Dinner",
            time: "Evening",
            description: "Enjoy a welcome dinner prepared by your private chef"
          }
        ]
      },
      {
        title: "Day 2: Positano & Capri Exploration",
        activities: [
          {
            title: "Positano Walking Tour",
            time: "Morning",
            location: "Positano",
            description: "Guided tour of Positano's colorful streets and boutiques"
          },
          {
            title: "Private Boat to Capri",
            time: "Afternoon",
            description: "Private yacht transfer to Capri for island exploration",
            villa: {
              name: "Villa Amalfi Vista",
              image: amalfiVista,
              location: "Amalfi Coast",
              price: "From €1,200/night",
              link: "https://affiliate.link/amalfi-vista"
            }
          }
        ]
      }
    ],
    packageText: "Use our concierge service to customize your own villa itinerary."
  }
};

export default post;