import { motion } from "framer-motion";

export default function Location() {
    return (
        <section className="py-32 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-6"
                    >
                        <span className="px-6 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-medium">
                            موقعنا
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black text-white mb-6"
                    >
                        زوروا <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">مكتبنا</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/20 shadow-2xl shadow-gold-500/10 h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.734837!2d46.73!3d24.736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQ0JzA5LjYiTiA0NsKwNDMnNDguMCJF!5e0!3m2!1sar!2ssa!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="موقع مكتب الجاسر"
                                className="grayscale-[30%] contrast-110"
                            ></iframe>

                            {/* Map Overlay Badge */}
                            <div className="absolute top-6 right-6 bg-navy-900/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-gold-500/30 shadow-xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
                                    <span className="text-white font-bold">الرياض، المملكة العربية السعودية</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >

                        {/* Office Name */}
                        <div className="bg-navy-800/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
                            <h3 className="text-3xl font-bold text-white mb-2">
                                مكتب الجاسر
                            </h3>
                            <p className="text-xl text-gray-400">
                                محاسبون ومراجعون قانونيون
                            </p>
                        </div>

                        {/* Address */}
                        <div className="bg-navy-800/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5 hover:border-gold-500/30 transition-all duration-500">
                            <div className="mb-3">
                                <span className="text-gold-500 font-bold text-sm tracking-wide">العنوان</span>
                            </div>
                            <p className="text-white text-lg leading-relaxed">
                                طريق أبي بكر الصديق، الوادي
                                <br />
                                الرياض 13313
                                <br />
                                المملكة العربية السعودية
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <span className="text-gray-400 text-sm font-mono">QMPM+G3</span>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="grid sm:grid-cols-2 gap-6">

                            {/* Phone */}
                            <a
                                href="tel:+966577838296"
                                className="bg-navy-800/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-gold-500/30 hover:bg-navy-800/60 transition-all duration-500 group"
                            >
                                <div className="mb-3">
                                    <span className="text-gold-500 font-bold text-sm tracking-wide">الهاتف</span>
                                </div>
                                <p className="text-white text-lg font-medium group-hover:text-gold-400 transition-colors" dir="ltr">
                                    +966 57 783 8296
                                </p>
                            </a>

                            {/* Website */}
                            <a
                                href="https://aljasircpa.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-navy-800/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 hover:border-gold-500/30 hover:bg-navy-800/60 transition-all duration-500 group"
                            >
                                <div className="mb-3">
                                    <span className="text-gold-500 font-bold text-sm tracking-wide">الموقع الإلكتروني</span>
                                </div>
                                <p className="text-white text-lg font-medium group-hover:text-gold-400 transition-colors" dir="ltr">
                                    aljasircpa.com
                                </p>
                            </a>

                        </div>

                        {/* Working Hours */}
                        <div className="bg-navy-800/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
                            <div className="mb-4">
                                <span className="text-gold-500 font-bold text-sm tracking-wide">ساعات العمل</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-white">
                                    <span>الأحد - الخميس</span>
                                    <span className="font-mono text-gray-400">08:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between items-center text-gray-500">
                                    <span>الجمعة - السبت</span>
                                    <span className="font-mono">مغلق</span>
                                </div>
                            </div>
                        </div>

                        {/* Rating Badge */}
                        <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 backdrop-blur-xl p-6 rounded-2xl border border-gold-500/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-1">
                                        5.0
                                    </div>
                                    <div className="text-gray-400 text-sm">تقييم Google</div>
                                </div>
                                <div className="text-left">
                                    <div className="flex gap-1 mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-gold-500 text-xl">★</span>
                                        ))}
                                    </div>
                                    <div className="text-gray-400 text-sm">10 تقييمات</div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=24.736,46.73"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105"
                        >
                            احصل على الاتجاهات
                        </a>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
