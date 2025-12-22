import { motion } from "framer-motion";
import { useEffect } from "react";

export default function PrivacyPolicy() {
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
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]"></div>

                    {/* Geometric Shapes */}
                    <div className="absolute top-20 right-20 w-32 h-32 border-2 border-gold-500/20 rounded-2xl rotate-12"></div>
                    <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-gold-500/20 rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-6 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-medium mb-6">
                            سياسة الخصوصية
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                            حماية <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">بياناتك</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            نلتزم بحماية خصوصيتك وأمان معلوماتك الشخصية
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
                                    <p>يقوم مكتب الجاسر محاسبون ومراجعون قانونيون ("نحن" أو "لنا" أو "خاصتنا") بإدارة موقع aljasircpa.com (المشار إليه فيما يلي باسم "الخدمة").</p>
                                    <p>تحكم سياسة الخصوصية الخاصة بنا زيارتك إلى aljasircpa.com، وتوضح كيف نقوم بجمع وحماية والإفصاح عن المعلومات التي تنتج عن استخدامك لخدمتنا.</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 2 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">2.</span>
                                    التعاريف
                                </h2>
                                <div className="text-gray-300 leading-relaxed space-y-3">
                                    <p><strong className="text-white">الخدمة:</strong> تعني موقع aljasircpa.com الذي يديره مكتب الجاسر محاسبون ومراجعون قانونيون.</p>
                                    <p><strong className="text-white">البيانات الشخصية:</strong> تعني البيانات المتعلقة بشخص حي يمكن التعرف عليه من خلال تلك البيانات.</p>
                                    <p><strong className="text-white">بيانات الاستخدام:</strong> هي البيانات التي يتم جمعها تلقائياً إما عن طريق استخدام الخدمة أو من البنية التحتية للخدمة نفسها.</p>
                                    <p><strong className="text-white">ملفات تعريف الارتباط:</strong> هي ملفات صغيرة يتم تخزينها على جهازك (الكمبيوتر أو الجهاز المحمول).</p>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 3 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">3.</span>
                                    جمع المعلومات واستخدامها
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    نقوم بجمع أنواع مختلفة من المعلومات لأغراض مختلفة لتوفير خدمتنا لك وتحسينها.
                                </p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 4 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">4.</span>
                                    أنواع البيانات التي تم جمعها
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-gold-400 mb-3">البيانات الشخصية</h3>
                                        <p className="text-gray-300 mb-3">قد تتضمن المعلومات التعريفية الشخصية، على سبيل المثال لا الحصر:</p>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold-500 mt-1">•</span>
                                                <span>عنوان البريد الإلكتروني</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold-500 mt-1">•</span>
                                                <span>الاسم الأول والأخير</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold-500 mt-1">•</span>
                                                <span>رقم الهاتف</span>
                                            </li>
                                            <li className="flex items-start gap-3">
                                                <span className="text-gold-500 mt-1">•</span>
                                                <span>العنوان، الدولة، المدينة</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 5 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">5.</span>
                                    استخدام البيانات
                                </h2>
                                <p className="text-gray-300 mb-4">يستخدم مكتب الجاسر محاسبون ومراجعون قانونيون البيانات التي تم جمعها لأغراض مختلفة:</p>
                                <ul className="space-y-2 text-gray-300">
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>لتوفير خدمتنا وصيانتها</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>لإعلامك بالتغييرات التي تطرأ على خدمتنا</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>لتقديم الدعم للعملاء</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-gold-500 mt-1">•</span>
                                        <span>لمراقبة استخدام خدمتنا</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Section 6 */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                                    <span className="text-gold-500">6.</span>
                                    أمن البيانات
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    إن أمن بياناتك مهم بالنسبة لنا، ولكن تذكر أنه لا توجد طريقة نقل عبر الإنترنت أو طريقة تخزين إلكتروني آمنة بنسبة 100%. وبينما نسعى جاهدين لاستخدام وسائل مقبولة تجارياً لحماية بياناتك الشخصية، لا يمكننا ضمان أمنها المطلق.
                                </p>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent"></div>

                            {/* Contact */}
                            <div className="bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl p-8 border border-gold-500/20">
                                <h2 className="text-2xl font-bold text-white mb-4">اتصل بنا</h2>
                                <p className="text-gray-300 mb-4">
                                    إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:
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
