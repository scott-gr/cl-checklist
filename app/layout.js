import { Open_Sans, Montserrat } from 'next/font/google'
import "./normalize.css";
import "./globals.css";

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-open-sans'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'optional',
  variable: '--font-montserrat'
})


export default function RootLayout({children}) {
  return (
    <html lang="en" className={`${open_sans.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
