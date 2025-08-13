import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Upload, Phone, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null as File | null,
  });

  const services = [
    "Web Development",
    "IT Support & Consultancy",
    "Cybersecurity Solutions",
    "Cloud Solutions",
    "E-Citizen Services",
    "Printing & Cyber Services",
    "Tech Accessories Purchase",
    "Custom Quote Request"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      file: null,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, file });
      toast.info(`File selected: ${file.name}`);
    }
  };

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
          Get Started Today
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your digital presence? Contact us for a free consultation
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone size={20} className="text-primary" />
                Phone Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Call us directly for immediate assistance</p>
              <a href="tel:+254112277289" className="text-primary font-medium hover:underline">
                +254 112 277 289
              </a>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail size={20} className="text-primary" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Send us your requirements via email</p>
              <a href="mailto:frimattechnologies016@gmail.com" className="text-primary font-medium hover:underline">
                frimattechnologies016@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle size={20} className="text-primary" />
                WhatsApp
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">Quick chat support on WhatsApp</p>
              <a 
                href="https://wa.me/254112277289?text=Hello! I'm interested in your services." 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Chat with us
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Request a Service</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed *</Label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your requirements in detail..."
                    rows={5}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload Documents (Optional)</Label>
                  <div className="relative">
                    <Input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                    />
                    <Label
                      htmlFor="file"
                      className="flex items-center gap-2 p-4 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors"
                    >
                      <Upload size={20} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {formData.file ? formData.file.name : "Click to upload documents (PDF, DOC, Images)"}
                      </span>
                    </Label>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    For e-citizen services, you can upload required documents here
                  </p>
                </div>

                <Button type="submit" size="lg" className="w-full btn-glow">
                  Send Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactForm;