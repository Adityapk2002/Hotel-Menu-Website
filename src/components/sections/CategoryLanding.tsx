import { useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";

const categories = [
  {
    title: "Veg",
    image: "/images/carousel/HomePage.webp",
    href: "/veg",
  },
  {
    title: "Non-veg",
    image: "/images/carousel/HomePage1.webp",
    href: "/nonveg",
  },
  {
    title: "Bar",
    image: "/images/carousel/HomePage.webp",
    href: "/bar",
  },
  {
    title: "Carnival",
    image: "/images/carousel/HomePage1.webp",
    href: "/carnival",
  },
];
export default function CategoryLanding() {
  const navigate = useNavigate();
  return (
    <section className="">
      <Navbar />

      <div className="text-center mt-4 mb-6">
        <h2 className="text-3xl font-bold font-dm">View Dine‑In Menu</h2>
        <p className="text-gray-500 mt-1">Select your category below.</p>
      </div>

      <div className="space-y-4 mx-2">
        {categories.map((cat) => (
          <button
            key={cat.title}
            onClick={() => navigate(`/menu/${cat.href}`)}
            className="relative w-full h-35  overflow-hidden cursor-pointer"
          >
            <img src={cat.image} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-xl font-semibold uppercase tracking-wide text-center px-3">
                {cat.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
