import { Inter } from 'next/font/google'
import './globals.css'
// import "./font.css";


export const metadata = {
  title: 'شرکت پسته حیدری',
  description: 'بهترین مغز پسته جهان',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body >{children}</body>
    </html>
  )
}
