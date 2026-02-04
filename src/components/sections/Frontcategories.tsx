const categories = [
  {
    title: "Veg",
    image: "/images/carousel/HomePage.webp",
    href: "/beverages",
  },
  {
    title: "Non-veg",
    image: "/images/carousel/HomePage1.webp",
    href: "/food",
  },
  {
    title: "Bar",
    image: "/images/carousel/HomePage.webp",
    href: "/bar",
  },
  {
    title: "Carnival",
    image: "/images/carousel/HomePage1.webp",
    href: "/offers",
  },
];

export default function FrontCategories() {
  return (
    <section className="px-4 pb-22 py-14">
      <div className="text-center mt-4 mb-6">
        <h2 className="text-3xl font-bold font-dm">View Dine‑In Menu</h2>
        <p className="text-gray-500 mt-1">Select your category below.</p>
      </div>

      <div className="space-y-4">
        {categories.map((cat) => (
            <div className="relative w-full h-32 sm:h-30">
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xl font-semibold uppercase tracking-wide text-center px-3">
                  {cat.title}
                </span>
              </div>
            </div>
        ))}
      </div>
    </section>
  );
}
