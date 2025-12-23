import { motion } from "framer-motion";

const symbols = ['₿', '$', '€', '¥', '£', '₹', '฿', '₪'];

export default function FloatingSymbols() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {symbols.map((symbol, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: `${Math.random() * 100}%`,
                        y: `${Math.random() * 100}%`,
                        opacity: 0
                    }}
                    animate={{
                        y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                        x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
                        opacity: [0, 0.15, 0],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "linear"
                    }}
                    className="absolute text-4xl md:text-6xl text-gold-500 font-bold"
                    style={{
                        textShadow: '0 0 30px rgba(218, 165, 32, 0.5)'
                    }}
                >
                    {symbol}
                </motion.div>
            ))}
        </div>
    );
}
