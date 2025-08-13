import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
  const phoneNumber = "254112277289"; // Your WhatsApp number
  const message = "Hello! I'm interested in your services. Could you please provide more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={24} />
      
      {/* Tooltip */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-background text-foreground px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-background rotate-45"></div>
      </div>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
    </motion.a>
  );
};

export default WhatsAppFloat;