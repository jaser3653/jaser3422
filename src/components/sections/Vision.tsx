import { motion } from "framer-motion";

export default function Vision() {
    return (
        <section id="vision" className="py-24 md:py-32 bg-navy-900 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/assets/-professional-saudi-businessman---.png"
                                alt="Our Vision"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                            {/* Glass Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent"></div>
                        </div>

                        {/* Decorative Frames */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold-500/50 rounded-tl-2xl"></div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold-500/50 rounded-br-2xl"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-right space-y-8"
                    >
                        <div>
                            <span className="px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-sm font-bold mb-6 inline-block">
                                تطلعاتنا المستقبلية
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                رؤيتنا نحو <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">الريادة المالية</span>
                            </h2>
                        </div>

                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                            نسعى دائماً لنكون المرجع الأول والشريك الاستراتيجي الأكثر ثقة في قطاع المحاسبة والمراجعة بالمملكة، من خلال تقديم حلول مبتكرة تجمع بين العراقة المهنية وأحدث التقنيات العالمية.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors">
                                <h4 className="text-gold-400 font-bold mb-2">الرسالة</h4>
                                <p className="text-gray-400 text-sm">تمكين الشركات من اتخاذ قرارات مالية حكيمة ومستدامة.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/30 transition-colors">
                                <h4 className="text-gold-400 font-bold mb-2">القيمة</h4>
                                <p className="text-gray-400 text-sm">الشفافية المطلقة، الدقة المتناهية، والالتزام بالمعايير.</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
