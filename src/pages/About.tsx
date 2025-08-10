import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";
import aboutImg from "@/assets/about-office.jpg";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import { Lightbulb, ShieldCheck, Award, Linkedin, Github, Twitter } from "lucide-react";

const About = () => {
  const values = [
    { icon: <Lightbulb />, title: "Innovation", desc: "We create forward-thinking solutions." },
    { icon: <ShieldCheck />, title: "Reliability", desc: "Dependable delivery, every time." },
    { icon: <Award />, title: "Excellence", desc: "Quality is our standard." },
  ];

  const team = [
    { name: "Alex Kim", role: "CTO", avatar: a1 },
    { name: "Sara Lee", role: "Project Lead", avatar: a2 },
    { name: "James Okoro", role: "Security Engineer", avatar: a3 },
  ];

  return (
    <div className="container py-12">
      <SEO
        title="About Us"
        description="Learn about FRIMAT TECHNOLOGIES: our mission, vision, and the team driving innovation across web, cloud, and cybersecurity."
        canonical="/about"
      />

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">About Us</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          We are a technology company committed to connecting innovation and delivering solutions that empower businesses.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-xl font-medium">Our Story</h2>
          <p className="text-muted-foreground mt-3">
            From humble beginnings to serving clients across diverse industries, we are driven by a passion for impactful technology.
          </p>
        </div>
        <LazyImage src={aboutImg} alt="Team collaborating in a modern office" className="h-64 w-full object-cover" />
      </div>

      <section className="mt-12">
        <h2 className="text-xl font-medium mb-4">Core Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <article key={v.title} className="rounded-lg border p-6 bg-card">
              <div className="text-primary mb-3">{v.icon}</div>
              <h3 className="font-medium">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-medium mb-4">Our Team</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="rounded-lg border p-6 text-center">
              <img src={m.avatar} alt={`${m.name} profile`} loading="lazy" className="mx-auto h-24 w-24 rounded-full object-cover" />
              <h3 className="mt-3 font-medium">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
              <div className="flex justify-center gap-3 mt-3 text-muted-foreground">
                <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin size={18} /></a>
                <a href="#" aria-label="GitHub" className="hover:text-foreground"><Github size={18} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter size={18} /></a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
