import { motion, AnimatePresence } from "motion/react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function WeeklyTiming({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP (inside container) */}
          <motion.div
            className="absolute inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* SLIDER */}
          <motion.div
            className="absolute inset-y-0 left-0 z-50 w-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            {/* CONTENT */}
            <div className="h-full flex flex-col">
              {/* HEADER */}
              <div className="h-14 flex items-center justify-between px-4 border-b border-gray-200">
                <div className="flex items-center px-4">
                  <img
                    src="/logo.png"
                    alt="Carnival Resort Logo"
                    className="h-8 w-auto"
                  />
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-xl cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* BODY */}
              <div className="flex flex-col items-center justify-center space-y-4 py-4">
                <span className="font-cinzel text-2xl underline underline-offset-4 decoration-gray-300">
                  About us
                </span>
                <p className="text-sm font-nunito max-w-xs mx-auto text-justify ">
                  Carnival Resort offers a unique blend of comfortable
                  accommodation and the ability to host superb events at our one
                  of a kind hotel in Latur. Established in the year 2011, our
                  hotel is strategically located just 15 minutes from the city
                  centre and the Railway Station. Guests who stay at our hotel
                  can enjoy lip-smacking delicacies, great service and exquisite
                  surroundings during their stay with us. Unwind from the hustle
                  and bustle of everyday life and indulge in a serene & cheerful
                  ambience for a whole new enriching experience.
                </p>
                <div className="flex flex-col items-center space-y-5">
                  <div className="text-center">
                    <h3 className="font-cinzel text-xl">Hotel Phone Number</h3>
                    <p className="text-lg">+91 787-505-0022</p>
                  </div>

                  <div className="text-center">
                    <h3 className="font-cinzel text-xl">Front Office</h3>
                    <p className="text-lg">+91 779-888-4517</p>
                  </div>

                  <div className="text-center">
                    <h3 className="font-cinzel text-xl">Email</h3>
                    <p className="text-lg">info@carnivalresort.in</p>
                  </div>

                  <div className="text-center">
                    <h3 className="font-cinzel text-xl">Website</h3>
                    <a
                      href="https://www.carnivalresort.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg underline hover:text-gray-600 transition"
                    >
                      www.carnivalresort.in
                    </a>
                  </div>

                  <div className="text-center">
                    <h3 className="font-cinzel text-xl tracking-wide">
                      Online Booking
                    </h3>
                    <a
                      href="https://bookings.resavenue.com/resBooking/search?regCode=VGRE0422"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-6 py-2 border border-black hover:bg-black hover:text-white transition duration-300"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
