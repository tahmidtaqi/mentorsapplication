import { Youtube } from "lucide-react";

const Videos = () => (
  <section id="videos" className="py-24 lg:py-32 bg-secondary/40">
    <div className="container">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <p className="section-eyebrow">Featured lesson</p>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl text-balance max-w-2xl">
            Learn a concept right now — on the house.
          </h2>
        </div>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm hover:bg-secondary transition-colors w-fit"
        >
          <Youtube className="h-4 w-4 text-primary" />
          Visit the YouTube channel
        </a>
      </div>

      <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant bg-background">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
            title="Sagor's Chemistry Classroom — Featured Lesson"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Tip: replace the embed URL in <code className="font-mono text-xs text-foreground">Videos.tsx</code> with any of your channel videos.
      </p>
    </div>
  </section>
);

export default Videos;
