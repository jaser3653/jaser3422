import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Button from "../ui/Button";

const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "عن المكتب", href: "#about" },
    { name: "خدماتنا", href: "#services" },
    { name: "رؤيتنا", href: "#vision" },
    { name: "العملاء", href: "#testimonials" },
    { name: "اتصل بنا", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy-900/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3">
                    <span className="text-gold-500 text-3xl md:text-4xl drop-shadow-lg">⚖️</span>
                    <div className="text-right">
                        <span className="block text-xl md:text-2xl font-black text-white leading-none tracking-tight">الجاســر</span>
                        <span className="text-[10px] md:text-xs text-gold-500/80 font-medium tracking-widest uppercase">محاسبون قانونيون</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-gold-400 transition-all duration-300 text-sm font-bold relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-gold-400 to-gold-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <Button variant="primary" size="sm" className="shadow-gold-500/10 active:scale-95" href="#contact">
                        احجز استشارة
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-2xl text-white active:scale-90 transition-transform"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <HiMenuAlt3 />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        className="fixed inset-0 bg-navy-900 z-[60] flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-16">
                            <div className="flex items-center gap-3">
                                <span className="text-gold-500 text-3xl">⚖️</span>
                                <span className="text-2xl font-black text-white">الجاســر</span>
                            </div>
                            <button
                                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-3xl text-gray-400 hover:text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <HiX />
                            </button>
                        </div>

                        <div className="flex flex-col gap-6 text-right grow">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <a
                                        href={link.href}
                                        className="text-2xl font-black text-white hover:text-gold-500 transition-colors inline-block"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-auto"
                        >
                            <Button className="w-full py-5 text-xl rounded-2xl" onClick={() => setMobileMenuOpen(false)} href="#contact">
                                ابدأ استشارتك الآن
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
