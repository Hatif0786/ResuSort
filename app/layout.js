import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ResuSort - AI Resume Analyzer',
  description: 'AI-powered resume analysis and job matching tool',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="app">
          <header className="header">
            <div className="container">
              <h1 className="logo">ResuSort</h1>
              <nav>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="main">
            {children}
          </main>
          <footer className="footer">
            <div className="container">
              <p>&copy; 2023 ResuSort. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

