export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-primary flex flex-col items-center justify-center">
      <div className="flex items-end gap-2">
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
      </div>

      <h2 className="mt-6 text-white text-2xl font-bold tracking-wide">
        Kobac <span className="text-secondary">Construction</span>
      </h2>

      <p className="mt-2 text-white/70 text-sm">
        Building dreams into reality
      </p>
    </div>
  );
}