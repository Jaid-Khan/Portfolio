import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center text-yellow-400">
          Let's Connect
        </h2>

        <p className="text-center mb-12 text-lg text-white/70">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3 text-yellow-400">Email</h3>
              <a
                href="mailto:jaid@example.com"
                className="text-white hover:text-yellow-400 transition-colors"
              >
                jaid@example.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-yellow-400">
                Social Links
              </h3>

              <div className="space-y-2 text-white/70">
                {["GitHub", "LinkedIn", "Twitter/X"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg
                           bg-slate-800
                           border border-yellow-400/40
                           text-white
                           placeholder:text-white/40
                           focus:outline-none
                           focus:ring-2
                           focus:ring-yellow-400/60
                           transition-all"
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg resize-none
                         bg-slate-800
                         border border-yellow-400/40
                         text-white
                         placeholder:text-white/40
                         focus:outline-none
                         focus:ring-2
                         focus:ring-yellow-400/60
                         transition-all"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg font-semibold
                         bg-yellow-400
                         text-slate-900
                         hover:bg-yellow-300
                         hover:shadow-lg
                         hover:shadow-yellow-400/40
                         transition-all duration-200"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
