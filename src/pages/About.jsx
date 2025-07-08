export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] py-20 px-6">
      <div className="container mx-auto max-w-4xl font-sans">
        <h1 className="text-5xl font-extrabold mb-12 text-[#1C1C1E]">
          About VoyaVillas
        </h1>
        
        <div className="space-y-12 text-[#2C2C2E] leading-relaxed text-lg">
          <p>
            At <span className="font-semibold text-[#003366]">VoyaVillas</span>, we specialize in curating the finest collection of <span className="font-semibold text-[#003366]">luxury villas</span> and <span className="font-semibold text-[#003366]">exclusive vacation rentals</span> in the world's most breathtaking destinations. Whether you're dreaming of a serene beachfront retreat, a chic city escape, or a secluded mountain hideaway, we connect discerning travelers with properties that deliver unforgettable, high-end travel experiences.
          </p>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-[#1C1C1E]">What Sets Us Apart</h2>
            <p>
              Our commitment to quality goes beyond listings — <span className="font-semibold text-[#1A3E5F]">every villa is handpicked and personally inspected</span> by our experienced team to meet our rigorous standards of luxury, comfort, and service. From world-class amenities to attentive concierge support, we ensure that each property offers more than just a place to stay — it offers a lifestyle.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-[#1C1C1E]">Global Reach, Personal Touch</h2>
            <p>
              With a global portfolio spanning Europe, the Caribbean, Asia, and beyond, we combine international reach with a <span className="font-semibold text-[#003366]">personalized approach</span>. Our travel experts work closely with clients to understand their unique preferences, ensuring a seamless booking experience from inquiry to check-out.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-[#1C1C1E]">Why Choose VoyaVillas?</h2>
            <ul className="list-disc list-inside space-y-3 text-[#2C2C2E] text-lg">
              <li><span className="font-semibold text-[#003366]">Verified Luxury Properties</span>: We only list villas that meet our standards for elegance, privacy, and exceptional service.</li>
              <li><span className="font-semibold text-[#003366]">Personalized Travel Planning</span>: Tailored recommendations and concierge services to elevate your stay.</li>
              <li><span className="font-semibold text-[#003366]">Trusted by Travelers Worldwide</span>: Our reputation is built on reliability, transparency, and a passion for excellence.</li>
            </ul>
          </section>

          <p className="text-lg text-[#2C2C2E] font-medium">
            Whether you're planning a romantic getaway, a family reunion, or a corporate retreat, <span className="font-semibold text-[#003366]">VoyaVillas</span> is your trusted partner in luxury travel.
          </p>
        </div>
      </div>
    </div>
  );
}
