import React from "react";
import { LucideIcon } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

type CategoryCardProps = {
  title: string;
  Icon: LucideIcon;
  img: string;
};

export default function CategoryCard({ title, Icon, img }: CategoryCardProps) {
  return (
    <Link
    key={title}
    href={`/categories/${title}`}
    className="w-[20rem] group relative overflow-hidden rounded-md border"
  >
    <AspectRatio ratio={16 / 9}>
      <div className="absolute inset-0 z-10 bg-zinc-950/70 transition-colors group-hover:bg-zinc-950/75" />
      <Image
        src={img}
        alt={`${title} category`}
        className="object-cover transition-transform group-hover:scale-105"
        fill
        priority={true}
      />
    </AspectRatio>
    <div className="absolute inset-4 z-20 flex flex-col">
      <div className="flex items-start justify-between space-x-4">
        <div
          className={cn(
            buttonVariants({
              size: "icon",
              className:
                "pointer-events-none h-8 w-8 bg-zinc-100 text-zinc-950",
            })
          )}
          aria-hidden="true"
        >
          <Icon className="h-4 w-4" />
        </div>
        <p className="text-sm text-zinc-200">{53} items</p>
      </div>
      <h3 className="mt-auto text-xl font-medium capitalize text-zinc-200">
        {title}
      </h3>
    </div>
    <span className="sr-only">{title}</span>
  </Link>
  );
}
