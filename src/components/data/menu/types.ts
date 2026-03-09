export type AddOn = {
  label: string;
  price: number;
};
export type Price = number | { half: number; full: number };

export type MenuItem = {
  id: string;
  title: string;
  description?: string;
  price: Price;
  image?: string;
  isNew?: boolean;
  addOns?: AddOn[];
};

export type MenuSection = {
  category: "Veg" | "Non-veg" | "Bar";
  title: string;
  items: MenuItem[];
};
