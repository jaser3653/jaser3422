import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineCalculator, HiOutlineDocumentSearch, HiOutlineChartPie, HiOutlineScale, HiOutlineOfficeBuilding, HiOutlineTrendingUp, HiSparkles } from "react-icons/hi";
import ServiceModal from "../ui/ServiceModal";
import { servicesData } from "../../data/servicesData";

export default function Services() {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    return (
        <section id="services" className="py-32 bg-navy-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] animate-pulse"></div>
                <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/20 text-gold-400 mb-8"
                    >
                        <HiSparkles className="text-xl" />
                        <span className="font-bold">خدماتنا الاحترافية</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
                    >
                        نبني معك مستقبل
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">
                            مالي متين
                        </span>
                    </motion.h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-12 gap-4 sm:gap-6 auto-rows-[240px] sm:auto-rows-[280px] mb-16">

                    {/* Service 1 - Large Featured (Audit) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="col-span-12 md:col-span-7 row-span-2 group cursor-pointer"
                        onClick={() => setSelectedService(1)}
                    >
                        <div className="relative h-full rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900"></div>
                            <img
                                src={servicesData[0].image}
                                alt={servicesData[0].title}
                                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent"></div>

                            <div className="relative h-full p-10 flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div className="w-20 h-20 rounded-2xl bg-gold-500/10 backdrop-blur-md border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300">
                                        <HiOutlineDocumentSearch className="text-4xl text-gold-400 group-hover:text-navy-900" />
                                    </div>
                                    <span className="text-8xl font-black text-white/5 group-hover:text-gold-500/10 transition-colors">01</span>
                                </div>

                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                                        {servicesData[0].title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6 line-clamp-2">
                                        {servicesData[0].shortDesc}
                                    </p>
                                    <div className="inline-flex items-center gap-3 text-gold-500 font-bold group-hover:gap-5 transition-all">
                                        <span>اكتشف المزيد</span>
                                        <span className="text-2xl">←</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 2 - Medium (Tax) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-12 md:col-span-5 row-span-1 group cursor-pointer"
                        onClick={() => setSelectedService(2)}
                    >
                        <div className="relative h-full rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900"></div>
                            <img
                                src={servicesData[1].image}
                                alt={servicesData[1].title}
                                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent"></div>

                            <div className="relative h-full p-8 flex flex-col justify-between">
                                <div className="w-16 h-16 rounded-xl bg-gold-500/10 backdrop-blur-md border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                                    <HiOutlineCalculator className="text-3xl text-gold-400 group-hover:text-navy-900" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                                        {servicesData[1].title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed line-clamp-2 text-sm">
                                        {servicesData[1].shortDesc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 3 - Medium (Bookkeeping) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-12 md:col-span-5 row-span-1 group cursor-pointer"
                        onClick={() => setSelectedService(3)}
                    >
                        <div className="relative h-full rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900"></div>
                            <img
                                src={servicesData[2].image}
                                alt={servicesData[2].title}
                                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent"></div>

                            <div className="relative h-full p-8 flex flex-col justify-between">
                                <div className="w-16 h-16 rounded-xl bg-gold-500/10 backdrop-blur-md border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                                    <HiOutlineChartPie className="text-3xl text-gold-400 group-hover:text-navy-900" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                                        {servicesData[2].title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed line-clamp-2 text-sm">
                                        {servicesData[2].shortDesc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 4 - Wide (Financial Reports) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-12 md:col-span-7 row-span-1 group cursor-pointer"
                        onClick={() => setSelectedService(4)}
                    >
                        <div className="relative h-full rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900"></div>
                            <img
                                src={servicesData[3].image}
                                alt={servicesData[3].title}
                                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/60 to-transparent"></div>

                            <div className="relative h-full p-8 flex items-center justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                                        {servicesData[3].title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed line-clamp-2 max-w-xl">
                                        {servicesData[3].shortDesc}
                                    </p>
                                </div>
                                <div className="w-20 h-20 rounded-2xl bg-gold-500/10 backdrop-blur-md border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                                    <HiOutlineTrendingUp className="text-4xl text-gold-400 group-hover:text-navy-900" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 5 - Tall (Wafi) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-12 md:col-span-5 row-span-2 group cursor-pointer"
                        onClick={() => setSelectedService(5)}
                    >
                        <div className="relative h-full rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900"></div>
                            <img
                                src={servicesData[4].image}
                                alt={servicesData[4].title}
                                className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent"></div>

                            <div className="relative h-full p-10 flex flex-col justify-between">
                                <div className="w-20 h-20 rounded-2xl bg-gold-500/10 backdrop-blur-md border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-300">
                                    <HiOutlineOfficeBuilding className="text-4xl text-gold-400 group-hover:text-navy-900" />
                                </div>

                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                                        {servicesData[4].title}
                                    </h3>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-6 line-clamp-3">
                                        {servicesData[4].shortDesc}
                                    </p>
                                    <div className="inline-flex items-center gap-3 text-gold-500 font-bold group-hover:gap-5 transition-all">
                                        <span>التفاصيل</span>
                                        <span className="text-2xl">←</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Service 6 - Wide (Other Services) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="col-span-12 md:col-span-7 row-span-1 group cursor-pointer"
                        onClick={() => setSelectedService(6)}
                    >
                        <div className="relative h-full rounded-3xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-gold-500/20">
                            <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900"></div>
                            <img
                                src={servicesData[5].image}
                                alt={servicesData[5].title}
                                className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-35 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/60 to-transparent"></div>

                            <div className="relative h-full p-8 flex items-center justify-between">
                                <div>
                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">
                                        {servicesData[5].title}
                                    </h3>
                                    <p className="text-gray-400 leading-relaxed line-clamp-2 max-w-xl">
                                        {servicesData[5].shortDesc}
                                    </p>
                                </div>
                                <div className="w-20 h-20 rounded-2xl bg-gold-500/10 backdrop-blur-md border border-gold-500/30 flex items-center justify-center group-hover:bg-gold-500 transition-all duration-300">
                                    <HiOutlineScale className="text-4xl text-gold-400 group-hover:text-navy-900" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-block bg-navy-800/40 backdrop-blur-xl px-12 py-10 rounded-3xl border border-gold-500/20">
                        <h3 className="text-2xl font-bold text-white mb-3">هل تحتاج استشارة مخصصة؟</h3>
                        <p className="text-gray-400 mb-6 text-lg">فريقنا جاهز لمساعدتك في إيجاد الحل المناسب</p>
                        <a
                            href="#contact"
                            className="inline-block px-12 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-gold-500/30 transition-all duration-300 hover:scale-105"
                        >
                            تواصل معنا الآن
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Service Modal */}
            {selectedService && (
                <ServiceModal
                    isOpen={!!selectedService}
                    onClose={() => setSelectedService(null)}
                    title={servicesData.find(s => s.id === selectedService)?.title || ""}
                    image={servicesData.find(s => s.id === selectedService)?.image || ""}
                >
                    {servicesData.find(s => s.id === selectedService)?.content}
                </ServiceModal>
            )}
        </section>
    );
}
