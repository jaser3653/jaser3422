import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    900: "#0A1628", // Deep Navy
                    800: "#1B2B44", // Lighter Navy
                    700: "#243B55",
                },
                gold: {
                    500: "#DAA520", // Rich Gold
                    600: "#B8860B", // Darker Gold/Bronze
                    400: "#FFD700", // Bright Gold
                    300: "#C9A961", // Champagne Gold
                },
                charcoal: {
                    900: "#1A202C",
                    800: "#2D3748",
                    700: "#4A5568",
                },
                silver: {
                    100: "#F8FAFC",
                    200: "#E2E8F0",
                    300: "#CBD5E0",
                    400: "#94A3B8",
                },
                emerald: {
                    600: "#059669",
                    700: "#047857"
                }
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                arabic: ["var(--font-tajawal)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "intro-gradient": "linear-gradient(to bottom, #0A1628, #1B2B44)",
            },
        },
    },
    plugins: [],
};
export default config;
