"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import BounceLoader from "react-spinners/BounceLoader";

export default function Template({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main>
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="fixed inset-0 z-9999 flex items-center justify-center bg-white"
                    >
                        <div className="flex flex-col items-center gap-4">
                            <BounceLoader color="#0f766e" size={60} />
                            <p className="font-inter text-sm text-gray-400 tracking-widest uppercase animate-pulse">Loading...</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!loading && children}
        </main>
    );
}
