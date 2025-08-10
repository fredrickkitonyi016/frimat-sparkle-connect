import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import { useState } from "react";

const items = [
  { id: 1, title: "Enterprise Dashboard", category: "Web", image: p1 },
  { id: 2, title: "Mobile Fintech App", category: "Mobile", image: p2 },
  { id: 3, title: "Secure Network Setup", category: "Networking", image: p3 },
  { id: 4, title: "AI Insights UI", category: "AI", image: p4 },
];

const categories = ["All", "Web", "Mobile", "Networking", "AI"] as const;

const Portfolio = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="container py-12">
      <SEO
        title="Portfolio"
        description="Selected case studies by FRIMAT TECHNOLOGIES: web apps, mobile solutions, networking projects, and AI interfaces."
        canonical="/portfolio"
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Portfolio</h1>
        <p className="text-muted-foreground mt-2">Browse our recent work.</p>
      </header>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`px-3 py-1 rounded-md border text-sm ${filter === c ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-accent"}`}
            aria-pressed={filter === c}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((i) => (
          <article key={i.id} className="group relative overflow-hidden rounded-lg border">
            <LazyImage src={i.image} alt={`${i.title} thumbnail`} className="h-48 w-full object-cover group-hover:scale-[1.02] transition-transform" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-4 text-primary-foreground">
                <h3 className="font-medium">{i.title}</h3>
                <a href="#" className="text-sm story-link">View Case Study</a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
