import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[420px] h-[420px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2
          data-aos="zoom-in-right"
          className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          Let’s Connect
        </h2>

        <p
          data-aos="zoom-in-right"
          className="text-center mb-12 text-lg text-white/70"
        >
          I’m always open to discussing new projects, creative ideas, or
          opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Info */}
          <div
            data-aos="zoom-in-right"
            className="
              p-6 rounded-2xl
              bg-white/5 backdrop-blur-xl
              border border-white/10
            "
          >
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-yellow-400">Email</h3>
                <a
                  href="mailto:jaid@example.com"
                  className="text-white/80 hover:text-yellow-400 transition-colors"
                >
                  jaidkhan04072001@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-yellow-400">
                  Social Links
                </h3>

                <div className="space-y-2 flex flex-col text-white/70">
                  {[
                    { label: "GitHub", link: "https://github.com/Jaid-Khan" },
                    {
                      label: "LinkedIn",
                      link: "https://www.linkedin.com/in/jaid-khan/",
                    },
                    { label: "Email", link: "mailto:jaidkhan04072001@gmail.com" },
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
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="zoom-in-left"
            className="
              p-6 rounded-2xl space-y-4
              bg-white/5 backdrop-blur-xl
              border border-white/10
            "
          >
            {["name", "email"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                value={formData[field]}
                onChange={handleChange}
                required
                className="
                  w-full px-4 py-3 rounded-xl
                  bg-black/40
                  border border-white/10
                  text-white
                  placeholder:text-white/40
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-400/60
                  transition-all
                "
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="
                w-full px-4 py-3 rounded-xl resize-none
                bg-black/40
                border border-white/10
                text-white
                placeholder:text-white/40
                focus:outline-none
                focus:ring-2
                focus:ring-yellow-400/60
                transition-all
              "
            />

            <button
              type="submit"
              data-aos="zoom-in-up"
              className="
                w-full px-6 py-3 rounded-full font-semibold
                bg-gradient-to-r from-yellow-400 to-orange-500
                text-slate-900
                hover:shadow-lg hover:shadow-yellow-400/40
                hover:-translate-y-0.5
                transition-all
              "
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
