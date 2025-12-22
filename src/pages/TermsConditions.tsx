import { motion } from "framer-motion";
import { useEffect } from "react";

export default function TermsConditions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-navy-900">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
                    <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]"></div>

                    {/* Geometric Shapes */}
                    <div className="absolute top-20 left-20 w-32 h-32 border-2 border-gold-500/20 rounded-2xl -rotate-12"></div>
                    <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-gold-500/20 rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-6 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-medium mb-6">
                            الشروط والأحكام
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            شروط <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">الاستخدام</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام خدمتنا
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 bg-gradient-to-b from-navy-900 to-navy-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-navy-800/40 backdrop-blur-xl rounded-3xl border border-white/5 p-8 md:p-12 space-y-12">

                            {/* Section 1 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">1.</span>
                                    المقدمة
                                </h2>
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                    <p>مرحباً بكم في مكتب الجاسر محاسبون ومراجعون قانونيون.</p>
                                    <p>تحكم هذه الشروط والأحكام ("الشروط") جميع استخدامات خدماتنا وتشكل مع سياسة الخصوصية اتفاقيتك معنا ("الاتفاقية").</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">2.</span>
                                    استخدام الخدمة
                                </h2>
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                    <p>باستخدام خدمتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فيجب عليك عدم استخدام خدمتنا.</p>
                                    <p>نحتفظ بالحق في تعديل أو استبدال هذه الشروط في أي وقت. سنبذل جهوداً معقولة لإخطارك بأي تغييرات جوهرية.</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">3.</span>
                                    الملكية الفكرية
                                </h2>
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                    <p>جميع المحتويات والمواد المتاحة على موقعنا، بما في ذلك على سبيل المثال لا الحصر النصوص والرسومات والشعارات، هي ملكية لمكتب الجاسر محاسبون ومراجعون قانونيون.</p>
                                    <p>لا يجوز لك نسخ أو تعديل أو توزيع أو بيع أو تأجير أي جزء من خدماتنا أو البرامج المضمنة دون إذن كتابي صريح منا.</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">4.</span>
                                    المسؤولية
                                </h2>
                                <div className="text-gray-300 leading-relaxed space-y-4">
                                    <p>نحن نسعى جاهدين لتوفير معلومات دقيقة وموثوقة، ولكننا لا نضمن دقة أو اكتمال أو موثوقية أي محتوى على موقعنا.</p>
                                    <p>لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام أو عدم القدرة على استخدام خدمتنا.</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">5.</span>
                                    القانون الحاكم
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    تخضع هذه الشروط والأحكام وتفسر وفقاً لقوانين المملكة العربية السعودية، وتوافق على الخضوع للاختصاص القضائي الحصري للمحاكم الموجودة في المملكة العربية السعودية.
                                </p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">6.</span>
                                    التعديلات
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    نحتفظ بالحق في تعديل هذه الشروط في أي وقت. سيتم نشر أي تغييرات على هذه الصفحة، وسيتم تحديث تاريخ "آخر تحديث" في أعلى هذه الصفحة.
                                </p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Contact */}
                            <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl p-8 border border-gold-500/20">
                                <h2 className="text-2xl font-bold text-white mb-4">اتصل بنا</h2>
                                <p className="text-gray-300 mb-4">
                                    إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا:
                                </p>
                                <a href="mailto:info@aljasircpa.com" className="text-gold-400 hover:text-gold-300 font-medium" dir="ltr">
                                    info@aljasircpa.com
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
