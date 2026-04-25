"use client";
import navItems from "@/lib/data/navitems";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <nav className="hidden lg:block border border-zinc-200 px-4 py-2 rounded-full">
            <ul className="flex justify-between items-center gap-10 font-manrope">
                {navItems.map((item) => (
                    <li
                        key={item.name}
                        className={
                            pathname === item.path
                                ? "font-medium bg-teal-700 text-white px-4 py-0.5 rounded-full duration-500 ease-in-out transition-all"
                                : "hover:text-teal-700 hover:font-medium hover:underline hover:underline-offset-4 duration-500 ease-in-out transition-all"
                        }
                    >
                        <a href={item.path}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export function MobileMenu({
    isOpen,
    setIsOpen,
}: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed top-0 right-0 h-screen w-[80%] bg-white shadow-2xl lg:hidden z-3000 p-8"
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="flex flex-col h-full">
                        <nav className="mt-16">
                            <ul className="space-y-6">
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.name}
                                        className="text-xl font-medium"
                                    >
                                        <Link
                                            href={item.path}
                                            className={`text-black ${
                                                pathname === item.path &&
                                                "text-teal-700 font-medium underline underline-offset-8"
                                            } hover:text-teal-700 hover:font-medium duration-500 ease-in-out transition-all font-manrope`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                        <div className="mt-auto space-y-6 space-x-4">
                            <Button>Book Now</Button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
