import { motion } from 'framer-motion';

export default function StaticBanner() {
    const banner = {
        title: 'التميز في المراجعة المالية',
        subtitle: 'خبرة تتجاوز 15 عاماً في خدمة الشركات الكبرى',
        image: '/assets/accountant-illustration.png'
    };

    return (
        <section className="relative h-screen overflow-hidden bg-navy-950">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={banner.image}
                    alt={banner.title}
                    className="w-full h-full object-cover"
                    style={{
                        filter: 'brightness(0.5) contrast(1.1)'
                    }}
                />
            </div>

            {/* Subtle Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

            {/* Animated Grid */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'linear-gradient(rgba(218, 165, 32, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(218, 165, 32, 0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    animation: 'gridMove 20s linear infinite'
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
                <div className="container mx-auto px-8 md:px-16">
                    <div className="max-w-3xl">
                        {/* Number Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-gold-500/30"
                        >
                            <span className="text-5xl font-black text-gold-400">01</span>
                            <div className="h-8 w-px bg-gold-500/30" />
                            <span className="text-sm text-gray-300 font-medium">خدمة متميزة</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
                        >
                            {banner.title}
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
                        >
                            {banner.subtitle}
                        </motion.p>

                        {/* Decorative Line */}
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: 'auto' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-transparent" />
                            <span className="text-gold-400 text-sm font-bold">مكتب الجاسر</span>
                        </motion.div>

                        {/* CTA */}
                        <motion.a
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            href="#contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 hover:scale-105"
                        >
                            <span>اكتشف المزيد</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes gridMove {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
            `}</style>
        </section>
    );
}
