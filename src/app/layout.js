import "./globals.css";
import TopProgress from "@/components/TopProgress";
import Link from "next/link";

export const metadata = {
  title: "Anton Krat — Portfolio",
  icons: {
    icon: "/favicon.ico",                 // вкладки
    shortcut: "/favicon.ico",             // старые браузеры
    apple: "/apple-touch-icon.png",       // для iOS (если положишь)
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col bg-neutral-950 text-neutral-50">
        {/* Navbar */}
        <TopProgress />
        <header className="sticky top-0 z-40 border-b border-white/10 bg-neutral-950/70 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <Link className="font-semibold tracking-tight" href="/">
              Anton Krat
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
              <Link className="hover:text-white" href="/#works">
                Works
              </Link>
              <Link className="hover:text-white" href="/about">
                About
              </Link>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* Контент */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-center text-sm text-neutral-400">
  <div className="flex flex-col items-center gap-4">
    {/* Соц.сети */}
    <div className="flex gap-6 text-neutral-400">
      <Link
        href="https://www.behance.net/AntonKrat"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
        aria-label="Behance"
      >
        {/* Behance */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M4.876 10.083H7.42c.892 0 1.294-.615 1.294-1.229 0-.613-.402-1.228-1.294-1.228H4.876v2.457Zm.023 5.166H7.6c1.079 0 1.479-.712 1.479-1.402s-.4-1.4-1.479-1.4H4.9v2.802ZM0 5h7.907c2.54 0 3.774 1.662 3.774 3.273 0 1.344-.74 2.375-1.987 2.672v.047c1.568.234 2.486 1.293 2.486 2.84 0 1.991-1.449 3.669-4.242 3.669H0V5Zm18.646 7.605c-1.265 0-2.067.844-2.067 1.87 0 1.025.802 1.87 2.067 1.87 1.265 0 2.067-.845 2.067-1.87 0-1.026-.802-1.87-2.067-1.87ZM18.6 5c2.688 0 4.097 1.47 4.367 3.425h-2.142c-.118-.69-.722-1.403-2.225-1.403-1.381 0-2.174.678-2.174 1.805v.204h6.386v1.048c0 2.743-1.619 4.57-4.18 4.57-2.56 0-4.312-1.784-4.312-4.494C14.32 6.984 16.04 5 18.6 5Z"/>
        </svg>
      </Link>

      <Link
        href="https://www.instagram.com/threesundays/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
        aria-label="Instagram"
      >
        {/* Instagram */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm5.25-2.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z"/>
        </svg>
      </Link>

      <Link
        href="https://www.linkedin.com/in/anton-krat-308626124/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
        aria-label="LinkedIn"
      >
        {/* LinkedIn */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 17v-7H5.67v7h2.67Zm-.01-8.34c.01-.8-.59-1.33-1.57-1.33S5.19 7.86 5.18 8.66c0 .79.6 1.33 1.57 1.33h.01c.98 0 1.57-.54 1.57-1.33Zm9.01 8.34v-3.73c0-1.99-1.06-2.92-2.47-2.92c-1.14 0-1.64.62-1.93 1.16v-1h-2.67s.04.65 0 7h2.67v-3.92c0-.21.02-.42.08-.57c.18-.42.59-.85 1.28-.85c.91 0 1.27.64 1.27 1.58V17h2.67Z"/>
        </svg>
      </Link>

      <Link
        href="https://t.me/AntonKrat"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
        aria-label="Telegram"
      >
        {/* Telegram */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M9.03 16.47l-.39 5.52c.56 0 .8-.24 1.1-.52l2.64-2.53 5.47 3.95c1 .55 1.72.26 1.98-.92l3.6-16.92l.01-.02c.32-1.48-.53-2.06-1.51-1.7l-21.21 8.18c-1.45.57-1.43 1.38-.25 1.75l5.43 1.69l12.6-7.95c.59-.39 1.13-.18.68.21"/>
        </svg>
      </Link>
    </div>

    <div>
      © {new Date().getFullYear()} — Anton Krat. Все права защищены.
    </div>
  </div>
</footer>

      </body>
    </html>
  );
}
