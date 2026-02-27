"use client";

import { motion } from "framer-motion";
import Accordion from "../ui/Accordion";
import Card from "../ui/Card";
import { MENU } from "../data/menu";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../ui/Carousel";
import { ArrowLeft } from "lucide-react";
import Footer from "../layout/Footer";

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
  const navigate = useNavigate();
  const { category } = useParams();
  const cleanCategory = category?.toLowerCase() || "";

  const mappedCategory = CATEGORY_TITLE[cleanCategory];

  const filteredMenu = MENU.filter(
    (section) =>
      section.category.toLowerCase().replace("-", "") === cleanCategory,
  );

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

            <h2 className="font-semibold text-2xl">{mappedCategory}</h2>
          </div>

          {/* 🔥 RIGHT SIDE CATEGORY BUTTONS */}
          <div className="flex gap-2 overflow-x-auto">
            {CATEGORIES.filter((cat) => cat.id !== cleanCategory).map((cat) => (
              <button
                key={cat.id}
                onClick={() => navigate(`/menu/${cat.id}`)}
                className={`px-3 py-1 text-md sm:text-sm rounded-full whitespace-nowrap transition bg-black text-white cursor-pointer`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="mt-2">
        <Carousel />
      </div>

      {/* MENU */}
      <div className="px-2 space-y-2 pb-10">
        {filteredMenu.map((section) => (
          <Accordion key={section.title} title={section.title}>
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
        ))}
      </div>
      <Footer />
    </>
  );
}
