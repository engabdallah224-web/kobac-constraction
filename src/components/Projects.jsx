import p1 from "../assets/projects/house1.jpg";
import p2 from "../assets/projects/house2.jpg";
import p3 from "../assets/projects/house3.jpg";
import p4 from "../assets/projects/house4.jpg";
import p5 from "../assets/projects/house5.jpg";
import p6 from "../assets/projects/house6.jpg";
import p7 from "../assets/projects/house7.jpg";
import p8 from "../assets/projects/house8.jpg";
import p9 from "../assets/projects/house9.jpg";
import p10 from "../assets/projects/house10.jpg";

const projects = [
  { image: p1, title: "Modern Family House", category: "Residential Project" },
  { image: p2, title: "Luxury Villa Design", category: "Premium Home" },
  { image: p3, title: "Elegant House Build", category: "Residential Project" },
  { image: p4, title: "Modern Concrete House", category: "Construction Project" },
  { image: p5, title: "Beautiful Home Exterior", category: "Residential Project" },
  { image: p6, title: "Contemporary Villa", category: "Premium Home" },
  { image: p7, title: "Custom House Project", category: "Construction Project" },
  { image: p8, title: "Smart Modern Residence", category: "Residential Project" },
  { image: p9, title: "Luxury Family Villa", category: "Premium Home" },
  { image: p10, title: "Finished Home Project", category: "Construction Project" },
];

export default function Projects() {
  return (
    <section id="projects" className="section-offset py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-secondary font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-sm">
            Our Projects
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
            Homes We Have Built
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7 sm:leading-8">
            Explore some of the beautiful residential projects completed by Kobac Construction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden bg-white shadow-soft hover:shadow-2xl transition duration-300"
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent"></div>

                <div className="absolute top-4 left-4 bg-secondary text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full shadow">
                  Project {index + 1}
                </div>

                <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                  <p className="text-secondary text-xs sm:text-sm font-semibold uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mt-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mt-2 text-sm sm:text-base">
                    Kobac Construction
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}