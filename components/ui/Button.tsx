"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    className,
    onClick,
    disabled,
}: ButtonProps) {
    const baseStyles =
        "relative overflow-hidden rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 z-10";

    const variants = {
        primary:
            "bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg hover:shadow-gold-500/20 border border-gold-400/20",
        secondary:
            "bg-navy-800 text-white border border-navy-700 hover:bg-navy-700 hover:border-gold-500/30",
        outline:
            "bg-transparent border border-gold-500 text-gold-500 hover:bg-gold-500/10",
        ghost: "bg-transparent text-gray-300 hover:text-gold-500",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={clsx(baseStyles, variants[variant], sizes[size], className)}
            onClick={onClick}
            disabled={disabled}
        >
            {/* Shimmer Effect for Primary */}
            {variant === "primary" && (
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
            )}
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </motion.button>
    );
}
