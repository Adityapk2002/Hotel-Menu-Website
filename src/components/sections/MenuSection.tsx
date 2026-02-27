"use client";

import { motion, AnimatePresence } from "motion/react";
import Accordion from "../ui/Accordion";
import Card from "../ui/Card";
import { MENU } from "../data/menu";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../ui/Carousel";
import { ArrowLeft, Search, SlidersVertical } from "lucide-react";
import Footer from "../layout/Footer";
import { useState } from "react";

const CATEGORY_TITLE: Record<string, string> = {
  veg: "Veg",
  nonveg: "Non-veg",
  bar: "Bar",
  carnival: "Carnival",
};

// Category switch buttons
const CATEGORIES = [
  { id: "veg", label: "Veg" },
  { id: "nonveg", label: "Non-veg" },
  { id: "bar", label: "Bar" },
  { id: "carnival", label: "Carnival" },
];

export default function MenuSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { category } = useParams();
  const cleanCategory = category?.toLowerCase() || "";
  const mappedCategory = CATEGORY_TITLE[cleanCategory];
  const filteredMenu = MENU.filter(
    (section) =>
      section.category.toLowerCase().replace("-", "") === cleanCategory,
  );
  const sectionTitles = filteredMenu.map((section) => section.title);

  const createSafeId = (title: string) =>
    title.replace(/\s+/g, "-").toLowerCase();

  const scrollToSection = (title: string) => {
    const safeId = createSafeId(title);
    const element = document.getElementById(safeId);

    if (element) {
      const headerOffset = 80; // adjust if needed
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🔥 STICKY HEADER */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="h-14 flex items-center justify-between px-4">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <button className="cursor-pointer" onClick={() => navigate("/")}>
              <ArrowLeft />
            </button>

            <h2 className="font-lg font-nunito text-2xl">{mappedCategory}</h2>
          </div>

          {/* RIGHT SIDE SOCIAL ICONS */}
          <div className="flex gap-2 items-center px-2">
            <button className="cursor-pointer rounded-full border border-gray-200 p-1">
              <Search />
            </button>
          </div>
        </div>
      </div>

      <div className="sticky top-14 z-20 bg-white relative flex items-center justify-between px-2 border-b border-gray-200">
        {/* LEFT SIDE */}
        <div className="flex gap-2 p-3 ">
          {CATEGORIES.filter((cat) => cat.id !== cleanCategory).map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/menu/${cat.id}`)}
              className=" cursor-pointer px-4 py-1 text-md sm:text-sm rounded-full whitespace-nowrap bg-black text-white"
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="px-4 flex gap-2">
          <button
            className="cursor-pointer rounded-full border border-gray-200 p-1"
            onClick={() => setIsDrawerOpen(true)}
          >
            <SlidersVertical />
          </button>
        </div>

        <AnimatePresence>
          {isDrawerOpen && (
            <>
              {/* Overlay */}
              <motion.div
                className="fixed inset-0 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDrawerOpen(false)}
              />

              {/* Drawer */}
              <motion.div
                className="absolute top-full right-0 w-72 bg-white shadow-xl z-50 border-t border-gray-200"
                initial={{ x: 40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 40, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="p-4 space-y-3">
                  {sectionTitles.map((title, index) => (
                    <motion.button
                      key={title}
                      className="w-full text-left text-2xl font-cinzel px-3 py-2 rounded-lg hover:bg-gray-100"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => {
                        setIsDrawerOpen(false);
                        setTimeout(() => {
                          scrollToSection(title);
                        }, 200);
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
      <div className="px-2 space-y-4 pb-10 mt-4 ">
        {filteredMenu.map((section) => {
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
