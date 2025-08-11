import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/blog", label: "Blog" },
  { to: "/shop", label: "Shop" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const NavBar: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed bottom-0 left-0 right-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" aria-label="FRIMAT TECHNOLOGIES home">
          <motion.img
            src="/lovable-uploads/ba6e4688-aafe-49ba-bf33-3137f4ec6e09.png"
            alt="FRIMAT TECHNOLOGIES logo — Connecting Innovation. Delivering Solutions."
            className="h-8 md:h-10 w-auto"
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            decoding="async"
            loading="eager"
          />
          <span className="sr-only">FRIMAT TECHNOLOGIES</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild variant="hero" className="water-drop btn-glow">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden fixed bottom-16 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button asChild variant="hero" className="water-drop btn-glow">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
