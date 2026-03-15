export default function About() {
  return (
    <section id="about" className="section-offset py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-secondary font-semibold uppercase tracking-[0.25em]">
            About Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary leading-tight">
            Strong Foundations, Modern Vision
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Kobac Construction is a trusted construction company focused on
            delivering high-quality residential, commercial, and infrastructure
            projects with precision, safety, and innovation.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            We combine design, planning, engineering, and execution to create
            structures that are strong, elegant, and built to last.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"
            alt="Building"
            className="rounded-3xl h-64 md:h-72 w-full object-cover shadow-soft"
          />
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
            alt="Construction team"
            className="rounded-3xl h-64 md:h-72 w-full object-cover shadow-soft mt-10"
          />
        </div>
      </div>
    </section>
  );
}