export type AddOn = {
  label: string
  price: number
}

export type MenuItem = {
  id: string
  title: string
  description?: string
  price: number
  image?: string
  isNew?: boolean
  addOns?: AddOn[]
}

export type MenuSection = {
  title: string
  items: MenuItem[]
}

export const MENU: MenuSection[] = [
  {
    title: "The Daily Scoop",
    items: [
      {
        id: "thai-veg-dumplings",
        title: "Thai Veg Soup Dumplings",
        description: "Miso Broth, Scented Veggie & Mushroom Dumplings",
        price: 375,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
        isNew: true,
      },
      {
        id: "minestrone",
        title: "T&S Minestrone",
        description: "Italian Broth Soup With Diced Pasta & Vegetables",
        price: 275,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd",
      },
    ],
  },
  {
    title: "Mocktails",
    items: [
      {
        id: "Mocktail-1",
        title: "Carnival Special Mocktail",
        price: 249,
        image: "/images/Mocktail/Mocktail1.JPG",
        isNew: false,
      },
      {
        id: "Mocktail-2",
        title: "Fruit Explosion",
        description: "Mix Fruit Juice, Strawberry Ice Cream, Grenadine Syrup, Coconut Syrup, Fruit Toppings",
        price: 229,
        image: "/images/Mocktail/Mocktail.JPG",
      },
      {
        id: "Mocktail-3",
        title: "Coconut Guava Margarita",
        description: "Guava Juice, Coco Syrup, Lime Juice, Mint Leaves, Coconut Powder.",
        price: 229,
        image: "/images/hotel/juice4.JPG",
      },
    ],
  },
  {
    title: "Shots",
    items: [
      {
        id: "pani-puri-shots",
        title: "Pani Puri Shots",
        description: "Puri, Chat Masala",
        price: 649,
        addOns: [
          { label: "Vodka Shots", price: 200 },
          { label: "Extra Spice", price: 100 },
        ],
      },
    ],
  },
]
