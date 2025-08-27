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
        <div className="flex min-h-screen flex-col space-y-4 bg-gradient-to-b from-[rgba(12,12,39,0.83)] to-[rgba(0,2,8,0.5)]">
          {children}
        </div>
      </body>
    </html>
  );
}
