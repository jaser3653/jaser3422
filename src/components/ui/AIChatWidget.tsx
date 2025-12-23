import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChatAlt2, HiX, HiPaperAirplane } from "react-icons/hi";
import { aiKnowledgeBase, fallbackResponse } from "../../data/ai-assistant-data";

interface Message {
    id: number;
    text: string;
    sender: "user" | "ai";
    action?: {
        label: string;
        link: string;
    };
}

export default function AIChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "مرحباً بك! أنا المساعد الذكي لمكتب عبدالله الجاسر. كيف يمكنني مساعدتك اليوم؟",
            sender: "ai"
        }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSendMessage = () => {
        if (!inputValue.trim()) return;

        const userMessage: Message = {
            id: Date.now(),
            text: inputValue,
            sender: "user"
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue("");
        setIsTyping(true);

        // Simulate AI thinking
        setTimeout(() => {
            const response = findResponse(userMessage.text);
            const aiMessage: Message = {
                id: Date.now() + 1,
                text: response.text,
                sender: "ai",
                action: response.action
            };
            setMessages(prev => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1500);
    };

    const normalizeArabic = (text: string) => {
        return text
            .replace(/[أإآا]/g, "ا")
            .replace(/[ىي]/g, "ي")
            .replace(/[ةه]/g, "ه")
            .replace(/[ًٌٍَُِّ]/g, "") // Remove Tashkeel
            .toLowerCase()
            .trim();
    };

    const findResponse = (text: string) => {
        const normalizedInput = normalizeArabic(text);

        for (const entry of aiKnowledgeBase) {
            if (entry.keywords.some(kw => normalizedInput.includes(normalizeArabic(kw)))) {
                return { text: entry.response, action: entry.action };
            }
        }
        return { text: fallbackResponse, action: { label: "تحدث مع الدعم", link: "https://wa.me/966577838296" } };
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100] font-tajawal">
            {/* Chat Bubble */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-white shadow-[0_10px_40px_rgba(218,165,32,0.4)] relative group"
                aria-label="AI Support Chat"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <HiX className="text-3xl" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <HiOutlineChatAlt2 className="text-3xl" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isOpen && (
                    <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-navy-950 animate-bounce" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: "bottom left" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="absolute bottom-20 left-0 w-[350px] sm:w-[400px] h-[500px] bg-navy-900/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-r from-navy-800 to-navy-900 border-b border-white/5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                                <span className="text-2xl">🤖</span>
                            </div>
                            <div>
                                <h3 className="text-white font-black text-lg leading-tight">المساعد الذكي</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">متصل الآن</span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div
                            ref={scrollRef}
                            className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-hide"
                        >
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10, x: msg.sender === "user" ? -20 : 20 }}
                                    animate={{ opacity: 1, y: 0, x: 0 }}
                                    className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"}`}
                                >
                                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                                        ? "bg-gold-500 text-white rounded-bl-none"
                                        : "bg-white/5 text-gray-200 border border-white/10 rounded-br-none"
                                        }`}>
                                        <p className="text-right">{msg.text}</p>

                                        {msg.action && (
                                            <a
                                                href={msg.action.link}
                                                target={msg.action.link.startsWith("http") ? "_blank" : "_self"}
                                                rel="noopener noreferrer"
                                                className="mt-3 block w-full py-2 px-4 bg-gold-500/10 border border-gold-500/20 text-gold-500 rounded-lg text-center font-bold hover:bg-gold-500 hover:text-white transition-all"
                                                onClick={() => !msg.action?.link.startsWith("http") && setIsOpen(false)}
                                            >
                                                {msg.action.label}
                                            </a>
                                        )}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-end"
                                >
                                    <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-br-none flex gap-1">
                                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce" />
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white/5 border-t border-white/5">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                                    placeholder="اكتب سؤالك هنا..."
                                    className="w-full bg-navy-950 border border-white/20 rounded-xl py-4 ps-4 pe-14 text-base text-white placeholder:text-white/40 focus:outline-none focus:border-gold-500/50 transition-all shadow-inner"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="absolute left-2 w-8 h-8 rounded-lg bg-gold-500 flex items-center justify-center text-white hover:bg-gold-600 transition-all"
                                >
                                    <HiPaperAirplane className="rotate-180" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
