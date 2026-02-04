import { motion, AnimatePresence } from "motion/react";
import type { Variants } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export default function Carousel() {
const slides = useMemo(
  () => [
    { src: "/images/carousel/HomePage.webp", alt: "Carnival ambience" },
    { src: "/images/carousel/HomePage1.webp", alt: "Resort dining" },
    { src: "/images/carousel/HomePage3.webp", alt: "Signature dishes" },
    { src: "/images/carousel/carousel3.webp", alt: "Cocktails" },
  ],
  []
);


  const [[current, direction], setCurrent] = useState<[number, number]>([0, 1]);
  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % total, 1]);
    }, 4000);

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
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
    }),
  };

  return (
    <div className="px-4">
      <div className="relative w-full aspect-square overflow-hidden rounded-sm">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={slides[current].src}
            alt={slides[current].alt}
            className="absolute inset-0 w-full h-full object-cover"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            loading={current === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={current === 0 ? "high" : "auto"}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 700px"
            srcSet={
              slides[current].src?.startsWith("/images/")
                ? [
                    `${slides[current].src.replace(/\.(jpe?g|png)$/i, ".webp")} 700w`,
                    `${slides[current].src.replace(/\.(jpe?g|png)$/i, ".webp")} 1400w`,
                  ].join(", ")
                : undefined
            }
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
