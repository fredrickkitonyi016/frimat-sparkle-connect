import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Footer = () => {
  const onSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Subscribed to newsletter!");
  };

  return (
    <footer className="border-t mt-16">
      <div className="container py-12 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block h-6 w-6 rounded-sm bg-gradient-primary" aria-hidden />
            <span className="font-semibold">FRIMAT TECHNOLOGIES</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4 max-w-sm">
            Connecting Innovation. Delivering Solutions.
          </p>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <a href="mailto:frimattechnologies016@gmail.com" className="hover:text-foreground flex items-center gap-2">
              <Mail size={16} /> frimattechnologies016@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mt-2">
            <a href="https://wa.me/254112277289" target="_blank" className="hover:text-foreground flex items-center gap-2" rel="noreferrer">
              <Phone size={16} /> +254 112 277 289
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/services", label: "Services" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/blog", label: "Blog" },
              { to: "/shop", label: "Shop" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-foreground story-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Find Us</h4>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            <MapPin size={16} /> Nairobi, Kenya
          </p>
          <div className="flex gap-3 mt-3 text-muted-foreground">
            <a href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-foreground"><Twitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin /></a>
            <a href="#" aria-label="YouTube" className="hover:text-foreground"><Youtube /></a>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Newsletter</h4>
          <p className="text-sm text-muted-foreground mb-3">Stay updated with tech insights and company news.</p>
          <form onSubmit={onSubscribe} className="flex gap-2">
            <Input type="email" required placeholder="Your email" aria-label="Email" />
            <Button variant="hero" type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FRIMAT TECHNOLOGIES · <Link to="/" className="hover:text-foreground">All rights reserved</Link>
      </div>
    </footer>
  );
};

export default Footer;
