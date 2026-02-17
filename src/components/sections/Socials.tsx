import { Facebook, MapPin } from "lucide-react"
import Instagram from "../Icons/Instagram"

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: "instagram"
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
]

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  map: MapPin,
}

const HeroImage = () => {
  return (
    <div className="w-full px-2 mb-4 border-b border-gray-200">
      {/* Social Icons */}
      <div className="flex gap-4 px-4 py-3 justify-end">
        {socialLinks.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons]

          return (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="text-gray-700 hover:text-black transition-colors"
            >
              <Icon className="h-6 w-6" />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default HeroImage
