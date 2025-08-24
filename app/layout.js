import "./globals.css";

export const metadata = {
  title: "mgDev",
  description: "Building stuff I want to build",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rgm1dlw.css" />
      </head>
      <body className="set font-[sofia-pro,_sans-serif] font-medium not-italic text-slate-100/70 antialiased">
        {children}
      </body>
    </html>
  );
}
