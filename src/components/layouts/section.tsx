import React from "react";

type SectionProps = {
  children: React.ReactNode;
};

export default function Section({ children }: SectionProps) {
  return (
    <section className="flex flex-col items-center gap-6 py-32 text-center ">
      {children}
    </section>
  );
}
