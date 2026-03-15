import CountUp from "react-countup";

const stats = [
  { number: 250, label: "Projects Completed" },
  { number: 18, label: "Years Experience" },
  { number: 120, label: "Skilled Workers" },
  { number: 98, label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((item, i) => (
          <div key={i}>
            <h3 className="text-4xl md:text-5xl font-extrabold text-secondary">
              <CountUp end={item.number} duration={3} />+
            </h3>
            <p className="mt-3 text-white/80">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}