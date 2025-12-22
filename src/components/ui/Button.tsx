import { motion } from "framer-motion";
import type { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    onClick,
    href,
    disabled,
}: ButtonProps) {
    const baseStyles =
        "relative overflow-hidden rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 z-10 font-arabic cursor-pointer px-8";

    const variants = {
        primary:
            "bg-gradient-to-r from-gold-500 via-gold-600 to-gold-500 bg-[length:200%_auto] hover:bg-right text-white shadow-[0_10px_30px_-10px_rgba(218,165,32,0.5)] border border-white/20",
        secondary:
            "bg-navy-800/80 backdrop-blur-md text-white border border-white/10 hover:border-gold-500/50 hover:bg-navy-700",
        outline:
            "bg-transparent border-2 border-gold-500/50 text-gold-500 hover:bg-gold-500 hover:text-navy-900",
        ghost: "bg-transparent text-gray-300 hover:text-gold-500 hover:bg-white/5",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    const content = (
        <>
            {/* Shimmer Effect for Primary */}
            {variant === "primary" && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            )}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </>
    );

    const commonProps = {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        className: clsx(baseStyles, variants[variant], sizes[size], className),
    };

    if (href) {
        return (
            <motion.a {...commonProps} href={href} onClick={onClick}>
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            {...commonProps}
            onClick={onClick}
            disabled={disabled}
        >
            {content}
        </motion.button>
    );
}
