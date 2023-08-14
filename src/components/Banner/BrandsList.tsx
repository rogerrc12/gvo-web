"use client";

import BrandItem from "@/components/Banner/BrandItem";
import { type Brand } from "@/types.d";

const Brands: Brand[] = [
  {
    id: 1,
    name: "Instakash",
    image: "/images/clients/instakash.webp",
  },
  {
    id: 2,
    name: "DevTech",
    image: "/images/clients/devtech.webp",
  },
  {
    id: 3,
    name: "Solucenter",
    image: "/images/clients/solucenter.webp",
  },
];

function BrandsList() {
  return (
    <div className="flex flex-wrap items-end gap-6">
      {Brands.map((brand) => (
        <BrandItem key={brand.id} name={brand.name} image={brand.image} />
      ))}
    </div>
  );
}

export default BrandsList;
