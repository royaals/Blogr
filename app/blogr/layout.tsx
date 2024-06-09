import { Syne } from 'next/font/google'
import '../globals.css'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

export const metadata = {
  title: 'Blogr',
  description: 'A Blogs application',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={syne.variable}>
        {children}
      </body>
    </html>
  )
}
