export default function Testimonial({ quote, author, location }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <p className="italic mb-4">"{quote}"</p>
      <p className="font-semibold">{author}</p>
      <p className="text-gray-600">{location}</p>
    </div>
  );
}