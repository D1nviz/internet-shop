import React from "react";
import { MainNavigation } from "./main-navigation";
import Logo from "../ui/logo";
import { Button } from "../ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border border-zinc-300 bg-white/70 backdrop-blur-md">
      <div className="flex container justify-between items-center px-5 my-2">
        <div className="flex items-center gap-5">
          <Logo />
          <MainNavigation />
        </div>

        <div>
          <UserButton
            appearance={{
              elements: {
                userButtonPopoverFooter: {
                  display: "none",
                },
                avatarBox: {
                  width: "40px",
                  height: "40px",
                },
              },
            }}
          />
        </div>
      </div>
    </header>
  );
}
