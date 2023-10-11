import { Button } from "@/components/ui/button";
import React from "react";
import CategoryCard from "@/components/cards/categoty-card";
import ProductCard from "@/components/cards/product-card";
import { categories } from "@/components/configs/categories";
import { products } from "@/components/configs/products";
import Section from "@/components/layouts/section";

type SingleProductPageProps = {
  params: { categoryid: string };
};
export default function SingleCategoryPage({ params }: SingleProductPageProps) {
  return (
    <>
      <Section className="w-full mt-3">
        <h1 className="text-3xl font-bold max-w-[60rem] capitalize self-start justify-center">
          {params.categoryid} page
        </h1>
      </Section>
      <Section className="mt-5">
        <div className="flex gap-8 flex-wrap justify-center">
          {products.map(({ title, Icon, img, id }) => (
            <ProductCard
              key={id}
              title={title}
              Icon={Icon}
              img={img}
              price="15$"
            />
          ))}
        </div>
      </Section>
    </>
  );
}
