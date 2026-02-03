import { useState } from "react"
import { Menu } from "lucide-react"
import WeeklyTiming from "../sections/WeeklyTiming"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-black border-b border-gray-200">
        <div className="flex items-center gap-3 px-4 h-14 sm:h-16">
          
          {/* Menu Icon */}
          <button
            onClick={() => setOpen(true)}
            className="px-2 text-white active:scale-95 cursor-pointer "
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <h1 className="text-base sm:text-lg font-semibold tracking-tight text-white">
            Carnival Resorts
          </h1>
        </div>
      </header>

      <WeeklyTiming open={open} onClose={() => setOpen(false)} />
    </>
  )
}
