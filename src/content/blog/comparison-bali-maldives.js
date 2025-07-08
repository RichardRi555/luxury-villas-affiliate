import baliImg from '../../assets/images/comparisons/comparison-bali-maldives/bali.webp';
import maldivesImg from '../../assets/images/comparisons/comparison-bali-maldives/maldives.webp';

const post = {
  slug: "comparison-bali-maldives",
  template: "Comparison",
  title: "Bali vs Maldives: Which Villa Destination Wins?",
  date: "2025-07-07",
  content: {
    intro: "Trying to decide between a villa in Bali or the Maldives? Here's how they stack up.",
    items: [
      {
        name: "Bali",
        image: baliImg,
        criteria: [
          { value: "Lush jungles and vibrant culture" },
          { value: 4 },
          { value: true }
        ],
        pros: ["Cultural experiences", "Affordable luxury", "Lively nightlife"],
        cons: ["Can be crowded", "Humidity"]
      },
      {
        name: "Maldives",
        image: maldivesImg,
        criteria: [
          { value: "Secluded island paradise" },
          { value: 5 },
          { value: true }
        ],
        pros: ["Incredible overwater villas", "Ultimate privacy", "Stunning marine life"],
        cons: ["Expensive", "Less to explore on land"]
      }
    ],
    criteria: [
      { name: "Scenery", type: "text" },
      { name: "Villa Rating", type: "rating" },
      { name: "Private Pool", type: "check" }
    ],
    recommendation: {
      text: "If you're after cultural immersion and value, choose Bali. For complete seclusion and luxury, Maldives is unbeatable."
    }
  }
};

export default post;