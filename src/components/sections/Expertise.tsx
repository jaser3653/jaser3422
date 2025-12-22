import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function Expertise() {
    return (
        <section className="py-32 bg-gradient-to-b from-navy-800 to-navy-900 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/161232-OVDNXO-935.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-800/95 via-navy-900/90 to-navy-900/95"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/20 shadow-2xl shadow-gold-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent z-10"></div>
                            <img
                                src="/assets/581-removebg-preview.png"
                                alt="فريق عمل مكتب الجاسر محاسبون ومراجعون قانونيون"
                                className="w-full h-auto relative z-0"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -right-8 bg-navy-900/90 backdrop-blur-xl p-8 rounded-2xl border border-gold-500/30 shadow-2xl"
                        >
                            <div className="text-center">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-2">
                                    15+
                                </div>
                                <div className="text-gray-300 font-medium">عاماً من الخبرة</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <span className="inline-block px-5 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-medium mb-6">
                                خبرتنا
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                شريكك الموثوق في
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600"> النجاح المالي</span>
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-8">
                                نحن لا نقدم خدمات محاسبية فقط، بل نبني شراكات طويلة الأمد مع عملائنا لضمان نجاحهم المالي واستدامة أعمالهم.
                            </p>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="bg-navy-800/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5"
                            >
                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-2">
                                    +500
                                </div>
                                <div className="text-gray-400">عميل راضٍ</div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-navy-800/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5"
                            >
                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-2">
                                    100%
                                </div>
                                <div className="text-gray-400">التزام بالجودة</div>
                            </motion.div>
                        </div>

                        {/* Features List */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="space-y-4 mb-10"
                        >
                            {[
                                "محاسبون قانونيون معتمدون",
                                "خبرة واسعة في جميع القطاعات",
                                "التزام بأعلى معايير الدقة والشفافية",
                                "حلول مالية مخصصة لكل عميل"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                                    <span className="text-white text-lg">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Button href="#contact" variant="primary" size="lg" className="px-12">
                                <span>ابدأ رحلتك معنا</span>
                                <span className="text-2xl mr-2">←</span>
                            </Button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
