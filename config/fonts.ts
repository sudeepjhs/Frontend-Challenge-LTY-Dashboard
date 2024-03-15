import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google"
import localFont from 'next/font/local'

export const fontAeonik = localFont({
  src: [{
    path: "./Aeonik.woff2",
  }, {
    path: "./Aeonik.woff",
  },
  {
    path: "./Aeonik_Medium.woff2",
    weight: "500"
  },
  {
    path: "./Aeonik_Medium.woff",
    weight: "500"
  }
  ]
})

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})
