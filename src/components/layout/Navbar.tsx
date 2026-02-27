import { useState } from "react";
import { Menu } from "lucide-react";
import WeeklyTiming from "../sections/WeeklyTiming";
import SocialLinks from "../sections/Socials";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white">
        <div className="flex items-center px-4 h-14 sm:h-16">
          {/* LEFT SIDE */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen(true)}
              className="active:scale-95 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>

            <h1 className="text-2xl font-nunito tracking-tight">
              Carnival Resorts
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="ml-auto">
            <SocialLinks />
          </div>
        </div>
      </header>

      <WeeklyTiming open={open} onClose={() => setOpen(false)} />
    </>
  );
}
