import { FaBuilding, FaCompassDrafting, FaHammer, FaHelmetSafety } from "react-icons/fa6";

const services = [
  {
    title: "Building Construction",
    desc: "Residential and commercial construction with quality materials and expert execution.",
    icon: FaBuilding,
  },
  {
    title: "Architecture Design",
    desc: "Modern design concepts that combine beauty, function, and structural strength.",
    icon: FaCompassDrafting,
  },
  {
    title: "Renovation",
    desc: "Smart renovation solutions that upgrade existing spaces into modern environments.",
    icon: FaHammer,
  },
  {
    title: "Project Management",
    desc: "Planning, supervision, and coordination to deliver projects on time and with excellence.",
    icon: FaHelmetSafety,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-offset py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-secondary font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sm">
            Services
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            What We Offer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-soft hover:-translate-y-2 hover:shadow-2xl transition duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center text-2xl">
                  <Icon />
                </div>

                <h3 className="mt-5 sm:mt-6 text-xl sm:text-2xl font-bold text-primary">
                  {service.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-gray-600 leading-7">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}