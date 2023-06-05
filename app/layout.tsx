// TODO Stylings
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

// TODO Components
import Nav from "./auth/Nav";

// TODO: MetaData
export const metadata = {
  title: "Post IT - Full Stack App",
  description:
    "Creating a full stack app using Next13, NextAuth, Tailwind, prisma",
};

// TODO: Main Root Function

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`mx-4 md:mx-48 xl:md-86 ${roboto.className} bg-gray-200`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
