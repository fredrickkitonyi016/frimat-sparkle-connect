import SEO from "@/components/SEO";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import a1 from "@/assets/avatar-1.jpg";
import a2 from "@/assets/avatar-2.jpg";
import a3 from "@/assets/avatar-3.jpg";
import { useEffect, useState } from "react";

const testimonials = [
  { id: 1, name: "Amina K.", role: "CEO, FinServe", avatar: a2, rating: 5, quote: "FRIMAT delivered beyond expectations — our uptime and performance improved dramatically." },
  { id: 2, name: "Brian O.", role: "Head of IT, HealthNet", avatar: a1, rating: 5, quote: "Professional team with solid security expertise. Highly recommended." },
  { id: 3, name: "Grace N.", role: "Founder, EduTech", avatar: a3, rating: 4, quote: "Our new platform launched on time and scales beautifully." },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      api.scrollNext();
    }, 6000);
    return () => clearInterval(id);
  }, [api]);

  return (
    <div className="container py-12">
      <SEO
        title="Testimonials"
        description="Client testimonials for FRIMAT TECHNOLOGIES. Read what our customers say about our services."
        canonical="/testimonials"
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Testimonials</h1>
        <p className="text-muted-foreground mt-2">What our clients say.</p>
      </header>

      <div className="relative">
        <Carousel className="w-full" setApi={setApi}>
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.id} className="md:basis-1/2 lg:basis-1/3">
                <figure className="rounded-lg border p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4">
                    <img src={t.avatar} alt={`${t.name} avatar`} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                    <figcaption>
                      <div className="font-medium">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </figcaption>
                  </div>
                  <div className="flex gap-1 mt-3 text-primary" aria-label={`${t.rating} star rating`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill={i < t.rating ? "currentColor" : "none"} />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">“{t.quote}”</p>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
