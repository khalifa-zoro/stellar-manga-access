import './globals.css'

export const metadata = {
  title: 'Stellar Manga Access',
  description: 'Micro-payments to unlock manga titles',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b p-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <h1 className="text-xl font-semibold">Stellar Manga Access</h1>
          </div>
        </header>
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
