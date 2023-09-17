import React from "react";
import { MainNavigation } from "./main-navigation";
import Logo from "../ui/logo";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border border-zinc-300 bg-white">
      <div className="flex container justify-between items-center px-5 my-2">
        <div className="flex items-center gap-5">
          <Logo />
          <MainNavigation />
        </div>

        <div>
          <Button>Sign in</Button>
        </div>
      </div>
    </header>
  );
}
