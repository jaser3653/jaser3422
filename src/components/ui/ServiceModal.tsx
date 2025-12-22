import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import type { ReactNode } from "react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    image: string;
    children: ReactNode;
}

export default function ServiceModal({ isOpen, onClose, title, image, children }: ServiceModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", duration: 0.5 }}
                                className="relative w-full max-w-4xl glass-card rounded-3xl overflow-hidden border-2 border-gold-500/20"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onClose();
                                    }}
                                    className="absolute top-6 left-6 z-50 w-12 h-12 rounded-full bg-navy-900/90 backdrop-blur-md border border-gold-500/30 flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 group shadow-lg"
                                    aria-label="إغلاق"
                                >
                                    <HiX className="text-2xl group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                {/* Header Image */}
                                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800">
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent z-10"></div>
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover opacity-60"
                                    />
                                    <div className="absolute bottom-8 right-8 z-20">
                                        <h2 className="text-4xl font-bold text-white text-shadow">{title}</h2>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 md:p-12 bg-navy-800/50 backdrop-blur-xl max-h-[60vh] overflow-y-auto custom-scrollbar">
                                    <div className="prose prose-invert prose-gold max-w-none text-right">
                                        {children}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-6 bg-navy-900/80 border-t border-gold-500/10 flex justify-end gap-4">
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-3 rounded-lg bg-navy-800 text-white border border-navy-700 hover:border-gold-500/50 transition-all duration-300"
                                    >
                                        إغلاق
                                    </button>
                                    <a
                                        href="#contact"
                                        onClick={onClose}
                                        className="px-8 py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold hover:shadow-lg hover:shadow-gold-500/20 transition-all duration-300"
                                    >
                                        احجز استشارة
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
