import portrait from "@/assets/sagor-portrait.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-hero grain">
      <div className="container relative grid lg:grid-cols-12 gap-10 lg:gap-16 pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Floating molecules */}
        <svg
          aria-hidden
          className="absolute right-[6%] top-24 h-24 w-24 text-primary/30 animate-float hidden md:block"
          viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2"
        >
          <circle cx="20" cy="50" r="6" /><circle cx="50" cy="20" r="6" />
          <circle cx="80" cy="50" r="6" /><circle cx="50" cy="80" r="6" />
          <line x1="20" y1="50" x2="50" y2="20" /><line x1="50" y1="20" x2="80" y2="50" />
          <line x1="80" y1="50" x2="50" y2="80" /><line x1="50" y1="80" x2="20" y2="50" />
        </svg>
        <svg
          aria-hidden
          className="absolute left-[42%] bottom-10 h-16 w-16 text-primary/20 animate-drift hidden lg:block"
          viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2"
        >
          <circle cx="30" cy="30" r="5" /><circle cx="70" cy="30" r="5" />
          <circle cx="50" cy="70" r="5" />
          <line x1="30" y1="30" x2="70" y2="30" /><line x1="30" y1="30" x2="50" y2="70" />
          <line x1="70" y1="30" x2="50" y2="70" />
        </svg>

        <div className="lg:col-span-7 flex flex-col justify-center animate-fade-up">
          <span className="chip mb-6 w-fit">
            <Sparkles className="h-3 w-3" /> Chemistry made clear
          </span>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Where curious minds <em className="text-primary not-italic">react</em>,
            <br className="hidden sm:block" /> bond, and <span className="italic">transform</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Welcome to <strong className="text-foreground font-semibold">Sagor's Chemistry Classroom</strong> —
            a calm, focused space for school, college, and competitive-exam students who want to truly
            understand chemistry, not just memorize it.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Explore courses
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#videos"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm hover:bg-secondary transition-colors"
            >
              Watch a free lesson
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "8+", v: "Years teaching" },
              { k: "1.2k", v: "Students mentored" },
              { k: "94%", v: "Grade improvement" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-primary">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "120ms" }}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-secondary/60 -rotate-2" />
            <div className="absolute -inset-2 rounded-[1.6rem] bg-primary/10 rotate-1" />
            <img
              src={portrait}
              alt="Portrait of Sagor, chemistry tutor, in a sunlit classroom"
              className="relative rounded-[1.4rem] shadow-elegant object-cover w-full aspect-[4/5]"
              loading="eager"
            />
            <div className="absolute -bottom-5 -left-5 hidden sm:block bg-paper border border-border rounded-2xl p-4 shadow-soft max-w-[220px]">
              <p className="font-display italic text-sm leading-snug">
                "He turned chemistry from my worst subject into my favourite."
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                — Aria, Class 12
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
