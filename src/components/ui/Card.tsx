"use client"

import { useEffect, useMemo, useState } from "react"
import type { AddOn } from "../data/menu"
import Loader from "../ui/Loader"

type CardProps = {
  title: string
  description ?: string
  price: number
  image?: string
  isNew?: boolean
  addOns?: AddOn[]
}

export default function Card({
  title,
  description,
  price,
  image,
  isNew,
  addOns,
}: CardProps) {
  const [selectedAddOn, setSelectedAddOn] = useState<AddOn | null>(null)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

  useEffect(() => {
    if (!image) return

    const timer = setTimeout(() => {
      setShowLoader(true)
    }, 150)

    return () => clearTimeout(timer)
  }, [image])

  // Memoized price calculation
  const finalPrice = useMemo(
    () => price + (selectedAddOn?.price ?? 0),
    [price, selectedAddOn]
  )

  return (
    <div className="flex w-full h-40 rounded-lg bg-white overflow-hidden shadow-sm">
      {/* IMAGE SECTION */}
      {image && (
        <div className="relative w-1/2 h-full bg-gray-200 overflow-hidden">
          {/* Loader */}
          {!isImageLoaded && showLoader && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
              <Loader />
            </div>
          )}

          {/* Image */}
          <img
            src={image}
            alt={title}
            loading="lazy"
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(true)}
            className={`
              w-full h-full object-cover
              transition-opacity duration-300
              ${isImageLoaded ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>
      )}

      {/* CONTENT SECTION */}
      <div
        className={`h-full py-2 px-3 flex flex-col justify-between bg-gray-100 ${
          image ? "w-1/2" : "w-full"
        }`}
      >
        <div>
          {isNew && (
            <span className="inline-block mb-1 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
              NEW!
            </span>
          )}

          <h3 className="font-semibold font-dm text-lg leading-tight">
            {title}
          </h3>

          <p className="text-sm font-dm text-gray-600 mt-1 line-clamp-2">
            {description}
          </p>

          {/* Add-ons */}
          {addOns && (
            <div className="mt-2 flex gap-2 flex-wrap">
              {addOns.map((addOn) => {
                const isSelected =
                  selectedAddOn?.label === addOn.label

                return (
                  <button
                    key={addOn.label}
                    onClick={() =>
                      setSelectedAddOn(
                        isSelected ? null : addOn
                      )
                    }
                    aria-pressed={isSelected}
                    className={`text-xs px-2 py-1 rounded border transition-colors ${
                      isSelected
                        ? "bg-black text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    + {addOn.label} ₹{addOn.price}
                  </button>
                )
              })}
            </div>
          )}
        </div>

        {/* Price */}
        <p className="font-semibold">
          ₹{finalPrice.toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  )
}
