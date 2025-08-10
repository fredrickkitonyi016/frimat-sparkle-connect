import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/hero-tech.jpg";
import aboutImage from "@/assets/about-office.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, PhoneCall, Brain, Cloud, Code2, ShieldCheck, ServerCog, Wrench } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import Lottie from "lottie-react";
import techNetwork from "@/assets/lottie/tech-network.json";
import codePulse from "@/assets/lottie/code-pulse.json";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const FloatingIcon = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
    animate={{ opacity: 0.9, scale: 1, rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay }}
  >
    {children}
  </motion.div>
);

const TestimonialsRotator = () => {
  const items = useMemo(
    () => [
      { id: 1, name: "Jane M.", role: "Business Owner", avatar: a1, rating: 5, quote: "FRIMAT TECHNOLOGIES transformed our outdated system into a streamlined, secure platform." },
      { id: 2, name: "Kelvin R.", role: "CTO, StartupX", avatar: a2, rating: 5, quote: "Fast delivery, excellent communication, and rock-solid results." },
      { id: 3, name: "Maria C.", role: "Ops Lead", avatar: a3, rating: 4, quote: "Our migration to the cloud was seamless and well-documented." },
    ],
    []
  );
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  const current = items[index];
  return (
    <div className="relative mx-auto max-w-3xl">
      <AnimatePresence mode="wait">
        <motion.figure
          key={current.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg border bg-card p-6 shadow-sm"
        >
          <div className="flex items-center gap-4">
            <img src={current.avatar} alt={`${current.name} avatar`} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
            <figcaption>
              <div className="font-medium">{current.name}</div>
              <div className="text-xs text-muted-foreground">{current.role}</div>
            </figcaption>
          </div>
          <p className="text-muted-foreground mt-4">“{current.quote}”</p>
        </motion.figure>
      </AnimatePresence>
    </div>
  );
};


const Index = () => {
  const { scrollY } = useScroll();
const parallaxY = useTransform(scrollY, [0, 300], [0, -60]);
  const [portfolioApi, setPortfolioApi] = useState<any>(null);
  useEffect(() => {
    if (!portfolioApi) return;
    const id = setInterval(() => portfolioApi.scrollNext?.(), 4000);
    return () => clearInterval(id);
  }, [portfolioApi]);

  return (
    <div>
      <SEO
        title="FRIMAT TECHNOLOGIES — Connecting Innovation. Delivering Solutions."
        description="FRIMAT TECHNOLOGIES builds future-ready web, cloud, and cybersecurity solutions with smooth animations and performance."
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

      {/* 1️⃣ Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <motion.div style={{ y: parallaxY }} className="absolute inset-0">
            <LazyImage src={heroImage} alt="City skyline with digital network lines" className="h-[70vh] md:h-[80vh] w-full object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          {/* Soft particle-like orbs using Motion, no extra deps */}
          {[...Array(12)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute size-2 md:size-3 rounded-full bg-primary/30"
              initial={{ x: Math.random() * 100 + "%", y: Math.random() * 300 + 20, opacity: 0 }}
              animate={{ y: ["0%", "-20%", "0%"], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 6 + Math.random() * 6, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              style={{ left: `${(i * 9) % 100}%`, top: `${20 + (i * 7) % 60}%` }}
            />
          ))}
          {/* Floating tech icons */}
          <FloatingIcon className="hidden md:block absolute left-10 top-20 text-primary" delay={0}><Brain size={28} /></FloatingIcon>
          <FloatingIcon className="hidden md:block absolute right-12 top-28 text-primary" delay={4}><Cloud size={28} /></FloatingIcon>
          <FloatingIcon className="hidden md:block absolute right-24 bottom-16 text-primary" delay={8}><Code2 size={28} /></FloatingIcon>
        </div>
        <div className="container relative py-24 md:py-32">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-semibold max-w-4xl"
          >
            FRIMAT TECHNOLOGIES — Connecting Innovation. Delivering Solutions.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mt-4 max-w-3xl"
          >
            We build future-ready digital solutions for businesses and individuals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild variant="hero" className="animate-enter">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild variant="outline" className="hover:shadow-[var(--shadow-elevated)]">
              <Link to="/services">Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* 2️⃣ Company Snapshot */}
      <section className="container py-16">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-primary opacity-20 blur-md" aria-hidden />
            <LazyImage src={aboutImage} alt="Modern office team collaborating on laptops" className="rounded-xl h-64 md:h-80 w-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-semibold">Who We Are</h2>
            <p className="text-muted-foreground mt-3">
              FRIMAT TECHNOLOGIES specializes in creating custom IT solutions that drive efficiency, security, and growth. From sleek websites to robust networking systems, we empower businesses to excel in a digital-first world.
            </p>
            <div className="mt-4 max-w-[180px]">
              <Lottie animationData={techNetwork} loop autoplay className="h-20" />
            </div>
            <Button asChild className="mt-6" variant="secondary">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 3️⃣ Services Overview */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Web Development", desc: "Responsive, scalable, and modern websites.", Icon: Code2 },
            { title: "IT Support", desc: "On-demand technical assistance & maintenance.", Icon: Wrench },
            { title: "Cybersecurity", desc: "Protect your data with advanced security measures.", Icon: ShieldCheck },
            { title: "Cloud Solutions", desc: "Seamless migration and cloud hosting.", Icon: Cloud },
          ].map(({ title, desc, Icon }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-lg border p-6 bg-card hover-scale"
            >
              <div className="mb-3 text-primary flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                <Icon className="transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="font-medium text-lg mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-6">
          <Link to="/services" className="story-link text-sm">View All Services</Link>
        </div>
      </section>

      {/* 4️⃣ Featured Portfolio – Slider with autoplay */}
      <section className="container py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-display font-semibold">Featured Work</h2>
        </div>
        <div className="relative">
          <Carousel className="w-full" setApi={setPortfolioApi}>
            <CarouselContent>
              {[{img:p1,title:"E‑commerce Platform Redesign"},{img:p2,title:"Corporate Website with CMS"},{img:p3,title:"Secure Networking Setup"}].map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <article className="relative overflow-hidden rounded-lg border">
                    <img src={item.img} alt={`${item.title} case study preview`} loading="lazy" className="h-56 w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-base font-medium">{item.title}</h3>
                      <Link to="/portfolio" className="story-link text-xs">View Case Study</Link>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      {/* 5️⃣ Why Choose Us */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">Why Choose Us</h2>
        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[{icon:PhoneCall,label:"24/7 Support"},{icon:Briefcase,label:"Certified Experts"},{icon:ServerCog,label:"Affordable Pricing"},{icon:Brain,label:"Custom Solutions"}].map((item, i) => {
            const Icon = item.icon as any;
            return (
              <div key={item.label} className="relative flex flex-col items-center rounded-lg border p-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary animate-[pulse_5s_ease-in-out_infinite]">
                  <Icon />
                </div>
                <div className="mt-3 font-medium">{item.label}</div>
              </div>
            );
          })}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="mx-20 h-px bg-border" />
          </div>
        </div>
      </section>

      {/* 6️⃣ Client Testimonials – fade every 6s */}
      <section className="container py-12">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6">What Clients Say</h2>
        <TestimonialsRotator />
      </section>

      {/* 7️⃣ Call-to-Action Banner */}
      <section className="relative">
        <div className="container relative">
          <div className="overflow-hidden rounded-xl border bg-gradient-primary">
            <div className="p-10 text-primary-foreground">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-display font-semibold">Let’s build your digital future together.</h3>
                  <p className="text-primary-foreground/80 mt-1">Request a free consultation today.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:block">
                    <Lottie animationData={codePulse} loop autoplay className="h-14" />
                  </div>
                  <Button asChild variant="secondary" className="pulse">
                    <Link to="/contact">Request a Free Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8️⃣ Quick Links tiles (kept minimal) */}
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
