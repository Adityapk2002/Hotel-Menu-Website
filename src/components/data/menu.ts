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
      description: "Puri, Chat Masala, 3 Vodka Shots",
      price: 849,
      addOns: [],
    },
    {
      id: "carnival-special-shot",
      title: "Carnival Special Shot",
      description: "",
      price: 499,
      addOns: [],
    },
    {
      id: "b-52",
      title: "B-52",
      description: "Kahlua, Bailey’s Irish Cream, Cointreau",
      price: 499,
      addOns: [],
    },
    {
      id: "blue-kamikaze-shot",
      title: "Blue Kamikaze Shot",
      description: "Vodka, Blue Curacao, Tequila, Lime Juice",
      price: 499,
      addOns: [],
    },
    {
      id: "mexican-candy-shot",
      title: "Mexican Candy Shot",
      description: "Tequila, Watermelon Syrup, Lime Juice",
      price: 489,
      addOns: [],
    },
    {
      id: "mind-eraser",
      title: "Mind Eraser",
      description: "Vodka, Coffee Liquor, Soda",
      price: 489,
      addOns: [],
    },
    {
      id: "pink-starburst-shot",
      title: "Pink Starburst Shot",
      description: "Vodka, Baileys Irish, Strawberry Syrup",
      price: 489,
      addOns: [],
    },
    {
      id: "fire-shot",
      title: "Fire Shot",
      description: "Vodka, Simple Syrup",
      price: 449,
      addOns: [],
    },
    {
      id: "pain-killer-shot",
      title: "Pain Killer Shot",
      description: "Dark Rum, Coconut Rum, Orange Juice, Pineapple Juice",
      price: 449,
      addOns: [],
    },
    {
      id: "black-rose",
      title: "Black Rose",
      description: "Tequila, Vodka, Black Currant, Lime Juice",
      price: 429,
      addOns: [],
    },
    {
      id: "big-bang",
      title: "Big Bang",
      description: "Old Monk, Orange Juice, Pineapple Juice",
      price: 299,
      addOns: [],
    },
    {
      id: "flavored-shot",
      title: "Flavored Shot (Pineapple / Litchi / Kiwi / Mango)",
      description: "Vodka, Flavored Crush, Flavored Juice",
      price: 299,
      addOns: [],
    },
    {
      id: "red-snapper-shot",
      title: "Red Snapper Shot",
      description: "Jägermeister, Peach Syrup, Cranberry Juice, Lime Juice",
      price: 299,
      addOns: [],
    },
    {
      id: "jolly-rancher-shot",
      title: "Jolly Rancher Shot",
      description: "Apple Vodka, Peach Syrup, Cranberry Juice, Pineapple Juice",
      price: 299,
      addOns: [],
    },
  ],
},
]
