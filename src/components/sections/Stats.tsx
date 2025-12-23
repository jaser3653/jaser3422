import { motion } from "framer-motion";
import CountUp from "react-countup";
import { HiOutlineUserGroup, HiOutlineOfficeBuilding, HiOutlineShieldCheck, HiOutlineBadgeCheck } from "react-icons/hi";

const stats = [
    {
        label: "عملاء نعتز بخدمتهم",
        value: 150,
        suffix: "+",
        icon: HiOutlineUserGroup,
        color: "from-gold-400 to-gold-600"
    },
    {
        label: "عاماً من الخبرة",
        value: 15,
        suffix: "+",
        icon: HiOutlineOfficeBuilding,
        color: "from-gold-400 to-gold-600"
    },
    {
        label: "تقرير مراجعة صادق",
        value: 1000,
        suffix: "+",
        icon: HiOutlineShieldCheck,
        color: "from-gold-400 to-gold-600"
    },
    {
        label: "تراخيص واعتمادات",
        value: 5,
        suffix: "+",
        icon: HiOutlineBadgeCheck,
        color: "from-gold-400 to-gold-600"
    }
];

export default function Stats() {
    return (
        <section className="py-20 bg-navy-950 relative overflow-hidden">
            {/* Background elements for depth */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="mb-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-gold-500/30 transition-all duration-500">
                                <stat.icon className="text-3xl sm:text-4xl text-gold-500 group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="text-3xl sm:text-5xl font-black text-white mb-2 flex items-center gap-1">
                                <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                                <span className="text-gold-500">{stat.suffix}</span>
                            </div>

                            <p className="text-sm sm:text-base text-gray-400 font-bold tracking-wide uppercase">
                                {stat.label}
                            </p>

                            {/* Decorative line */}
                            <div className="mt-4 w-8 h-1 bg-gold-500/20 rounded-full group-hover:w-16 group-hover:bg-gold-500/50 transition-all duration-700" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
