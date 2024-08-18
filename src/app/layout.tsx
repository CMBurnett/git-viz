import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "GitViz | GitHub Contribution Visualization",
  description: 'A Dynamic GitHub Contribution Visualizer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-slate-100 dark:bg-slate-800'>{children}</body>
    </html>
  )
}