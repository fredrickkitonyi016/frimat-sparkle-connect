import SEO from "@/components/SEO";
import LazyImage from "@/components/LazyImage";
import pr1 from "@/assets/product-1.jpg";
import pr2 from "@/assets/product-2.jpg";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const products = [
  { id: 1, name: "Pro Software Suite", price: 199, category: "Software", image: pr1 },
  { id: 2, name: "Gigabit Router", price: 129, category: "Networking Gear", image: pr2 },
  { id: 3, name: "Hosting Plan (1y)", price: 99, category: "Hosting Plans", image: pr1 },
];

const categories = ["All", "Software", "Networking Gear", "Hosting Plans"] as const;

const Shop = () => {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const [cart, setCart] = useState<number[]>([]);

  const filtered = useMemo(() => (filter === "All" ? products : products.filter((p) => p.category === filter)), [filter]);

  const addToCart = (id: number) => {
    setCart((c) => [...c, id]);
    toast.success("Added to cart");
  };

  return (
    <div className="container py-12">
      <SEO
        title="Shop"
        description="Shop FRIMAT TECHNOLOGIES software, networking gear, and hosting plans. Secure and reliable solutions."
        canonical="/shop"
      />

      <header className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-semibold">Shop</h1>
          <p className="text-muted-foreground mt-2">Quality tech products and services.</p>
        </div>
        <div className="text-sm text-muted-foreground">Cart: {cart.length}</div>
      </header>

      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((c) => (
          <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1 rounded-md border text-sm ${filter === c ? "bg-primary text-primary-foreground" : "bg-background text-foreground hover:bg-accent"}`}>{c}</button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.id} className="rounded-lg border overflow-hidden">
            <LazyImage src={p.image} alt={`${p.name}`} className="h-40 w-full object-cover" />
            <div className="p-5">
              <h3 className="font-medium">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.category}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-semibold">${p.price}</span>
                <Button onClick={() => addToCart(p.id)} variant="hero">Add to Cart</Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Shop;
