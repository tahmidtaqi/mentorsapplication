const timeline = [
  {
    year: "2022 — Present",
    role: "Founder & Lead Educator",
    org: "Sagor's Chemistry Classroom",
    desc: "Built an online classroom serving 1,200+ students across India and the diaspora.",
  },
  {
    year: "2019 — 2022",
    role: "Senior Chemistry Faculty",
    org: "Aakash Institute",
    desc: "Led NEET/JEE batches with consistent top-quartile results in physical and organic chemistry.",
  },
  {
    year: "2017 — 2019",
    role: "PGT Chemistry",
    org: "Delhi Public School",
    desc: "Taught Class 11 & 12 board curriculum and mentored the inter-school science olympiad team.",
  },
  {
    year: "2015 — 2017",
    role: "M.Sc. Chemistry",
    org: "University of Delhi",
    desc: "Specialisation in organic synthesis. Graduated with distinction.",
  },
];

const Experience = () => (
  <section id="experience" className="py-24 lg:py-32">
    <div className="container grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <p className="section-eyebrow">Experience</p>
        <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
          A decade in classrooms — physical and digital.
        </h2>
        <p className="mt-5 text-muted-foreground">
          From institute lecture halls to one-on-one online sessions, every step has shaped how I teach today.
        </p>
      </div>

      <ol className="lg:col-span-7 lg:col-start-6 relative border-l border-border pl-8 space-y-10">
        {timeline.map((t) => (
          <li key={t.year} className="relative">
            <span className="absolute -left-[37px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-background border border-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-primary">{t.year}</p>
            <h3 className="mt-2 font-display text-2xl">{t.role}</h3>
            <p className="text-sm text-muted-foreground">{t.org}</p>
            <p className="mt-2 text-base leading-relaxed">{t.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
