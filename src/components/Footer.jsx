export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-8 px-4 sm:px-6 lg:px-8
                 bg-slate-900
                 border-t border-yellow-400/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60">
            © {currentYear} Jaid Khan. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-white/60">
            <a
              href="https://github.com"
              className="hover:text-yellow-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-yellow-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jaid@example.com"
              className="hover:text-yellow-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
