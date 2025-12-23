import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "966577838296";
    const message = encodeURIComponent("السلام عليكم، أود الاستفسار عن الخدمات المحاسبية والمراجعة القانونية.");

    return (
        <motion.a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 left-6 z-[60] group"
            aria-label="Contact on WhatsApp"
        >
            {/* Pulsing background */}
            <div className="absolute inset-0 rounded-full bg-green-500 blur-md opacity-40 group-hover:opacity-60 animate-pulse transition-opacity" />

            {/* Button body */}
            <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] transition-all duration-300">
                <FaWhatsapp className="text-3xl" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-4 py-2 bg-navy-900 border border-white/10 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-2xl">
                    تواصل معنا عبر واتساب
                </span>
            </div>
        </motion.a>
    );
}
