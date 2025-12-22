import { motion } from "framer-motion";
import { HiCheckCircle, HiShieldCheck, HiLightningBolt, HiStar } from "react-icons/hi";

export default function WhyChooseUs() {
    const features = [
        {
            icon: HiShieldCheck,
            title: "خبرة موثوقة",
            description: "أكثر من 15 عاماً من الخبرة في تقديم الخدمات المحاسبية والمالية"
        },
        {
            icon: HiCheckCircle,
            title: "دقة عالية",
            description: "نلتزم بأعلى معايير الدقة والشفافية في جميع أعمالنا"
        },
        {
            icon: HiLightningBolt,
            title: "سرعة في الإنجاز",
            description: "نحرص على تسليم العمل في الوقت المحدد دون التأثير على الجودة"
        },
        {
            icon: HiStar,
            title: "فريق محترف",
            description: "فريق من المحاسبين القانونيين المعتمدين ذوي الكفاءة العالية"
        }
    ];

    return (
        <section className="py-32 bg-gradient-to-b from-navy-800 to-navy-900 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/161232-OVDNXO-935.jpg"
                    alt="Background"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 via-navy-900/80 to-navy-900/90"></div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/20 shadow-2xl shadow-gold-500/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent z-10"></div>
                            <img
                                src="/assets/581-removebg-preview.png"
                                alt="Professional Team"
                                className="w-full h-auto relative z-0"
                            />
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="absolute -bottom-8 -right-8 bg-navy-900/90 backdrop-blur-xl p-8 rounded-2xl border border-gold-500/30 shadow-2xl"
                        >
                            <div className="text-center">
                                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-2">
                                    +500
                                </div>
                                <div className="text-gray-300 font-medium">عميل راضٍ</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-8 -left-8 bg-navy-900/90 backdrop-blur-xl p-6 rounded-2xl border border-gold-500/30 shadow-2xl"
                        >
                            <div className="text-center">
                                <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-2">
                                    15+
                                </div>
                                <div className="text-gray-300 font-medium text-sm">سنة خبرة</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <span className="inline-block px-5 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-medium mb-6">
                                لماذا نحن؟
                            </span>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                                شريكك الموثوق في
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600"> النجاح المالي</span>
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed">
                                نحن لا نقدم خدمات محاسبية فقط، بل نبني شراكات طويلة الأمد مع عملائنا لضمان نجاحهم المالي واستدامة أعمالهم
                            </p>
                        </motion.div>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="bg-navy-800/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5 h-full">
                                        <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300">
                                            <feature.icon className="text-3xl text-gold-400 group-hover:text-navy-900" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-10"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105"
                            >
                                <span>ابدأ رحلتك معنا</span>
                                <span className="text-2xl">←</span>
                            </a>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
