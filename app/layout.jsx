import './globals.css'
import { Montserrat,McLaren } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Keeper',
  description: 'Keep your important notes in your pocket ',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
