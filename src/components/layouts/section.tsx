import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col items-center gap-6 mt-16 text-center ",
        className
      )}
    >
      {children}
    </section>
  );
}
