import { useState } from "react"
import { Menu } from "lucide-react"
import WeeklyTiming from "../sections/WeeklyTiming"
import HeroImage from "../sections/Socials"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-gray-200">
        <div className="flex items-center gap-3 px-4 h-14 sm:h-16">
          
          {/* Menu Icon */}
          <button
            onClick={() => setOpen(true)}
            className=" active:scale-95 cursor-pointer "
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>

          <h1 className="text-base sm:text-2xl text-xl font-semibold font-nunito tracking-tight">
            Carnival Resorts
          </h1>
        </div>
      </header>
      <HeroImage/>

      <WeeklyTiming open={open} onClose={() => setOpen(false)} />
    </>
  )
}
