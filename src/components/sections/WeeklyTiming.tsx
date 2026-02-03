import { motion, AnimatePresence } from "framer-motion"

type Props = {
  open: boolean
  onClose: () => void
}

const timings = [
  { day: "Monday", time: "10:00 AM – 10:00 PM" },
  { day: "Tuesday", time: "10:00 AM – 10:00 PM" },
  { day: "Wednesday", time: "10:00 AM – 10:00 PM" },
  { day: "Thursday", time: "10:00 AM – 10:00 PM" },
  { day: "Friday", time: "10:00 AM – 11:00 PM" },
  { day: "Saturday", time: "9:00 AM – 11:00 PM" },
  { day: "Sunday", time: "9:00 AM – 9:00 PM" },
]

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
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {/* CONTENT */}
            <div className="h-full flex flex-col">
              
              {/* HEADER */}
              <div className="h-14 flex items-center justify-between px-4 border-b">
                <h2 className="text-lg font-semibold">
                  Opening Hours
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 text-xl cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* BODY */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {timings.map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between border-b pb-2"
                  >
                    <span className="font-medium">{day}</span>
                    <span className="text-gray-600">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
