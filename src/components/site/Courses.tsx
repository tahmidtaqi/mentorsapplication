import { Beaker, FlaskConical, Atom, TestTube2 } from "lucide-react";

const courses = [
  {
    icon: Beaker,
    tag: "Class 9–10",
    title: "Foundations of Chemistry",
    desc: "Build rock-solid basics — atoms, bonding, reactions, and the language of equations.",
    duration: "12 weeks",
    sessions: "2x / week",
  },
  {
    icon: FlaskConical,
    tag: "Class 11–12",
    title: "Board Mastery: Physical, Organic & Inorganic",
    desc: "Complete board syllabus with conceptual depth, derivations, and exam-grade practice sets.",
    duration: "32 weeks",
    sessions: "3x / week",
  },
  {
    icon: Atom,
    tag: "NEET / JEE",
    title: "Competitive Chemistry Intensive",
    desc: "Problem-solving frameworks, mechanism mapping, and weekly mock tests with analytics.",
    duration: "40 weeks",
    sessions: "4x / week",
  },
  {
    icon: TestTube2,
    tag: "Crash Course",
    title: "Organic Chemistry in 30 Days",
    desc: "Reactions, reagents, and retrosynthesis — distilled into a focused, fast-paced sprint.",
    duration: "30 days",
    sessions: "Daily",
  },
];

const Courses = () => (
  <section id="courses" className="py-24 lg:py-32 bg-secondary/40">
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <div>
          <p className="section-eyebrow">Courses</p>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance">
            Programs designed around <em className="text-primary not-italic">how you learn best</em>.
          </h2>
        </div>
        <p className="lg:max-w-sm text-muted-foreground">
          Live online classes, recorded lessons, weekly assignments, and 1:1 doubt sessions —
          all included.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {courses.map((c, i) => (
          <article
            key={c.title}
            className="group relative bg-card-gradient border border-border/70 rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <span className="chip">{c.tag}</span>
            </div>
            <h3 className="mt-6 font-display text-xl leading-snug">{c.title}</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            <dl className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-background/60 px-3 py-2">
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="font-semibold text-foreground mt-0.5">{c.duration}</dd>
              </div>
              <div className="rounded-lg bg-background/60 px-3 py-2">
                <dt className="text-muted-foreground">Schedule</dt>
                <dd className="font-semibold text-foreground mt-0.5">{c.sessions}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
