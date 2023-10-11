import React from "react";
import { MainNavigation } from "./main-navigation";
import Logo from "../ui/logo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border border-zinc-300 bg-white">
      <div className="flex container justify-between items-center px-5 my-2">
        <div className="flex items-center gap-5">
          <Link href="/">
            <Logo />
          </Link>
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