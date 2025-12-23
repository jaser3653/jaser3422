import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "../ui/Button";
import FloatingSymbols from "../ui/FloatingSymbols";
import { HiCheckCircle, HiChevronDown } from "react-icons/hi";

export default function CinematicHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 150]); // Reduced parallax intensity
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const [typedText, setTypedText] = useState("");
    const fullText = "حلول محاسبية متكاملة | التزام بأعلى المعايير الدولية | خبرة سعودية رائدة";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[100vh] lg:min-h-[110vh] flex items-center justify-center overflow-hidden bg-navy-950"
        >
            {/* Cinematic Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* 3D Geometric Grid Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(218, 165, 32, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(218, 165, 32, 0.2) 1px, transparent 1px)',
                        backgroundSize: '80px 80px',
                        transform: 'perspective(1000px) rotateX(60deg) translateY(-100px)',
                        transformOrigin: 'top center',
                    }}
                />

                {/* Light Orbs */}
                <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px]" />
            </div>

            <FloatingSymbols />

            <div className="container mx-auto px-4 z-10 relative">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-screen py-10 lg:py-32">

                    {/* Left Side Content */}
                    <motion.div
                        style={{
                            y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y : 0,
                            opacity
                        }}
                        className="text-center lg:text-right space-y-4 md:space-y-8 order-2 lg:order-1 pt-6 lg:pt-0 w-full flex flex-col items-center lg:items-end"
                    >
                        {/* Premium Badge */}
                        <motion.div
                            initial={typeof window !== 'undefined' && window.innerWidth > 1024 ? { x: 50, opacity: 0 } : { opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl group flex-row-reverse"
                        >
                            <div className="w-8 h-8 rounded-lg bg-gold-500/20 flex items-center justify-center border border-gold-500/30 group-hover:scale-110 transition-transform">
                                <span className="text-sm">🇸🇦</span>
                            </div>
                            <div className="text-right">
                                <span className="block text-gold-400 font-black text-[10px] uppercase tracking-widest mb-0.5">ترخيص رسمي</span>
                                <span className="block text-white/50 text-[8px] font-bold">رقم 1019</span>
                            </div>
                        </motion.div>

                        {/* Title Section */}
                        <div className="space-y-2 lg:space-y-4 w-full">
                            <motion.h1
                                initial={typeof window !== 'undefined' && window.innerWidth > 1024 ? { y: 30, opacity: 0 } : { opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="text-3xl sm:text-6xl lg:text-8xl font-black text-white leading-tight lg:tracking-tight"
                            >
                                مكتب عبدالله <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-l from-gold-300 via-gold-500 to-gold-600">الجاسر</span>
                            </motion.h1>

                            <motion.p
                                initial={typeof window !== 'undefined' && window.innerWidth > 1024 ? { y: 20, opacity: 0 } : { opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="text-base sm:text-2xl text-white/60 font-medium tracking-wide"
                            >
                                محاسبون ومراجعون قانونيون
                            </motion.p>
                        </div>

                        {/* Typing Effect Content */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                            className="relative min-h-[4.5rem] sm:min-h-[3rem] py-2 w-full flex flex-col items-center lg:items-end"
                        >
                            <div className="absolute inset-y-0 right-0 w-1 bg-gold-500/50 blur-sm animate-pulse hidden lg:block" />
                            <p className="text-sm sm:text-xl text-gold-400/90 font-bold leading-relaxed px-4 lg:pr-6 lg:pl-0 lg:border-r border-gold-500/20 text-center lg:text-right">
                                {typedText}<span className="inline-block w-2 h-5 bg-gold-500 mr-2 animate-bounce" />
                            </p>
                        </motion.div>

                        {/* High-End CTAs */}
                        <motion.div
                            initial={typeof window !== 'undefined' && window.innerWidth > 1024 ? { y: 20, opacity: 0 } : { opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-5 pt-4 w-full items-center justify-center lg:justify-end"
                        >
                            <Button
                                variant="primary"
                                size="lg"
                                href="#contact"
                                className="px-6 py-3.5 sm:px-10 sm:py-5 text-sm sm:text-lg font-black group shadow-[0_20px_40px_rgba(218,165,32,0.2)] hover:shadow-[0_25px_50px_rgba(218,165,32,0.35)] transition-all w-[80%] sm:w-auto"
                            >
                                <span>ابدأ الآن</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                href="#services"
                                className="px-6 py-3.5 sm:px-10 sm:py-5 text-sm sm:text-lg font-bold border-white/10 hover:border-gold-500/50 bg-white/[0.02] w-[80%] sm:w-auto"
                            >
                                استعراض الخدمات
                            </Button>
                        </motion.div>

                        {/* Trust Bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="flex flex-wrap items-center justify-center lg:justify-end gap-6 pt-10 opacity-60"
                        >
                            <div className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] w-full lg:w-auto text-center lg:text-right mb-2 lg:mb-0">معتمدين لدى:</div>
                            {['SOCPA', 'وزارة التجارة', 'الغرفة التجارية'].map((item) => (
                                <div key={item} className="flex items-center gap-2 group cursor-default">
                                    <HiCheckCircle className="text-gold-500 group-hover:scale-125 transition-transform" />
                                    <span className="text-sm font-black text-white/80">{item}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.5, type: "spring", bounce: 0.3 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative group">
                            {/* Visual Glows */}
                            <div className="absolute -inset-10 bg-gold-500/10 rounded-full blur-[80px] group-hover:bg-gold-500/20 transition-all duration-1000" />

                            {/* Floating Card Design */}
                            <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                                <img
                                    src="/assets/hero-professional.png"
                                    alt="مكتب عبدالله الجاسر - محاسبون ومراجعون قانونيون"
                                    fetchPriority="high"
                                    className="w-full h-auto object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s]"
                                />
                                {/* Bottom Shadow Gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
                            </div>

                            {/* Decorative Rings */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-gold-500/10 rounded-full animate-spin-slow" />
                            <div className="absolute -bottom-10 -right-10 w-60 h-60 border border-gold-500/5 rounded-full animate-reverse-spin-slow" />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                role="button"
                aria-label="التمرير لأسفل لعرض الخدمات"
            >
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">اكتشف المزيد</span>
                <HiChevronDown className="text-gold-500 text-2xl" />
            </motion.div>

            <style>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes reverse-spin-slow {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                .animate-spin-slow { animation: spin-slow 20s linear infinite; }
                .animate-reverse-spin-slow { animation: reverse-spin-slow 25s linear infinite; }
            `}</style>
        </section>
    );
}

