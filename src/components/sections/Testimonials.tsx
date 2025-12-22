import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "أحمد العتيبي",
        company: "شركة النخبة للتجارة",
        text: "خدمة احترافية ودقة عالية في العمل. ساعدونا في تنظيم حساباتنا بشكل ممتاز.",
        rating: 5
    },
    {
        id: 2,
        name: "فهد المطيري",
        company: "مؤسسة الأفق للمقاولات",
        text: "فريق محترف وملتزم بالمواعيد. أنصح بالتعامل معهم بشدة.",
        rating: 5
    },
    {
        id: 3,
        name: "خالد السبيعي",
        company: "مجموعة الرواد التجارية",
        text: "تعاملت معهم لأكثر من 5 سنوات. خدمة ممتازة وأسعار منافسة.",
        rating: 5
    },
    {
        id: 4,
        name: "محمد الدوسري",
        company: "شركة البناء الحديث",
        text: "خبرة واسعة ومعرفة عميقة بالأنظمة المالية. شكراً لكم.",
        rating: 5
    },
    {
        id: 5,
        name: "عبدالله القحطاني",
        company: "مؤسسة التميز للاستثمار",
        text: "أفضل مكتب محاسبة تعاملت معه. دقة والتزام وشفافية.",
        rating: 5
    },
    {
        id: 6,
        name: "سعد الشمري",
        company: "شركة الإبداع للتسويق",
        text: "ساعدونا في تجاوز تحديات كثيرة. فريق رائع ومتعاون.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-navy-900 to-navy-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold-500/5 rounded-full blur-[100px] md:blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 mb-12 md:mb-16">
                {/* Header */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4 md:mb-6"
                    >
                        <span className="px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm md:font-medium">
                            آراء العملاء
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6"
                    >
                        ماذا يقول <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">عملاؤنا</span>
                    </motion.h2>
                </div>
            </div>

            {/* Infinite Scrolling Testimonials */}
            <div className="relative overflow-hidden">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-navy-800 to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-navy-800 to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Container */}
                <div className="flex gap-4 md:gap-6 animate-scroll-rtl py-4">
                    {/* Triple the items to ensure no gaps on any screen size */}
                    {[...testimonials, ...testimonials, ...testimonials].map((testimonial, idx) => (
                        <TestimonialCard key={`${idx}-${testimonial.id}`} testimonial={testimonial} />
                    ))}
                </div>
            </div>

            {/* CSS Animation */}
            <style>{`
        @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(100% / 3));
          }
        }
        
        .animate-scroll-rtl {
          display: flex;
          width: max-content;
          animation: scroll-rtl 30s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-scroll-rtl {
            animation: scroll-rtl 15s linear infinite;
            gap: 16px;
          }
        }
      `}</style>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="flex-shrink-0 w-[300px] md:w-[400px] bg-navy-800/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-gold-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold-500/5">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-400 text-lg md:text-xl">★</span>
                ))}
            </div>

            {/* Quote */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 min-h-[60px] md:min-h-[80px]">
                "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 md:gap-4 pt-4 border-t border-white/5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-white font-bold text-lg md:text-xl">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <div className="text-white font-bold text-sm md:text-base">{testimonial.name}</div>
                    <div className="text-gray-500 text-xs md:text-sm">{testimonial.company}</div>
                </div>
            </div>
        </div>
    );
}
