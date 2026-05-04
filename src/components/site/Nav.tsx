import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#courses", label: "Courses" },
  { href: "#experience", label: "Experience" },
  { href: "#videos", label: "Videos" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <nav className="container flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg">
          <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-base">
            S
          </span>
          <span className="leading-tight">
            Sagor's <span className="text-primary">Chemistry</span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Classroom</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Book a session
        </a>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95">
          <ul className="container py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full justify-center rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground"
              >
                Book a session
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
