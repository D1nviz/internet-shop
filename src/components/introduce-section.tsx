"use client";

import React from "react";
import { Button } from "./ui/button";
import axios from "axios";

export default function IntroduceSection() {

  const fetchData  = async () => {
    const res = await axios.post("http://localhost:3000/api/products/", {
      title: "hello",
      description: "world"
    })
    
  console.log(res)
  }
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/api/products/")
    
  console.log(res)
  }

  return (
    <section className="flex flex-col items-center gap-6 py-32 text-center ">
      <h1 className="text-5xl font-bold max-w-[60rem] ">
        A clothes shop built with everything new in Next.js 13
      </h1>
      <span className="max-w-[30rem] text-zinc-500">
        Buy and sell clothes products from independent brands and stores around
        the world
      </span>
      <div className="flex gap-3">
        <Button onClick={fetchData}>Buy now</Button>
        <Button onClick={getData}variant={"outline"}>Sell now</Button>
      </div>
    </section>
  );
}
