import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/hero-tech.jpg";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, PhoneCall } from "lucide-react";

const Index = () => {
  return (
    <div>
      <SEO
        title="Home"
        description="FRIMAT TECHNOLOGIES — Connecting Innovation. Delivering Solutions in web development, IT support, cloud, and cybersecurity."
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "FRIMAT TECHNOLOGIES",
          slogan: "Connecting Innovation. Delivering Solutions.",
          url: "/",
          email: "frimattechnologies016@gmail.com",
          telephone: "+254112277289",
          address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
        }}
      />

      <section className="relative">
        <div className="absolute inset-0">
          <LazyImage src={heroImage} alt="City skyline with digital network lines" className="h-[60vh] md:h-[70vh] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>
        <div className="container relative py-24 md:py-32">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-display font-semibold max-w-3xl"
          >
            FRIMAT TECHNOLOGIES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl"
          >
            Connecting Innovation. Delivering Solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild variant="hero">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="container py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Our Services", to: "/services", icon: <Briefcase />, desc: "Web, Cloud, Cybersecurity" },
            { title: "Portfolio", to: "/portfolio", icon: <ArrowRight />, desc: "View case studies" },
            { title: "Contact Us", to: "/contact", icon: <PhoneCall />, desc: "+254 112 277 289" },
          ].map((card) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-lg border p-6 hover-scale bg-card shadow-[var(--shadow-elevated)]/20"
            >
              <div className="text-primary mb-3">{card.icon}</div>
              <h3 className="font-medium text-lg mb-1">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
              <Link to={card.to} className="story-link text-sm">Explore</Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
