import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineCalculator, HiOutlineDocumentSearch, HiOutlineChartPie, HiOutlineScale, HiOutlineOfficeBuilding, HiOutlineTrendingUp, HiSparkles } from "react-icons/hi";
import ServiceModal from "../ui/ServiceModal";
import { servicesData } from "../../data/servicesData";

export default function Services() {
    const [selectedService, setSelectedService] = useState<number | null>(null);

    return (
        <section id="services" className="py-24 sm:py-32 bg-navy-900 relative overflow-hidden">
            {/* Ultra Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none select-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] flex items-center justify-center overflow-hidden">
                    <span className="text-[30vw] font-black text-gold-500 transform -rotate-12 translate-y-20">ALJASER</span>
                </div>
                <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[180px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl text-right">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-black mb-6"
                        >
                            <HiSparkles className="text-xl" />
                            <span>مستوى عالمي من الاحترافية</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight"
                        >
                            دقة التفاصيل <br />
                            تَصنع <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-600">القوة المالية</span>
                        </motion.h2>
                    </div>
                </div>

                {/* Bento Grid layout with refined styling */}
                <div className="grid grid-cols-12 gap-5 sm:gap-8 auto-rows-[250px] sm:auto-rows-[300px] mb-20">

                    {/* Service 1 - Audit (Leading) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="col-span-12 md:col-span-7 row-span-2 group cursor-pointer"
                        onClick={() => setSelectedService(1)}
                    >
                        <div className="relative h-full rounded-[2.5rem] overflow-hidden bg-navy-800/20 border border-white/5 group-hover:border-gold-500/40 transition-all duration-700">
                            {/* Inner Shadow Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shadow-[inset_0_0_100px_rgba(218,165,32,0.15)]" />

                            <img
                                src={servicesData[0].image}
                                alt={servicesData[0].title}
                                className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                            <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
                                <div className="flex items-start justify-between">
                                    <div className="flex flex-col gap-4">
                                        <div className="w-20 h-20 rounded-[1.5rem] bg-gold-500/10 backdrop-blur-3xl border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:scale-110 transition-all duration-500">
                                            <HiOutlineDocumentSearch className="text-4xl text-gold-400 group-hover:text-navy-900" />
                                        </div>
                                        <span className="text-[10px] font-black tracking-[0.2em] text-navy-900 bg-gold-500 px-4 py-1.5 rounded-full w-fit uppercase">Leading Service</span>
                                    </div>
                                    <span className="text-[10rem] font-black text-white/[0.03] leading-none select-none">01</span>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-5xl font-black text-white group-hover:text-gold-400 transition-colors">
                                        {servicesData[0].title}
                                    </h3>
                                    <p className="text-white/60 text-lg leading-relaxed max-w-lg line-clamp-2">
                                        {servicesData[0].shortDesc}
                                    </p>
                                    <div className="flex items-center gap-3 text-gold-500 group-hover:gap-6 transition-all duration-500 font-black">
                                        <span className="h-0.5 w-12 bg-gold-500/30 group-hover:w-20 group-hover:bg-gold-500 transition-all" />
                                        <span>التفاصيل الكاملة</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Others follow similar premium structure... */}
                    {[1, 2, 3, 4, 5].map((idx) => {
                        const s = servicesData[idx];
                        const icons = [HiOutlineCalculator, HiOutlineChartPie, HiOutlineTrendingUp, HiOutlineOfficeBuilding, HiOutlineScale];
                        const Icon = icons[idx - 1];

                        // Define different spans for a more interesting Bento grid
                        const spans = [
                            "col-span-12 md:col-span-5 row-span-1",
                            "col-span-12 md:col-span-5 row-span-1",
                            "col-span-12 md:col-span-7 row-span-1",
                            "col-span-12 md:col-span-5 row-span-2",
                            "col-span-12 md:col-span-7 row-span-1"
                        ];

                        return (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`${spans[idx - 1]} group cursor-pointer`}
                                onClick={() => setSelectedService(s.id)}
                            >
                                <div className="relative h-full rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/5 hover:border-gold-500/30 transition-all duration-500 backdrop-blur-sm">
                                    <img
                                        src={s.image}
                                        alt={s.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

                                    <div className="relative h-full p-8 flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gold-500 group-hover:border-gold-400 group-hover:scale-110 transition-all duration-500">
                                                <Icon className="text-2xl text-white group-hover:text-navy-900" />
                                            </div>
                                            <span className="text-4xl font-black text-white/5">0{s.id}</span>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-gold-400 transition-colors">
                                                {s.title}
                                            </h3>
                                            <p className="text-sm text-white/40 leading-relaxed line-clamp-2">
                                                {s.shortDesc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom CTA with Floating Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gold-500/5 blur-[100px] rounded-full" />
                    <div className="relative bg-navy-950/50 backdrop-blur-3xl p-10 sm:p-16 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="text-right">
                            <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">هل تبحث عن خدمات مالية استثنائية؟</h3>
                            <p className="text-white/50 text-xl max-w-xl leading-relaxed font-bold">نحن ندرك أن خلف كل رقم قصة نجاح، ونحن هنا لنضمن دقة تلك الأرقام ومصداقيتها.</p>
                        </div>
                        <a
                            href="#contact"
                            className="group relative px-12 py-6 bg-gradient-to-br from-gold-500 to-gold-700 text-white font-black text-lg rounded-2xl shadow-[0_20px_40px_rgba(218,165,32,0.2)] hover:scale-105 transition-all duration-500 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                تواصل مع خبرائنا الآن
                                <HiSparkles className="text-2xl group-hover:rotate-12 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
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
                    details={servicesData.find(s => s.id === selectedService)?.details || { overview: null, targetAudience: null, whyUs: null }}
                />
            )}
        </section>
    );
}
