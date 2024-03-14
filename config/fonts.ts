import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import localFont from 'next/font/local'

export const fontAeonik = localFont({
  src: [{
    path: "./Aeonik.woff2"
  }, {
    path: "./Aeonik.woff",
  }]
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
