import { motion, AnimatePresence } from "motion/react";
import Accordion from "../ui/Accordion";
import Card from "../ui/Card";
import { MENU } from "../data/menu";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../ui/Carousel";
import { ArrowLeft, Search, SlidersVertical, X } from "lucide-react";
import Footer from "../layout/Footer";
import { useState, useCallback, useRef, useMemo } from "react";

const CATEGORIES = [
  { id: "veg", label: "Veg" },
  { id: "nonveg", label: "Non-veg" },
  { id: "bar", label: "Bar" },
  { id: "carnival", label: "Carnival" },
];

export default function MenuSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const pendingScrollRef = useRef<string | null>(null);

  const navigate = useNavigate();
  const { category } = useParams();
  const cleanCategory = category?.toLowerCase() || "";

  // Derive label from the single CATEGORIES array.
  const mappedCategory = CATEGORIES.find((c) => c.id === cleanCategory)?.label;

  // useCallback hooks must be declared before any early returns (Rules of Hooks).
  const createSafeId = useCallback(
    (title: string) => title.replace(/\s+/g, "-").toLowerCase(),
    [],
  );

  const scrollToSection = useCallback(
    (title: string) => {
      const safeId = createSafeId(title);
      const element = document.getElementById(safeId);
      if (element) {
        const headerOffset = 80;
        const y =
          element.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    },
    [createSafeId],
  );

  // Removed duplicate filteredMenu — filteredSearch already has the same data.
  //    sectionTitles is now derived from filteredSearch below.
  const normalize = useCallback((str: string) => {
    return str.toLowerCase().replace(/-/g, "").trim();
  }, []);

  const filteredSearch = useMemo(() => {
    const normalizedSearch = searchQuery
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

    return MENU.filter(
      (section) => normalize(section.category) === cleanCategory,
    )
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => {
          const title = item.title.toLowerCase();
          const description = item.description?.toLowerCase() || "";

          return (
            normalizedSearch === "" ||
            title.includes(normalizedSearch) ||
            description.includes(normalizedSearch)
          );
        }),
      }))
      .filter((section) => section.items.length > 0);
  }, [cleanCategory, searchQuery, normalize]);

  //Derived from filteredSearch, no more separate filteredMenu.
  const sectionTitles = filteredSearch.map((section) => section.title);

  // Early return for unknown/invalid routes — placed AFTER all hooks.
  if (!mappedCategory) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-xl font-nunito text-gray-500">Menu not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-4 py-2 bg-black text-white rounded-full text-sm"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <>
      {/* STICKY HEADER */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="h-14 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <button className="cursor-pointer" onClick={() => navigate("/")}>
              <ArrowLeft />
            </button>
            <h2 className="font-semibold font-nunito text-2xl">
              {mappedCategory}
            </h2>
          </div>

          <div className="flex gap-2 items-center px-2">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.input
                  key="search-input"
                  autoFocus
                  type="text"
                  placeholder="Search menu..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="border border-gray-200 rounded-full px-3 py-1 text-sm outline-none w-40"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 160, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>

            <button
              className="cursor-pointer rounded-full border border-gray-200 p-1"
              onClick={() => {
                setIsSearchOpen((prev) => !prev);
                if (isSearchOpen) setSearchQuery("");
              }}
            >
              {isSearchOpen ? <X size={20} /> : <Search size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-14 z-20 bg-white flex items-center justify-between px-2 border-b border-gray-200">
        <div className="flex gap-2 p-3">
          {CATEGORIES.filter((cat) => cat.id !== cleanCategory).map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/menu/${cat.id}`)}
              className="cursor-pointer px-4 py-1 text-md sm:text-sm rounded-full whitespace-nowrap bg-black text-white"
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="px-4 flex gap-2">
          <button
            className="cursor-pointer rounded-full border border-gray-200 p-1"
            onClick={() => setIsDrawerOpen(true)}
          >
            <SlidersVertical />
          </button>
        </div>

        <AnimatePresence
          //  onExitComplete fires after the drawer's exit animation finishes.
          onExitComplete={() => {
            if (pendingScrollRef.current) {
              scrollToSection(pendingScrollRef.current);
              pendingScrollRef.current = null;
            }
          }}
        >
          {isDrawerOpen && (
            <>
              {/* Added bg-black/20 to the overlay.
                  Previously the overlay was fully transparent — it dismissed the drawer
                  but gave no visual feedback that the rest of the UI was inactive. */}
              <motion.div
                className="fixed inset-0 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDrawerOpen(false)}
              />

              <motion.div
                className="absolute top-full right-0 w-72 max-h-[70vh] overflow-y-auto bg-white shadow-xl z-50 border-t border-gray-200"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="p-4 space-y-3">
                  {sectionTitles.map((title, index) => (
                    <motion.button
                      key={title}
                      className="w-full text-left text-xl font-cinzel px-3 py-2 rounded-lg hover:bg-gray-100"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        // Store the target section, then close drawer.
                        //    onExitComplete above will scroll once the animation is done.
                        pendingScrollRef.current = title;
                        setIsDrawerOpen(false);
                      }}
                    >
                      {title}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* CAROUSEL */}
      <div className="mt-4">
        <Carousel />
      </div>

      {/* MENU */}
      <div className="px-2 space-y-4 pb-10 mt-4">
        {filteredSearch.map((section) => {
          const safeId = createSafeId(section.title);

          return (
            <div key={section.title} id={safeId}>
              <Accordion title={section.title}>
                <div className="space-y-6">
                  {section.items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                    >
                      <Card {...item} />
                    </motion.div>
                  ))}
                </div>
              </Accordion>
            </div>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
