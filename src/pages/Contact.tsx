import SEO from "@/components/SEO";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <div className="container py-12">
      <SEO
        title="Contact"
        description="Contact FRIMAT TECHNOLOGIES — email, WhatsApp, or send a message. Find us in Nairobi, Kenya."
        canonical="/contact"
      />

      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-display font-semibold">Contact</h1>
        <p className="text-muted-foreground mt-2">We'd love to hear from you.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <form onSubmit={onSubmit} className="rounded-lg border p-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <Input required name="name" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input type="email" required name="email" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium">Phone</label>
            <Input type="tel" name="phone" placeholder="+254 ..." />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <Textarea required name="message" placeholder="How can we help?" rows={5} />
          </div>
          <Button type="submit" variant="hero">Send Message</Button>
        </form>

        <div className="space-y-4">
          <div className="rounded-lg overflow-hidden border">
            <iframe
              title="FRIMAT TECHNOLOGIES Location"
              src="https://www.google.com/maps?q=Nairobi%2C%20Kenya&output=embed"
              loading="lazy"
              className="w-full h-64"
            />
          </div>
          <div className="rounded-lg border p-6 space-y-3">
            <a href="mailto:frimattechnologies016@gmail.com" className="flex items-center gap-2 hover:text-foreground text-muted-foreground">
              <Mail size={18} /> frimattechnologies016@gmail.com
            </a>
            <a href="https://wa.me/254112277289" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-foreground text-muted-foreground">
              <MessageCircle size={18} /> WhatsApp: +254 112 277 289
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={18} /> Phone: +254 112 277 289
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
