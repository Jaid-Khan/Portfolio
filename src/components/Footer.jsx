export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-yellow-400/30 overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute -top-10 left-1/4 w-[300px] h-[300px] bg-yellow-400/10 blur-3xl rounded-full -z-10" />
      <div className="absolute -bottom-10 right-1/4 w-[300px] h-[300px] bg-orange-500/10 blur-3xl rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-white/60">
            © {currentYear} <span className="font-semibold text-yellow-400">Jaid Khan</span>. All rights reserved.
          </div>

          <div className="flex gap-6 text-sm">
            {[
              { label: "GitHub", link: "https://github.com/Jaid-Khan" },
              { label: "LinkedIn", link: "https://www.linkedin.com/in/jaid-khan" },
              { label: "Email", link: "mailto:jaid@example.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-yellow-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-white/40">
          Designed & Built with ❤️ using React.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
