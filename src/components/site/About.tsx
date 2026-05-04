const points = [
  "Concept-first teaching with real-world analogies",
  "Personalised pacing for every student",
  "Doubt sessions, notes, and weekly assessments",
];

const About = () => (
  <section id="about" className="py-24 lg:py-32">
    <div className="container grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <p className="section-eyebrow">About the tutor</p>
        <h2 className="mt-4 font-display text-4xl lg:text-5xl leading-tight text-balance">
          Patient, precise, and a little bit obsessed with the periodic table.
        </h2>
      </div>
      <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-muted-foreground leading-relaxed">
        <p>
          I'm <span className="text-foreground font-semibold">Sagor</span> — a chemistry teacher who
          believes every student deserves a moment when a difficult concept finally clicks.
          Over the last eight years I've helped students from Class 9 through undergraduate level
          build genuine intuition for chemistry — from stoichiometry to organic mechanisms.
        </p>
        <p>
          My classes mix structured curriculum, plenty of practice, and weekly recorded recaps so
          you never lose your footing. Whether you're chasing top board marks or preparing for NEET,
          JEE, or SAT Subject — we'll get there together.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 pt-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-base text-foreground">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
