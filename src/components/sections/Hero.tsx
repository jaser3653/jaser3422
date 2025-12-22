import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-navy-900 pointer-events-none">
                <div className="absolute inset-0 bg-intro-gradient opacity-90"></div>
                {/* Geometric Grid Pattern */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(#DAA520 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Content - Right Side (Arabic) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-right space-y-6"
                >
                    <div className="inline-block px-3 py-2 rounded-full glass-card border-gold-500/30 text-gold-400 text-xs sm:text-sm font-medium mb-4">
                        ✨ ترخيص رقم 1019
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
                        شريكك الموثوق في <br />
                        <span className="text-gradient">التميز المالي</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                        نقدم حلولاً محاسبية متكاملة تجمع بين الخبرة المحلية والمعايير الدولية
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                        <Button variant="primary" size="lg" href="#contact">احجز استشارة مجانية</Button>
                        <Button variant="outline" size="lg" href="#services">استكشف خدماتنا</Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10 mt-8">
                        <div>
                            <h4 className="text-3xl font-bold text-white">+15</h4>
                            <span className="text-sm text-gray-400">سنة خبرة</span>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white">+500</h4>
                            <span className="text-sm text-gray-400">عميل راضٍ</span>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-white">100%</h4>
                            <span className="text-sm text-gray-400">التزام بالمعايير</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual - Image shown on all devices */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative order-first md:order-last"
                >
                    <div className="relative z-10 w-full h-[300px] sm:h-[400px] md:h-[600px] flex items-center justify-center">
                        {/* Main Illustration */}
                        <img
                            src="/assets/accountant-illustration.png"
                            alt="مكتب عبدالله الجاسر محاسبون ومراجعون قانونيون - التميز المالي"
                            className="max-h-full w-auto object-contain drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                        />
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gold-500/20 rounded-full blur-[100px] -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
}
