export default function Contact() {
  return (
    <div className="h-[70vh] bg-[#FAFAFA] flex flex-col justify-center px-4 py-1 md:py-2">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 md:mb-8 text-[#1C1C1E]">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 text-left">
          {/* Get in Touch Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#1C1C1E]">
              Get in Touch
            </h2>
            <p className="text-[#333333] mb-4 md:mb-5 text-base md:text-lg">
              For inquiries about our <strong>VoyaVillas</strong> or booking information, please email us directly:
            </p>

            <div className="bg-blue-600 p-4 md:p-5 rounded-lg border border-blue-700 max-w-md mx-auto md:mx-0">
              <a
                href="mailto:your@email.com?subject=VoyaVillas Inquiry"
                className="inline-flex items-center gap-3 text-[#FAFAFA] text-base md:text-lg font-medium hover:text-blue-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 md:h-6 w-5 md:w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                your@email.com
              </a>
              <p className="mt-2 text-sm md:text-base text-blue-100 max-w-sm mx-auto md:mx-0">
                We typically respond within 24 hours. For urgent inquiries, please include <em>"URGENT"</em> in your subject line.
              </p>
            </div>

            <p className="text-[#333333] mt-5 md:mt-6 max-w-md mx-auto md:mx-0 text-base md:text-lg">
              Alternatively, you can reach us during business hours.
            </p>
          </div>

          {/* Our Information Section */}
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-[#1C1C1E] text-center md:text-left">
              Our Information
            </h2>
            <address className="not-italic space-y-4 text-[#333333] max-w-md mx-auto md:mx-0 text-base md:text-lg">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-[#1C1C1E] mb-1">Business Hours</p>
                  <p>Monday - Friday: 9AM - 5PM EST</p>
                  <p>Weekends: By appointment</p>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
