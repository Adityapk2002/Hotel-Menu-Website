import { Facebook, MapPin } from "lucide-react";
import Instagram from "../Icons/Instagram";

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
];

const icons = {
  instagram: Instagram,
  facebook: Facebook,
  map: MapPin,
};

const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      {socialLinks.map((item) => {
        const Icon = icons[item.icon as keyof typeof icons];

        return (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
            className="text-gray-700 hover:text-black transition-colors"
          >
            <Icon className="h-6 sm:w-6" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
