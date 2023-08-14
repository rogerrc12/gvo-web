"use client";
import Image from "next/image";

import { type Brand } from "@/types.d";

function BrandItem({ name, image }: Pick<Brand, "name" | "image">) {
  return <Image src={image} alt={name} width={100} height={100} className="aspect-video object-contain md:mx-2" />;
}

export default BrandItem;
