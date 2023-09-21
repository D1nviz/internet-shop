import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AspectRatio } from "../ui/aspect-ratio";
import { ProductCard } from "@/types";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";

type ProductCardProps = Omit<ProductCard, "id">;

export default function ProductCard({
  title,
  img,
  price,
  Icon,
}: ProductCardProps) {
  return (
    <Link
      key={title}
      href={`/`}
      className="relative overflow-hidden rounded-md border"
    >
      <div className="w-[20rem] px-4 py-4">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={img}
            alt={`${title} category`}
            className="object-cover transition-transform group-hover:scale-105"
            fill
            priority={true}
          />
        </AspectRatio>
        <div
            className={cn(
              buttonVariants({
                size: "icon",
                className:
                  "absolute top-6 left-6 pointer-events-none h-8 w-8 bg-zinc-300/90 text-zinc-950 border border-zinc-300",
              })
            )}
            aria-hidden="true"
          >
            <Icon className="h-4 w-4" />
          </div>
        <div className="pl-1 mt-2 text-left ">
          <h4 className="capitalize  font-semibold text-lg">
            {title}
          </h4>
         <div className="flex justify-between items-center">
         <span className="text-zinc-500">{price}</span>
         <Button>Add to Cart</Button>
         </div>
        </div>
      </div>
    </Link>
  );
}
