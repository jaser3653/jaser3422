import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partners = [
    {
        id: 1,
        name: 'SOCPA',
        nameAr: 'الهيئة السعودية للمراجعين والمحاسبين',
        icon: '⚖️',
        color: 'from-blue-600 to-blue-800'
    },
    {
        id: 2,
        name: 'وزارة التجارة',
        nameAr: 'Ministry of Commerce',
        icon: '🏛️',
        color: 'from-green-600 to-green-800'
    },
    {
        id: 3,
        name: 'الغرفة التجارية',
        nameAr: 'Chamber of Commerce',
        icon: '🤝',
        color: 'from-gold-500 to-gold-700'
    },
    {
        id: 4,
        name: 'هيئة الزكاة والضريبة',
        nameAr: 'ZATCA',
        icon: '📊',
        color: 'from-emerald-600 to-emerald-800'
    },
    {
        id: 5,
        name: 'مؤسسة النقد العربي',
        nameAr: 'SAMA',
        icon: '🏦',
        color: 'from-indigo-600 to-indigo-800'
    },
    {
        id: 6,
        name: 'هيئة السوق المالية',
        nameAr: 'CMA',
        icon: '📈',
        color: 'from-purple-600 to-purple-800'
    }
];

export default function PartnersSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const cards = cardsRef.current;

        // Stagger animation for cards
        gsap.fromTo(
            cards,
            {
                y: 100,
                opacity: 0,
                scale: 0.8,
                rotateY: -15
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                rotateY: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                }
            }
        );

        // Floating animation
        cards.forEach((card, index) => {
            gsap.to(card, {
                y: -20,
                duration: 2 + index * 0.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: index * 0.1
            });
        });

        // Shine effect on scroll
        gsap.to('.partner-card', {
            backgroundPosition: '200% center',
            duration: 3,
            ease: 'none',
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top center',
                end: 'bottom center',
                scrub: 1
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-20 md:py-32 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            {/* Animated Grid */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(#DAA520 1px, transparent 1px), linear-gradient(90deg, #DAA520 1px, transparent 1px)',
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="px-6 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-medium text-sm">
                            شركاؤنا في النجاح
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        معتمدون من <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">أبرز الجهات</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        نفخر بشراكاتنا مع أهم المؤسسات الحكومية والتنظيمية في المملكة
                    </motion.p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {partners.map((partner, index) => (
                        <div
                            key={partner.id}
                            ref={el => {
                                if (el) cardsRef.current[index] = el;
                            }}
                            className="partner-card group relative"
                            style={{ perspective: '1000px' }}
                        >
                            {/* Card Container */}
                            <div className="relative h-full">
                                {/* Glow Effect */}
                                <div className={`absolute -inset-1 bg-gradient-to-r ${partner.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                                {/* Main Card */}
                                <div className="relative bg-navy-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:border-gold-500/30 transition-all duration-500 group-hover:scale-105">
                                    {/* Shine Effect */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.1), transparent)',
                                            backgroundSize: '200% 100%',
                                            animation: 'shine 3s infinite'
                                        }}
                                    />

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        {/* Icon */}
                                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${partner.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                            <span className="text-4xl">{partner.icon}</span>
                                        </div>

                                        {/* Name */}
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                                            {partner.name}
                                        </h3>

                                        {/* English Name */}
                                        <p className="text-sm text-gray-400 font-medium">
                                            {partner.nameAr}
                                        </p>

                                        {/* Badge */}
                                        <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-gold-500/20">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-xs text-gray-300 font-medium">معتمد</span>
                                        </div>
                                    </div>

                                    {/* Corner Decoration */}
                                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-500/20 rounded-tr-lg" />
                                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-500/20 rounded-bl-lg" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { number: '6+', label: 'جهات رسمية' },
                        { number: '100%', label: 'التزام تنظيمي' },
                        { number: '15+', label: 'عام من الثقة' },
                        { number: '500+', label: 'عميل راضٍ' }
                    ].map((stat, i) => (
                        <div key={i} className="text-center glass-card p-6 rounded-xl hover:scale-105 transition-transform">
                            <div className="text-3xl md:text-4xl font-black text-gold-500 mb-2">{stat.number}</div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @keyframes shine {
                    0% { background-position: -200% center; }
                    100% { background-position: 200% center; }
                }
            `}</style>
        </section>
    );
}
