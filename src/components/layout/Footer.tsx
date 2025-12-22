export default function Footer() {
    return (
        <footer className="bg-navy-900 border-t border-white/5 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">مكتب الجاسر</h3>
                        <p className="text-gray-400 leading-relaxed mb-4">
                            محاسبون ومراجعون قانونيون
                        </p>
                        <p className="text-gray-500 text-sm">
                            نقدم خدمات محاسبية ومالية احترافية منذ أكثر من 15 عاماً
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">روابط سريعة</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors">
                                    الخدمات
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-gold-400 transition-colors">
                                    تواصل معنا
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">معلومات التواصل</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li>الرياض، حي الوادي</li>
                            <li dir="ltr">+966 57 783 8296</li>
                            <li dir="ltr">info@aljasircpa.com</li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm">
                        © 2025 مكتب الجاسر محاسبون ومراجعون قانونيون. جميع الحقوق محفوظة.
                    </p>
                </div>
            </div>
        </footer>
    );
}
