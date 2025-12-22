import { motion } from "framer-motion";

export default function Contact() {
    const handleWhatsApp = () => {
        const whatsappMessage = `السلام عليكم ورحمة الله وبركاته،

أرغب في الاستفسار عن خدماتكم المحاسبية.

أتطلع للتواصل معكم في أقرب وقت ممكن.

شكراً لكم.`;

        const whatsappUrl = `https://wa.me/966577838296?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-32 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
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
                            تواصل معنا
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl font-black text-white mb-6"
                    >
                        نحن هنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">لمساعدتك</span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Side - WhatsApp Button & Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >

                        {/* WhatsApp CTA Card */}
                        <div className="bg-gradient-to-br from-green-600/10 to-green-700/10 backdrop-blur-xl p-12 rounded-3xl border border-green-500/20">
                            <div className="text-center mb-8">
                                <h3 className="text-3xl font-bold text-white mb-4">
                                    تواصل معنا مباشرة
                                </h3>
                                <p className="text-gray-300 text-lg">
                                    نحن جاهزون للرد على استفساراتك
                                </p>
                            </div>

                            {/* WhatsApp Button */}
                            <button
                                onClick={handleWhatsApp}
                                className="w-full px-10 py-6 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-4 text-xl group"
                            >
                                <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                <span>ابدأ المحادثة على WhatsApp</span>
                            </button>
                        </div>

                        {/* Contact Info */}
                        <div className="bg-navy-800/40 backdrop-blur-xl p-8 rounded-3xl border border-white/5">
                            <h3 className="text-2xl font-bold text-white mb-6">معلومات التواصل</h3>

                            <div className="space-y-5">

                                {/* Address */}
                                <div>
                                    <div className="text-gold-500 font-bold text-sm mb-2">العنوان</div>
                                    <p className="text-white leading-relaxed">
                                        الرياض، حي الوادي، طريق أبي بكر الصديق
                                    </p>
                                </div>

                                <div className="h-px bg-white/5"></div>

                                {/* Phone */}
                                <div>
                                    <div className="text-gold-500 font-bold text-sm mb-2">الرقم</div>
                                    <a href="tel:+966577838296" className="text-white text-lg font-medium hover:text-gold-400 transition-colors block" dir="ltr">
                                        296 838 0577
                                    </a>
                                </div>

                                <div className="h-px bg-white/5"></div>

                                {/* Email */}
                                <div>
                                    <div className="text-gold-500 font-bold text-sm mb-2">البريد</div>
                                    <a href="mailto:info@aljasircpa.com" className="text-white text-lg font-medium hover:text-gold-400 transition-colors block" dir="ltr">
                                        info@aljasircpa.com
                                    </a>
                                </div>

                                <div className="h-px bg-white/5"></div>

                                {/* Working Hours */}
                                <div>
                                    <div className="text-gold-500 font-bold text-sm mb-3">أوقات العمل</div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-white">
                                            <span>من الأحد إلى الخميس</span>
                                            <span className="text-gray-400">8:00 ص - 5:00 م</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </motion.div>

                    {/* Right Side - Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >

                        {/* Map - Clickable */}
                        <a
                            href="https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%A7%D9%84%D8%AC%D8%A7%D8%B3%D8%B1+%D9%85%D8%AD%D8%A7%D8%B3%D8%A8%D9%88%D9%86+%D9%88%D9%85%D8%B1%D8%A7%D8%AC%D8%B9%D9%88%D9%86+%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D9%88%D9%86%E2%80%AD/@24.78635,46.682681,14z/data=!4m15!1m8!3m7!1s0x3e2f0156781ef2f7:0x4a5857ff7335c8cf!2z2YXZg9iq2Kgg2KfZhNis2KfYs9ixINmF2K3Yp9iz2KjZiNmGINmI2YXYsdin2KzYudmI2YYg2YLYp9mG2YjZhtmK2YjZhg!8m2!3d24.7863497!4d46.6826806!10e1!16s%2Fg%2F11vql_8spd!3m5!1s0x3e2f0156781ef2f7:0x4a5857ff7335c8cf!8m2!3d24.7863497!4d46.6826806!16s%2Fg%2F11vql_8spd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block relative rounded-3xl overflow-hidden border-2 border-gold-500/20 shadow-2xl shadow-gold-500/10 h-full min-h-[600px] group"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.0847447891647!2d46.68026807607168!3d24.786349746992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0156781ef2f7%3A0x4a5857ff7335c8cf!2z2YXZg9iq2Kgg2KfZhNis2KfYs9ixINmF2K3Yp9iz2KjZiNmGINmI2YXYsdin2KzYudmI2YYg2YLYp9mG2YjZhtmK2YjZhg!5e0!3m2!1sar!2ssa!4v1703267890123!5m2!1sar!2ssa"
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: 'none' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="موقع مكتب الجاسر"
                                className="grayscale-[30%] contrast-110"
                            ></iframe>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-all duration-300 pointer-events-none"></div>

                            {/* Badge */}
                            <div className="absolute top-6 right-6 bg-navy-900/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-gold-500/30 shadow-xl pointer-events-none">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-gold-500 rounded-full animate-pulse"></div>
                                    <span className="text-white font-bold text-sm">اضغط لفتح الخريطة</span>
                                </div>
                            </div>

                            {/* Rating Badge */}
                            <div className="absolute bottom-6 right-6 bg-gradient-to-r from-gold-500/90 to-gold-600/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl pointer-events-none">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className="text-white text-lg">★</span>
                                        ))}
                                    </div>
                                    <div className="text-white font-bold">5.0</div>
                                </div>
                            </div>
                        </a>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
