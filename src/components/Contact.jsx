import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" className="section-offset py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-secondary font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sm">
            Contact Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-3">
            Let's Build Your Dream Project
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-7 sm:leading-8">
            Kobac Construction provides modern construction services with
            professional planning and quality execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          <div className="bg-primary rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-2xl">
            <p className="text-secondary font-semibold uppercase tracking-[0.2em] text-sm">
              Contact Information
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold mt-4">
              Get In Touch With Kobac Construction
            </h3>

            <p className="mt-4 text-white/80 leading-7 sm:leading-8">
              Planning a new construction project or renovation? Our team is
              ready to discuss your ideas and help turn them into reality.
            </p>

            <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-6">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <div className="bg-secondary p-3 rounded-xl text-white text-xl shrink-0">
                  <FaPhone />
                </div>
                <div className="min-w-0">
                  <p className="text-white/70 text-sm">Phone Number</p>
                  <p className="font-semibold text-base sm:text-lg break-words">+252 61 6650291</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <div className="bg-secondary p-3 rounded-xl text-white text-xl shrink-0">
                  <FaEnvelope />
                </div>
                <div className="min-w-0">
                  <p className="text-white/70 text-sm">Email Address</p>
                  <p className="font-semibold text-base sm:text-lg break-all">
                    info@kobacconstraction.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl">
                <div className="bg-secondary p-3 rounded-xl text-white text-xl shrink-0">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <p className="font-semibold text-base sm:text-lg">Mogadishu, Somalia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary">Request a Quote</h3>

            <p className="text-gray-600 mt-3">
              Send us a message and we will contact you shortly.
            </p>

            <form className="mt-8 space-y-4 sm:space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-secondary"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full border border-gray-200 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full sm:w-auto bg-secondary text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}