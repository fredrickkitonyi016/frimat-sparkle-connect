import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import * as React from "react";

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
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-block h-6 w-6 rounded-sm bg-gradient-primary" aria-hidden />
          <div className="leading-tight">
            <span className="block font-semibold tracking-wide">FRIMAT TECHNOLOGIES</span>
            <span className="block text-xs text-muted-foreground">Connecting Innovation</span>
          </div>
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
          <Button asChild variant="hero">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t">
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
            <Button asChild variant="hero">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
