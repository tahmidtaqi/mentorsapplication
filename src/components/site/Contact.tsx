import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";

const details = [
  { icon: Mail, label: "Email", value: "hello@sagorschemistry.com", href: "mailto:hello@sagorschemistry.com" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, label: "Based in", value: "New Delhi, India · Online worldwide" },
];

const socials = [
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/919876543210", label: "WhatsApp" },
];

const Contact = () => (
  <section id="contact" className="py-24 lg:py-32">
    <div className="container">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary text-primary-foreground p-10 lg:p-16 shadow-elegant grain">
        <div className="grid lg:grid-cols-12 gap-10 relative">
          <div className="lg:col-span-6">
            <p className="text-xs uppercase tracking-[0.32em] text-primary-foreground/70">
              Let's talk chemistry
            </p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-balance">
              Book a free 20-minute consultation.
            </h2>
            <p className="mt-5 text-primary-foreground/80 max-w-md leading-relaxed">
              Tell me about your goals, your syllabus, and the topics that feel hardest right now —
              I'll suggest a learning plan that actually fits your week.
            </p>

            <div className="mt-10 space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-foreground/10">
                    <d.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a href={d.href} className="text-base hover:underline underline-offset-4">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-base">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <form
            className="lg:col-span-6 bg-background text-foreground rounded-2xl p-8 shadow-soft"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent("New enquiry — Sagor's Chemistry Classroom");
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nClass/Goal: ${data.get("goal")}\n\n${data.get("message")}`
              );
              window.location.href = `mailto:hello@sagorschemistry.com?subject=${subject}&body=${body}`;
            }}
          >
            <h3 className="font-display text-2xl mb-6">Send a message</h3>
            <div className="grid gap-4">
              <label className="text-sm">
                <span className="text-muted-foreground">Your name</span>
                <input
                  required name="name"
                  className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="text-sm">
                <span className="text-muted-foreground">Email</span>
                <input
                  required type="email" name="email"
                  className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="text-sm">
                <span className="text-muted-foreground">Class / goal</span>
                <input
                  name="goal" placeholder="e.g. Class 12 Boards, NEET 2026"
                  className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <label className="text-sm">
                <span className="text-muted-foreground">Message</span>
                <textarea
                  required name="message" rows={4}
                  className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Send enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
