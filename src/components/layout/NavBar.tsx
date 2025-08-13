import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, Wrench, Briefcase, Newspaper, ShoppingCart, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import * as React from "react";
import { motion } from "framer-motion";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

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

const iconsMap: Record<string, LucideIcon> = {
  '/': Home,
  '/about': Info,
  '/services': Wrench,
  '/portfolio': Briefcase,
  '/blog': Newspaper,
  '/shop': ShoppingCart,
  '/testimonials': MessageCircle,
  '/contact': Phone,
};

const serviceLinks = [
  { label: 'Web Development', to: '/services#web-development' },
  { label: 'IT Support', to: '/services#it-support' },
  { label: 'Cybersecurity', to: '/services#cybersecurity' },
  { label: 'Cloud Solutions', to: '/services#cloud-solutions' },
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
            className="h-8 md:h-10 w-auto brightness-0 invert"
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
          {navItems.map((item) => {
            const Icon = iconsMap[item.to as keyof typeof iconsMap];
            if (item.to === "/services") {
              return (
                <DropdownMenu key={item.to}>
                  <DropdownMenuTrigger asChild>
                    <button
                      aria-label="Services menu"
                      className="water-drop hover-scale p-2 rounded-md transition-colors text-muted-foreground hover:text-foreground"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                      <span className="sr-only">Services</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="center" className="z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border rounded-md p-1 min-w-[14rem]">
                    {serviceLinks.map((s) => (
                      <DropdownMenuItem asChild key={s.to}>
                        <Link to={s.to} className="story-link">
                          {s.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <NavLink
                key={item.to}
                to={item.to}
                aria-label={item.label}
                className={({ isActive }) =>
                  `water-drop hover-scale p-2 rounded-md transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`
                }
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{item.label}</span>
              </NavLink>
            );
          })}
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
            {navItems.map((item) => {
              const Icon = iconsMap[item.to as keyof typeof iconsMap];
              if (item.to === "/services") {
                return (
                  <DropdownMenu key={item.to}>
                    <DropdownMenuTrigger asChild>
                      <button
                        aria-label="Services menu"
                        className={`water-drop hover-scale p-2 rounded-md transition-colors text-muted-foreground hover:text-foreground`}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                        <span className="sr-only">Services</span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="top" align="center" className="z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border rounded-md p-1 min-w-[14rem]">
                      {serviceLinks.map((s) => (
                        <DropdownMenuItem asChild key={s.to}>
                          <Link to={s.to} onClick={() => setOpen(false)} className="story-link">
                            {s.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-label={item.label}
                  className={({ isActive }) =>
                    `water-drop hover-scale p-2 rounded-md transition-colors hover:text-foreground ${isActive ? "text-foreground" : "text-muted-foreground"}`
                  }
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="sr-only">{item.label}</span>
                </NavLink>
              );
            })}
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
