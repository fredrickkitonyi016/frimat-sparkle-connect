import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LazyImage from "@/components/LazyImage";
import { 
  Code2, 
  Headphones, 
  Shield, 
  Cloud, 
  FileText, 
  Printer,
  ArrowRight 
} from "lucide-react";
import devImg from "@/assets/service-webdev.jpg";
import cloudImg from "@/assets/service-cloud.jpg";
import secImg from "@/assets/service-security.jpg";
import itsupportImg from "@/assets/about-office.jpg";

const EnhancedServicesSection = () => {
  const services = [
    {
      id: 1,
      slug: "web-development",
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      icon: Code2,
      image: devImg,
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"],
      price: "From KSH 15,000"
    },
    {
      id: 2,
      slug: "it-support",
      title: "IT Support & Consultancy",
      description: "24/7 technical support and IT consultancy for businesses of all sizes.",
      icon: Headphones,
      image: itsupportImg,
      features: ["24/7 Support", "Remote Assistance", "On-site Visits", "System Maintenance"],
      price: "From KSH 5,000/month"
    },
    {
      id: 3,
      slug: "cybersecurity",
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your business from digital threats.",
      icon: Shield,
      image: secImg,
      features: ["Security Audits", "Firewall Setup", "Data Protection", "Threat Monitoring"],
      price: "From KSH 10,000"
    },
    {
      id: 4,
      slug: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Seamless cloud migration and optimization services for enhanced productivity.",
      icon: Cloud,
      image: cloudImg,
      features: ["Cloud Migration", "Data Backup", "Scalable Storage", "Cost Optimization"],
      price: "From KSH 8,000"
    },
    {
      id: 5,
      slug: "ecitizen-services",
      title: "E-Citizen & Government Services",
      description: "Assistance with government digital services and document processing.",
      icon: FileText,
      image: itsupportImg,
      features: ["ID Renewal", "Passport Applications", "License Renewals", "Certificate Requests"],
      price: "From KSH 500"
    },
    {
      id: 6,
      slug: "printing-services",
      title: "Printing & Cyber Services",
      description: "Professional printing, scanning, and document services.",
      icon: Printer,
      image: devImg,
      features: ["Document Printing", "Large Format", "Scanning Services", "Lamination"],
      price: "From KSH 50"
    },
  ];

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
          Our Comprehensive Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          From web development to government services, we provide end-to-end solutions for your digital needs
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full overflow-hidden hover-scale glass-card">
                <AspectRatio ratio={16/9}>
                  <LazyImage
                    src={service.image}
                    alt={`${service.title} illustration`}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-semibold text-lg">{service.title}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-primary mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground flex items-center gap-1">
                          <div className="w-1 h-1 rounded-full bg-primary"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm font-semibold text-primary">
                      {service.price}
                    </div>
                    <Button asChild size="sm" variant="outline" className="group/btn">
                      <Link to={`/services#${service.slug}`} className="flex items-center gap-1">
                        Learn More
                        <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Button asChild variant="hero" size="lg">
          <Link to="/contact" className="flex items-center gap-2">
            Request a Service Quote
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;