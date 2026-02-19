"use client";

import { motion } from "motion/react";
import Accordion from "../ui/Accordion";
import Card from "../ui/Card";
import { MENU } from "../data/menu";
import { useNavigate, useParams } from "react-router-dom";
import Carousel from "../ui/Carousel";
import { ArrowLeft, Facebook, MapPin } from "lucide-react";
import Instagram from "../Icons/Instagram";

const CATEGORY_TITLE: Record<string, string> = {
  beverages: "Veg",
  food: "Non-veg",
  bar: "Bar",
  offers: "Carnival",
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: "facebook",
  },
  {
    name: "Google Maps",
    href: "https://www.google.com/maps/place/Hotel+Carnival/",
    icon: "map",
  },
];

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  map: MapPin,
};

export default function MenuSection() {
  const { category } = useParams();
  const navigate = useNavigate();

  const mappedCategory = CATEGORY_TITLE[category!];

  const filteredMenu = MENU.filter(
    (section) => section.category === mappedCategory,
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

          {/* RIGHT SIDE SOCIAL ICONS */}
          <div className="flex gap-2 items-center">
            {socialLinks.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];

              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="mt-2">
        <Carousel />
      </div>

      {/* MENU */}
      <div className="px-2 space-y-4 pb-10">
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
    </>
  );
}
