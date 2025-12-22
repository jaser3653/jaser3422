import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative py-20 overflow-hidden bg-navy-800">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="glass-card rounded-2xl p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="/assets/law-court.png"
                            alt="مقر المكتب"
                            className="rounded-xl w-full h-auto object-cover shadow-2xl"
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-10 bg-gold-500/10 backdrop-blur-md border border-gold-500/30 p-6 rounded-xl hidden md:block">
                        <p className="text-4xl font-bold text-gold-500 text-center">+100</p>
                        <p className="text-sm text-gray-300">نجاح قانوني</p>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-right space-y-6"
                >
                    <h2 className="text-4xl font-bold">
                        <span className="text-gold-500 text-lg block mb-2">من نحن</span>
                        الريادة في المحاسبة والتدقيق
                    </h2>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        تأسس مكتب عبدالله حمد الجاسر برؤية واضحة: تقديم خدمات محاسبية ومراجعة قانونية وفق أعلى المعايير المهنية. نحن نجمع بين العراقة والابتكار، ونعتمد على فريق من النخبة المحاسبية لضمان دقة وسلامة مركزك المالي.
                    </p>

                    <ul className="space-y-4 pt-4">
                        {[
                            "مرخصون من وزارة التجارة برقم 1019",
                            "أعضاء الهيئة السعودية للمراجعين والمحاسبين (SOCPA)",
                            "خبرة واسعة في التعامل مع الزكاة والضريبة",
                            "حلول رقمية متقدمة لإدارة الحسابات"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-white">
                                <span className="text-gold-500">✔</span> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

            </div>
        </section>
    );
}
