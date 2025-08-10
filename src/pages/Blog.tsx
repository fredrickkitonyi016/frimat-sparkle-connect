import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

const allPosts = [
  { id: 1, title: "Why Secure by Design Matters", category: "Security", image: b2, excerpt: "Build resilience by embedding security into every layer." },
  { id: 2, title: "Cloud Cost Optimization 101", category: "Cloud", image: b1, excerpt: "Practical tips to reduce spend without sacrificing performance." },
  { id: 3, title: "Modern Web Stacks in 2025", category: "Web", image: b1, excerpt: "Choosing the right tools for scalable delivery." },
  { id: 4, title: "Zero Trust Basics", category: "Security", image: b2, excerpt: "Shift from perimeter defense to continuous verification." },
];

const categories = ["All", "Web", "Cloud", "Security"] as const;
const PAGE_SIZE = 3;

const Blog = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const base = category === "All" ? allPosts : allPosts.filter((p) => p.category === category);
    return base.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="container py-12">
      <SEO
        title="Blog"
        description="Insights from FRIMAT TECHNOLOGIES on web development, cloud engineering, and cybersecurity."
        canonical="/blog"
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Blog</h1>
        <p className="text-muted-foreground mt-2">Tech insights and company news.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        <aside className="md:col-span-1 order-2 md:order-1">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Search</h3>
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search articles" />
          </div>
          <div className="rounded-lg border p-4 mt-4">
            <h3 className="font-medium mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button key={c} onClick={() => { setCategory(c); setPage(1); }} className={`px-3 py-1 rounded-md border text-sm ${category === c ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-accent"}`}>{c}</button>
              ))}
            </div>
          </div>
        </aside>

        <section className="md:col-span-2 order-1 md:order-2 space-y-6">
          {paginated.map((p) => (
            <article key={p.id} className="rounded-lg border overflow-hidden">
              <LazyImage src={p.image} alt={`${p.title} feature image`} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-medium text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{p.excerpt}</p>
                <a href="#" className="story-link text-sm mt-3 inline-block">Read More</a>
              </div>
            </article>
          ))}

          <div className="flex items-center justify-between pt-2">
            <button disabled={page === 1} onClick={() => setPage((p) => Math.max(1, p - 1))} className="text-sm disabled:opacity-50">Previous</button>
            <span className="text-sm text-muted-foreground">Page {page} of {totalPages}</span>
            <button disabled={page === totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))} className="text-sm disabled:opacity-50">Next</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
