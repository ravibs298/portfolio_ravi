import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setTimeout(() => setSent(false), 4000);
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
        }
      );
  };

  const contactInfo = [
    {
      label: "Email",
      value: "ravispatel2908@gmail.com",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
    },
    {
      label: "Phone",
      value: "+91 9219548534",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Ghaziabad, India",
      icon: (
        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/ravibs298",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.30-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.30-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/ravibhushansinghh/",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM6.12 20.45H4.55V9h1.57v11.45z"/>
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "https://x.com/RaviBhu55253367",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.717 0-4.924 2.206-4.924 4.924 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.377 4.6 3.418-1.68 1.317-3.809 2.103-6.102 2.103-.395 0-.787-.023-1.175-.068 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634.961-.689 1.8-1.56 2.46-2.548z"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://instagram.com/ravispatel298",
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" rx="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="18" cy="6" r="1"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-3">
            Let's Connect
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div>
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-center gap-4 mb-4">
                {c.icon}
                <div>
                  <p className="text-xs text-slate-400">{c.label}</p>
                  <p className="font-semibold">{c.value}</p>
                </div>
              </div>
            ))}

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow hover:bg-blue-50 transition"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white p-6 rounded-xl shadow">
            {sent && <p className="text-green-600 mb-3">Message sent!</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full border p-2 rounded"/>
              <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full border p-2 rounded"/>
              <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required className="w-full border p-2 rounded"/>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required className="w-full border p-2 rounded"/>
              <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;