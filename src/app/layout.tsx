import './globar.css'
import './init.css'
import { Inter, Noto_Sans_TC } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })
const NotoSansTC = Noto_Sans_TC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: '--font-noto-sans-tc'
})
const fontClassName = `${inter.variable} ${NotoSansTC.variable}`
const classNames = `${fontClassName}`

export default function RootLayout({ children }: { children: React.ReactNode, params: any }) {
  return (
    <html lang='s'>
      <body className={classNames}>{children}</body>
    </html>
  )
}