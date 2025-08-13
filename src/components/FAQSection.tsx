import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I request a service?",
      answer: "You can request a service by filling out our contact form, calling us directly at +254 112 277 289, or sending us a message via WhatsApp. We'll respond within 24 hours to discuss your requirements."
    },
    {
      question: "How long does eCitizen processing take?",
      answer: "eCitizen processing times vary by service type. Most documents like ID renewals take 2-3 weeks, while driving licenses can take 4-6 weeks. We'll provide you with accurate timelines when you submit your documents."
    },
    {
      question: "What's your refund policy?",
      answer: "We offer a full refund if we cannot deliver the promised service. For digital services, refunds are processed within 7-14 business days. Physical products have a 30-day return policy if unopened."
    },
    {
      question: "Do you provide ongoing IT support?",
      answer: "Yes, we offer comprehensive IT support packages including 24/7 monitoring, regular maintenance, software updates, and emergency response. Contact us to discuss a support plan that fits your needs."
    },
    {
      question: "Can you help with website hosting and domain registration?",
      answer: "Absolutely! We provide complete web solutions including domain registration, hosting setup, SSL certificates, and ongoing website maintenance. We'll handle all technical aspects so you can focus on your business."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve clients across Kenya with physical presence in Nairobi. For eCitizen services and consultations, we can work with clients nationwide. On-site IT support is available in Nairobi and surrounding counties."
    }
  ];

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our services and processes
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;