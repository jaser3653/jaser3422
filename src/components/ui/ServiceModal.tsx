import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";
import { useState, useEffect, type ReactNode } from "react";

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    image: string;
    details: {
        overview: ReactNode;
        targetAudience: ReactNode;
        whyUs: ReactNode;
    };
}

export default function ServiceModal({ isOpen, onClose, title, image, details }: ServiceModalProps) {
    const [activeTab, setActiveTab] = useState<'overview' | 'target' | 'why'>('overview');

    // ESC key to close
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    const tabs = [
        { id: 'overview', label: 'نظرة عامة' },
        { id: 'target', label: 'لمن الخدمة؟' },
        { id: 'why', label: 'لماذا نحن؟' }
    ] as const;

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
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="relative w-full max-w-4xl bg-navy-950/95 rounded-[2rem] overflow-hidden border border-gold-500/30 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row min-h-[500px]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button - Top Left */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 left-6 z-50 w-14 h-14 rounded-full bg-navy-900/80 backdrop-blur-xl border border-gold-500/20 flex items-center justify-center text-white hover:bg-gold-500 hover:text-navy-900 hover:border-gold-400 hover:scale-110 active:scale-95 transition-all duration-300 group"
                                    aria-label="إغلاق (ESC)"
                                    title="إغلاق (ESC)"
                                >
                                    <HiX className="text-3xl group-hover:rotate-180 transition-transform duration-500" />
                                </button>

                                {/* Left Side: Image Content (Desktop) / Top Image (Mobile) */}
                                <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-navy-950 via-navy-950/40 to-transparent z-10"></div>
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-full h-full object-cover opacity-70"
                                    />
                                    <div className="absolute bottom-8 right-8 left-8 z-20">
                                        <h2 className="text-3xl md:text-4xl font-black text-white leading-tight drop-shadow-lg">{title}</h2>
                                    </div>
                                </div>

                                {/* Right Side: Dynamic Content */}
                                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col bg-navy-900/50">
                                    {/* Tabs Header */}
                                    <div className="flex gap-2 mb-8 bg-navy-950/50 p-1.5 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar">
                                        {tabs.map((tab) => (
                                            <button
                                                key={tab.id}
                                                onClick={() => setActiveTab(tab.id as any)}
                                                className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                                                        ? 'bg-gradient-to-br from-gold-500 to-gold-600 text-white shadow-lg shadow-gold-500/20'
                                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                    }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Tab Content Body */}
                                    <div className="flex-grow overflow-y-auto custom-scrollbar pr-2 text-right">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeTab}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.2 }}
                                                className="prose prose-invert prose-gold max-w-none"
                                            >
                                                {activeTab === 'overview' && details.overview}
                                                {activeTab === 'target' && details.targetAudience}
                                                {activeTab === 'why' && details.whyUs}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Footer Action */}
                                    <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                                        <a
                                            href="#contact"
                                            onClick={onClose}
                                            className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 text-white font-black text-center hover:shadow-xl hover:shadow-gold-500/20 hover:scale-[1.02] transition-all duration-300"
                                        >
                                            ابدأ الآن
                                        </a>
                                        <button
                                            onClick={onClose}
                                            className="px-8 py-4 rounded-xl bg-navy-950 text-gray-400 border border-white/10 hover:border-gold-500/50 hover:text-white transition-all duration-300"
                                        >
                                            عودة
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}

