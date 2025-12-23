import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Button from "../ui/Button";
import FloatingSymbols from "../ui/FloatingSymbols";

export default function CinematicHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const blur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

    // Image parallax
    const imageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    // Typing effect for subtitle
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

    // Counter animation
    const [counts, setCounts] = useState({ years: 0, clients: 0, commitment: 0 });

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const timer = setInterval(() => {
            setCounts(prev => ({
                years: prev.years < 15 ? prev.years + 1 : 15,
                clients: prev.clients < 500 ? prev.clients + 10 : 500,
                commitment: prev.commitment < 100 ? prev.commitment + 2 : 100
            }));
        }, interval);

        setTimeout(() => clearInterval(timer), duration);
        return () => clearInterval(timer);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* 3D Geometric Grid Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
                {/* Animated Grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(218, 165, 32, 0.3) 2px, transparent 2px), linear-gradient(90deg, rgba(218, 165, 32, 0.3) 2px, transparent 2px)',
                        backgroundSize: '100px 100px',
                        transform: 'perspective(1000px) rotateX(60deg)',
                        transformOrigin: 'center center',
                        animation: 'gridPulse 10s ease-in-out infinite'
                    }}
                />

                {/* Radial Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-radial from-transparent via-navy-900/50 to-navy-950" />

                {/* Animated Light Beams */}
                <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-gold-500/0 via-gold-500/20 to-gold-500/0 animate-pulse" />
                <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-gold-500/0 via-gold-500/20 to-gold-500/0 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            {/* Floating Financial Symbols */}
            <FloatingSymbols />

            {/* Professional Image - Left Side with Parallax */}
            <motion.div
                style={{
                    y: imageY,
                    opacity: imageOpacity
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-full z-5 hidden lg:block"
            >
                <div className="relative h-full flex items-center">
                    <motion.img
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                        src="/assets/professional-accountant.png"
                        alt="مكتب الجاسر - محاسب محترف"
                        className="w-full h-auto object-contain drop-shadow-2xl"
                        style={{
                            filter: 'drop-shadow(0 0 40px rgba(218, 165, 32, 0.3))'
                        }}
                    />
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent blur-3xl" />
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                style={{ y, opacity, filter: blur.get() ? `blur(${blur.get()}px)` : 'none' }}
                className="container mx-auto px-4 z-10 text-center relative"
            >
                {/* Company Badge */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.3, type: "spring" }}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/30 backdrop-blur-xl mb-8"
                >
                    <span className="text-3xl">⚖️</span>
                    <div className="text-right">
                        <div className="text-gold-400 font-bold text-sm">مرخص من وزارة التجارة</div>
                        <div className="text-white text-xs">ترخيص رقم 1019</div>
                    </div>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight"
                >
                    مكتب عبدالله الجاسر
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-xl md:text-2xl text-gray-300 mb-6"
                >
                    محاسبون ومراجعون قانونيون
                </motion.p>

                {/* Animated Gradient Title */}
                <motion.h2
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.9 }}
                    className="text-4xl md:text-6xl font-black mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 animate-gradient"
                    style={{
                        backgroundSize: '200% 200%',
                        animation: 'gradientShift 3s ease infinite'
                    }}
                >
                    شريكك الموثوق في التميز المالي
                </motion.h2>

                {/* Typing Effect Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 h-8 font-medium"
                >
                    {typedText}<span className="animate-pulse">|</span>
                </motion.div>

                {/* CTAs with Magnetic Effect */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <Button
                        variant="primary"
                        size="lg"
                        href="#contact"
                        className="px-12 py-6 text-xl group relative overflow-hidden"
                    >
                        <span className="relative z-10">احجز استشارة مجانية</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        href="#services"
                        className="px-12 py-6 text-xl hover:bg-white/5"
                    >
                        استكشف خدماتنا
                    </Button>
                </motion.div>

                {/* Animated Stats */}
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12"
                >
                    <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2">+{counts.years}</div>
                        <div className="text-sm md:text-base text-gray-400">سنة خبرة</div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2">+{counts.clients}</div>
                        <div className="text-sm md:text-base text-gray-400">عميل راضٍ</div>
                    </div>
                    <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform">
                        <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2">{counts.commitment}%</div>
                        <div className="text-sm md:text-base text-gray-400">التزام بالمعايير</div>
                    </div>
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.9 }}
                    className="flex flex-wrap justify-center gap-6 items-center"
                >
                    {['SOCPA', 'وزارة التجارة', 'الغرفة التجارية'].map((badge, i) => (
                        <motion.div
                            key={badge}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 2 + i * 0.1, type: "spring" }}
                            className="px-6 py-3 bg-white/5 backdrop-blur-md border border-gold-500/20 rounded-xl text-gold-400 font-bold hover:bg-white/10 transition-colors"
                        >
                            {badge}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>



            <style>{`
                @keyframes gridPulse {
                    0%, 100% { opacity: 0.2; }
                    50% { opacity: 0.4; }
                }
                
                @keyframes gradientShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
            `}</style>
        </section>
    );
}
