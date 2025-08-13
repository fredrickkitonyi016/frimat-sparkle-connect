import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import LazyImage from "@/components/LazyImage";
import { ShoppingCart, Filter } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";

const EnhancedProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cart, setCart] = useState<number[]>([]);

  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 3500,
      category: "accessories",
      image: product1,
      description: "High-quality wireless headphones with noise cancellation",
      inStock: true,
    },
    {
      id: 2,
      name: "USB-C Charging Cable",
      price: 800,
      category: "cables",
      image: product2,
      description: "Fast charging USB-C cable compatible with most devices",
      inStock: true,
    },
    {
      id: 3,
      name: "Wireless Mouse",
      price: 2200,
      category: "accessories",
      image: product1,
      description: "Ergonomic wireless mouse with precision tracking",
      inStock: false,
    },
    {
      id: 4,
      name: "HDMI Cable 2m",
      price: 1200,
      category: "cables",
      image: product2,
      description: "High-speed HDMI cable for 4K video transmission",
      inStock: true,
    },
    {
      id: 5,
      name: "Laptop Stand",
      price: 4500,
      category: "accessories",
      image: product1,
      description: "Adjustable aluminum laptop stand for better ergonomics",
      inStock: true,
    },
    {
      id: 6,
      name: "Network Router",
      price: 8500,
      category: "networking",
      image: product2,
      description: "High-speed WiFi 6 router for home and office use",
      inStock: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "accessories", name: "Accessories" },
    { id: "cables", name: "Cables" },
    { id: "networking", name: "Networking" },
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId: number) => {
    if (!cart.includes(productId)) {
      setCart([...cart, productId]);
      toast.success("Product added to cart!");
    } else {
      toast.info("Product already in cart");
    }
  };

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
          Tech Accessories & Products
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Quality tech accessories and equipment at competitive prices
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mr-4">
          <Filter size={16} />
          Filter by:
        </div>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.id)}
            className="text-xs"
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden hover-scale">
            <AspectRatio ratio={16/9}>
              <LazyImage
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </AspectRatio>
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                {!product.inStock && (
                  <Badge variant="secondary" className="text-xs">
                    Out of Stock
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="text-lg font-semibold text-primary">
                  KSH {product.price.toLocaleString()}
                </div>
                <Button
                  size="sm"
                  onClick={() => addToCart(product.id)}
                  disabled={!product.inStock || cart.includes(product.id)}
                  className="flex items-center gap-1 text-xs"
                >
                  <ShoppingCart size={14} />
                  {cart.includes(product.id) ? "Added" : "Add to Cart"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-muted-foreground mb-4">
          Cart items: {cart.length} | Need something specific?
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline">
            <Link to="/shop">View All Products</Link>
          </Button>
          <Button asChild>
            <Link to="/contact">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EnhancedProductsSection;