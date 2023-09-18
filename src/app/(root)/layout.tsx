import Header from "@/components/layouts/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="py-[2rem] flex flex-col items-center container">{children}</main>
      </body>
    </html>
  );
}
