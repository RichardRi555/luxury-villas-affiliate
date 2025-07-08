import { useParams } from 'react-router-dom';
import { getPostData } from '../lib/posts';

// Import all templates
import DestinationGuide from '../components/blog/templates/DestinationGuide';
import VillaReview from '../components/blog/templates/VillaReview';
import TopList from '../components/blog/templates/TopList';
import TravelTips from '../components/blog/templates/TravelTips';
import Comparison from '../components/blog/templates/Comparison';
import Itinerary from '../components/blog/templates/Itinerary';
import NewsTrends from '../components/blog/templates/NewsTrends';

const templateComponents = {
  'destination-guide': DestinationGuide,
  'villa-review': VillaReview,
  'top-list': TopList,
  'travel-tips': TravelTips,
  'comparison': Comparison,
  'itinerary': Itinerary,
  'news-trends': NewsTrends,
};

function normalizeTemplateKey(template) {
  return template.toLowerCase().replace(/\s+/g, '-');
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostData(slug);

  if (!post) {
    return <div className="container mx-auto px-4 py-12">Post not found</div>;
  }

  // Normalize template key to match your keys
  const normalizedTemplate = normalizeTemplateKey(post.template);
  const Template = templateComponents[normalizedTemplate] || DestinationGuide;
  
  return (
    <div className="container mx-auto px-4 py-12">
      <Template post={post} />
    </div>
  );
}
