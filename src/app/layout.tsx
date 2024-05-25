import { Roboto_Flex, Space_Grotesk } from "next/font/google";
import { PropsWithChildren } from "react";
import "../styles/index.scss";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-flex",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="es" className={`${roboto.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
