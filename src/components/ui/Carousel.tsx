"use client";
import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { useEffect, useState } from "react";

export default function Carousel() {
  const slides = [
    { src: "/images/carousel/HomePage.JPG" },
    { src: "/images/carousel/HomePage1.JPG" },
    { src: "/images/carousel/HomePage3.JPG" },
    { src: "/images/carousel/carousel3.jpeg" },
  ];

  const [[current, direction], setCurrent] = useState<[number, number]>([0, 1]);
  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % total, 1]);
    }, 3000);

    return () => clearInterval(interval);
  }, [total]);

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (

    <div className="px-4">
      <div className="relative w-full aspect-square overflow-hidden rounded-sm">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={slides[current].src}
            alt=""
            className="absolute inset-0 w-full h-full object-cover" //cover
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
