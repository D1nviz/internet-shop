import { LucideIcon } from "lucide-react";

export type CategoryCard = {
  title: string;
  Icon: LucideIcon;
  img: string;
};

export type ProductCard = {
  title: string;
  price: string;
  id: string;
  img: string;
  Icon: LucideIcon;
};
