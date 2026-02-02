import { Facebook, Instagram, MapPin } from "lucide-react"

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
]

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  map: MapPin,
}

const HeroImage = () => {
  return (
    <div className="w-full px-2">
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
              <Icon className="h-5 w-5" />
            </a>
          )
        })}
      </div>

      {/* Hero Image */}
      <div className="px-3 py-5">
        <img
          src="/images/branding/main.JPG"
          alt="Hotel Branding"
          className="w-full h-100 object-cover rounded-lg"
        />
      </div>
    </div>
  )
}

export default HeroImage
