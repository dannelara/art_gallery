import { GlobalStatePovider } from '_global/GlobalState'
import './globals.css'
import { Space_Mono } from 'next/font/google'
import Header from './_components/global/Header'
import Footer from '_components/_sections/Footer'
import sharedMetadata from '_shared/Meta'
import { Metadata } from 'next'

const inter = Space_Mono({ subsets: ['latin'], weight: ['400', "700"] })

export const metadata: Metadata = {
  ...sharedMetadata
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <GlobalStatePovider>
      <html lang="en" className="dark">
        <body className={inter.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </GlobalStatePovider>
  )
}
