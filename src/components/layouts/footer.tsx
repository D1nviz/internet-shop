import React from "react";
import Logo from "../ui/logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-300">
      <div className="flex container py-3">
        <div className=" max-w-[20rem]">
          <Logo  />
          <p className=" text-xs text-zinc-500">
             © 2023 Clothes Shop - All Rights Reserved
          </p>
        </div>
        <div>
          <ul></ul>
        </div>
      </div>
    </footer>
  );
}
