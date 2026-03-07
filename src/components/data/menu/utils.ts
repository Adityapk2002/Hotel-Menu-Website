import type { MenuSection } from "./types";

export const getFoodType = (
  category: MenuSection["category"],
): "veg" | "nonveg" | "bar" | undefined => {
  if (category === "Veg") return "veg";
  if (category === "Non-veg") return "nonveg";
  if (category === "Bar") return "bar";
  return undefined;
};
