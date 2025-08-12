import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";
import devImg from "@/assets/service-webdev.jpg";
import cloudImg from "@/assets/service-cloud.jpg";
import secImg from "@/assets/service-security.jpg";
import itsupportImg from "@/assets/about-office.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Code, Headphones, Shield, Cloud } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    { slug: "web-development", title: "Web Development", desc: "Modern, scalable websites and applications.", icon: <Code />, image: devImg },
    { slug: "it-support", title: "IT Support", desc: "Reliable support to keep you running.", icon: <Headphones />, image: itsupportImg },
    { slug: "cybersecurity", title: "Cybersecurity", desc: "Protect your business from threats.", icon: <Shield />, image: secImg },
    { slug: "cloud-solutions", title: "Cloud Solutions", desc: "Migrate, optimize, and scale in the cloud.", icon: <Cloud />, image: cloudImg },
  ];

  return (
    <div className="container py-12">
      <SEO
        title="Services"
        description="Explore FRIMAT TECHNOLOGIES services: web development, IT support, cybersecurity, and cloud solutions. Request a service today."
        canonical="/services"
      />

      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Services</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">Comprehensive solutions tailored to your goals.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card id={s.slug} key={s.title} className="glass-card overflow-hidden hover-scale">
            <AspectRatio ratio={16/9}>
              <LazyImage
                src={s.image}
                alt={`${s.title} illustration`}
                className="h-full w-full object-cover"
              />
            </AspectRatio>
            <CardContent className="p-5">
              <div className="text-primary mb-2">{s.icon}</div>
              <h3 className="font-medium">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Button asChild variant="hero">
          <Link to="/contact">Request a Service</Link>
        </Button>
      </div>
    </div>
  );
};

export default Services;
