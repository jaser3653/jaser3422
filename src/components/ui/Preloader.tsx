import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [stage, setStage] = useState<'particles' | 'seal' | 'text' | 'complete'>('particles');

    useEffect(() => {
        const timer1 = setTimeout(() => setStage('seal'), 800);
        const timer2 = setTimeout(() => setStage('text'), 1600);
        const timer3 = setTimeout(() => {
            setStage('complete');
            setTimeout(onComplete, 500);
        }, 2800);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    return (
        <AnimatePresence>
            {stage !== 'complete' && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 overflow-hidden"
                >
                    {/* Animated Background Grid */}
                    <div className="absolute inset-0 opacity-20">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: 'linear-gradient(#DAA520 1px, transparent 1px), linear-gradient(90deg, #DAA520 1px, transparent 1px)',
                                backgroundSize: '50px 50px',
                                animation: 'gridMove 20s linear infinite'
                            }}
                        />
                    </div>

                    {/* Particles */}
                    {stage === 'particles' && (
                        <div className="relative w-full h-full flex items-center justify-center">
                            {[...Array(30)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{
                                        x: Math.random() * window.innerWidth - window.innerWidth / 2,
                                        y: Math.random() * window.innerHeight - window.innerHeight / 2,
                                        opacity: 0,
                                        scale: 0
                                    }}
                                    animate={{
                                        x: 0,
                                        y: 0,
                                        opacity: 1,
                                        scale: 1
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        delay: i * 0.02,
                                        ease: "easeOut"
                                    }}
                                    className="absolute w-2 h-2 bg-gold-500 rounded-full"
                                    style={{
                                        boxShadow: '0 0 20px rgba(218, 165, 32, 0.8)'
                                    }}
                                />
                            ))}
                        </div>
                    )}

                    {/* 3D Seal */}
                    {stage === 'seal' && (
                        <motion.div
                            initial={{ scale: 0, rotateY: 0 }}
                            animate={{
                                scale: [0, 1.2, 1],
                                rotateY: [0, 360, 720]
                            }}
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                            className="relative"
                            style={{ perspective: '1000px' }}
                        >
                            <div className="relative w-32 h-32 md:w-40 md:h-40">
                                {/* Outer Ring */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-4 border-gold-500/30"
                                />

                                {/* Inner Circle */}
                                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-2xl">
                                    <div className="text-center">
                                        <div className="text-white text-4xl md:text-5xl font-black">⚖️</div>
                                        <div className="text-white text-xs font-bold mt-1">1019</div>
                                    </div>
                                </div>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-xl animate-pulse" />
                            </div>
                        </motion.div>
                    )}

                    {/* Text Explosion */}
                    {stage === 'text' && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center"
                        >
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-black text-white mb-2"
                            >
                                مكتب الجاسر
                            </motion.h1>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-gold-400 text-lg md:text-xl font-medium"
                            >
                                محاسبون ومراجعون قانونيون
                            </motion.p>
                        </motion.div>
                    )}

                    <style>{`
                        @keyframes gridMove {
                            0% { transform: translate(0, 0); }
                            100% { transform: translate(50px, 50px); }
                        }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
