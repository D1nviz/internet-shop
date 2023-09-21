import { Button } from "@/components/ui/button";
import React from "react";
import CategoryCard from "@/components/cards/categoty-card";
import ProductCard from "@/components/cards/product-card";
import { categories } from "@/components/configs/categories";
import { products } from "@/components/configs/products";
import Section from "@/components/layouts/section";

export default function Home() {
  return (
    <>
      <Section>
        <h1 className="text-5xl font-bold max-w-[60rem] ">
          A clothes shop built with everything new in Next.js 13
        </h1>
        <span className="max-w-[30rem] text-zinc-500">
          Buy and sell clothes products from independent brands and stores
          around the world
        </span>
        <div className="flex gap-3">
          <Button>Buy now</Button>
          <Button variant={"outline"}>Sell now</Button>
        </div>
      </Section>
      <Section>
        <h2 className="text-5xl font-bold max-w-[60rem] ">Categories</h2>
        <div className="flex gap-8">
          {categories.map(({ title, Icon, img }) => (
            <CategoryCard title={title} Icon={Icon} img={img} />
          ))}
        </div>
      </Section>
      <Section className="py-10">
        <h3 className="text-3xl font-bold max-w-[60rem] self-start ">
          Feautured products
        </h3>
        <div className="flex gap-8">
          {products.map(({ title, Icon, img, id}) => (
            <ProductCard key={id} title={title} Icon={Icon} img={img} price="15$" />
          ))}
        </div>
      </Section>
    </>
  );
}
