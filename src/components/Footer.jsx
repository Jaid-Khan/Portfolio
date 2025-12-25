export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-8 px-4 sm:px-6 lg:px-8
                 bg-[oklch(0.2_0.01_0/0.5)]
                 border-t border-[oklch(0.2_0.05_270)]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[oklch(0.98_0_0/0.6)]">
            © {currentYear} Jaid Khan. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm text-[oklch(0.98_0_0/0.6)]">
            <a
              href="https://github.com"
              className="hover:text-[oklch(0.98_0_0)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="hover:text-[oklch(0.98_0_0)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jaid@example.com"
              className="hover:text-[oklch(0.98_0_0)] transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
