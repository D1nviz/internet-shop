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
        <main className="flex-1 container">{children}</main>
      </body>
    </html>
  );
}
