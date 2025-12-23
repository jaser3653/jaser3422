import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const banners = [
    {
        id: 1,
        title: 'التميز في المراجعة المالية',
        subtitle: 'خبرة تتجاوز 15 عاماً في خدمة الشركات الكبرى',
        image: '/assets/accountant-illustration.png'
    },
    {
        id: 2,
        title: 'حلول ضريبية متكاملة',
        subtitle: 'استشارات متخصصة في الزكاة والضريبة',
        image: '/assets/law-court.png'
    },
    {
        id: 3,
        title: 'فريق من الخبراء',
        subtitle: 'محاسبون ومراجعون معتمدون من SOCPA',
        image: '/assets/581-removebg-preview.png'
    },
    {
        id: 4,
        title: 'شريكك في النجاح',
        subtitle: 'أكثر من 500 عميل يثقون بخدماتنا المتميزة',
        image: '/assets/-professional-saudi-businessman---.png'
    },
    {
        id: 5,
        title: 'خدمات التدقيق المالي',
        subtitle: 'تقارير مالية دقيقة وموثوقة',
        image: '/assets/audit_service_1766426375546.png'
    },
    {
        id: 6,
        title: 'المحاسبة والمسك الدفاتر',
        subtitle: 'إدارة مالية احترافية لأعمالك',
        image: '/assets/bookkeeping_service_1766426404779.png'
    },
    {
        id: 7,
        title: 'الاستشارات المالية',
        subtitle: 'حلول مالية استراتيجية لنمو أعمالك',
        image: '/assets/consulting_service_1766426448807.png'
    },
    {
        id: 8,
        title: 'التقارير المالية',
        subtitle: 'تحليلات مالية شاملة ومفصلة',
        image: '/assets/financial_reports_1766426418141.png'
    }
];

export default function HorizontalBanners() {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        const scrollContainer = scrollContainerRef.current;

        if (!container || !scrollContainer) return;

        // Calculate total scroll width
        const scrollWidth = scrollContainer.scrollWidth - window.innerWidth;

        // Horizontal scroll animation
        const scrollTween = gsap.to(scrollContainer, {
            x: -scrollWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: container,
                start: 'top top',
                end: () => `+=${scrollWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        // Parallax effect for images
        gsap.utils.toArray('.banner-image').forEach((image: any) => {
            gsap.to(image, {
                x: -100,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: () => `+=${scrollWidth}`,
                    scrub: 1
                }
            });
        });

        // Fade in text on scroll
        gsap.utils.toArray('.banner-text').forEach((text: any, index) => {
            gsap.fromTo(text,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: container,
                        start: `top+=${index * 25}% top`,
                        end: `top+=${index * 25 + 15}% top`,
                        scrub: 1
                    }
                }
            );
        });

        return () => {
            scrollTween.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative h-screen overflow-hidden bg-navy-950"
        >
            {/* Scroll Container */}
            <div
                ref={scrollContainerRef}
                className="flex h-full"
                style={{ width: `${banners.length * 100}vw` }}
            >
                {banners.map((banner, index) => (
                    <div
                        key={banner.id}
                        className="relative w-screen h-full flex-shrink-0"
                    >
                        {/* Background Image with Parallax */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div
                                className="banner-image absolute inset-0 w-[120%] h-full"
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    filter: 'brightness(0.5) contrast(1.1)'
                                }}
                            />
                        </div>

                        {/* Subtle Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

                        {/* Animated Grid */}
                        <div
                            className="absolute inset-0 opacity-10"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(218, 165, 32, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(218, 165, 32, 0.3) 1px, transparent 1px)',
                                backgroundSize: '50px 50px',
                                animation: `gridMove${index} 20s linear infinite`
                            }}
                        />

                        {/* Content */}
                        <div className="banner-text relative z-10 h-full flex items-center">
                            <div className="container mx-auto px-8 md:px-16">
                                <div className="max-w-3xl">
                                    {/* Number Badge */}
                                    <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-gold-500/30">
                                        <span className="text-5xl font-black text-gold-400">0{index + 1}</span>
                                        <div className="h-8 w-px bg-gold-500/30" />
                                        <span className="text-sm text-gray-300 font-medium">خدمة متميزة</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
                                        {banner.title}
                                    </h2>

                                    {/* Subtitle */}
                                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                                        {banner.subtitle}
                                    </p>

                                    {/* Decorative Line */}
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-1 w-20 bg-gradient-to-r from-gold-500 to-transparent" />
                                        <span className="text-gold-400 text-sm font-bold">مكتب الجاسر</span>
                                    </div>

                                    {/* CTA */}
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-gold-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <span>اكتشف المزيد</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Scroll Indicator (only on first banner) */}
                        {index === 0 && (
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
                                <span className="text-gold-400 text-sm font-medium">مرر للاستكشاف</span>
                                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </div>
                        )}

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                            <div
                                className="h-full bg-gradient-to-r from-gold-500 to-gold-600"
                                style={{ width: `${((index + 1) / banners.length) * 100}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="absolute top-1/2 right-8 -translate-y-1/2 z-20 flex flex-col gap-4">
                {banners.map((_, index) => (
                    <div
                        key={index}
                        className="w-3 h-3 rounded-full bg-white/30 hover:bg-gold-500 transition-colors cursor-pointer"
                    />
                ))}
            </div>

            <style>{`
                @keyframes gridMove0 {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, 50px); }
                }
                @keyframes gridMove1 {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(-50px, 50px); }
                }
                @keyframes gridMove2 {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(50px, -50px); }
                }
                @keyframes gridMove3 {
                    0% { transform: translate(0, 0); }
                    100% { transform: translate(-50px, -50px); }
                }
            `}</style>
        </section>
    );
}
