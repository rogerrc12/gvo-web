import { Comfortaa, Open_Sans } from 'next/font/google'

export const comfortaa = Comfortaa({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export const opensans = Open_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});
