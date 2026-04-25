"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import faqs from "@/lib/data/faqs";

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="w-full px-4 py-16 md:px-10 lg:px-16 xl:px-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col justify-center items-center gap-4">
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-teal-700 font-semibold font-inter text-sm text-center"
                    >
                        FAQs
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.1,
                        }}
                        viewport={{ once: true }}
                        className="font-manrope font-extrabold text-3xl md:text-4xl leading-tight text-gray-900 text-center"
                    >
                        Answers to Your Dental Questions
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        viewport={{ once: true }}
                        className="font-inter text-gray-500 text-base md:text-lg leading-relaxed text-center max-w-xl"
                    >
                        Have questions about your dental health or our
                        treatments? We have got you covered with honest, clear
                        answers.
                    </motion.p>
                </div>

                {/* Accordion */}
                <div className="flex flex-col gap-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: i * 0.07,
                                }}
                                viewport={{ once: true }}
                                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-teal-700" : "border-gray-200"}`}
                            >
                                <button
                                    onClick={() =>
                                        setOpenIndex(isOpen ? -1 : i)
                                    }
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                                >
                                    <span
                                        className={`font-manrope font-semibold text-base md:text-lg transition-colors duration-300 ${isOpen ? "text-teal-700" : "text-gray-900"}`}
                                    >
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-teal-700 text-white" : "bg-gray-100 text-gray-500"}`}
                                    >
                                        {isOpen ? (
                                            <Minus className="w-4 h-4" />
                                        ) : (
                                            <Plus className="w-4 h-4" />
                                        )}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.35,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <p className="font-inter text-gray-500 text-sm md:text-base leading-relaxed px-6 pb-5">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
