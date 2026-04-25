import Image from "next/image";
import Button from "@/components/ui/Button";
import { Star, CircleCheck } from "lucide-react";
import * as motion from "motion/react-client";

export default function HeroBanner() {
    return (
        <section className="w-full min-h-screen flex items-center px-4 py-16 md:px-10 lg:px-16 xl:px-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left Content */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex-1 flex flex-col gap-6"
                >
                    {/* Rating Badge */}
                    <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 w-fit">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium font-[Inter] text-gray-700">
                            4.9 on Google Reviews
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="font-manrope font-extrabold text-4xl md:text-5xl xl:text-6xl leading-tight text-gray-900">
                        Your Smile, <br />
                        Our <span className="text-teal-700">Priority</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-gray-500 text-base md:text-lg max-w-md leading-relaxed">
                        Comprehensive dental care for the whole family. Safe,
                        gentle, and tailored to give you the healthiest smile
                        possible.
                    </p>

                    {/* Checklist */}
                    <ul className="flex flex-col gap-3">
                        {[
                            "Painless & modern treatments",
                            "Experienced & certified dentists",
                        ].map((item) => (
                            <li
                                key={item}
                                className="flex items-center gap-2 font-inter border border-zinc-200 px-4 py-2 rounded-full text-gray-600 text-sm md:text-base w-fit"
                            >
                                <CircleCheck className="w-5 h-5 text-teal-700 shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Buttons */}
                    <a
                        href="https://wa.me/8801700000000" 
                        target="_blank"
                        className="flex flex-wrap items-center gap-4 mt-2"
                    >
                        <Button>Book Appointment</Button>
                    </a>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="flex-1 relative w-full max-w-lg lg:max-w-none"
                >
                    <div className="relative rounded-3xl overflow-hidden w-full h-110">
                        <Image
                            src="https://images.unsplash.com/photo-1663185551550-f8f56529ac5e?q=80&w=1440&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Happy patient at dental clinic"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Floating stat card */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                            delay: 0.2,
                        }}
                        viewport={{ once: true }}
                        className="absolute bottom-10 left-4 md:-left-8 bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-1 w-44"
                    >
                        <span className="text-xs font-[Inter] text-gray-400 uppercase tracking-wide">
                            Patients Treated
                        </span>
                        <span className="font-[Manrope] font-extrabold text-3xl text-gray-900">
                            10K+
                        </span>
                        <span className="text-xs font-[Inter] text-gray-400">
                            Happy smiles & counting
                        </span>
                    </motion.div>

                    {/* Floating tags */}
                    <div className="absolute bottom-10 right-2 xl:flex flex-col lg:flex-row gap-2 hidden">
                        {["Whitening", "Implants", "Braces"].map((tag) => (
                            <motion.span
                                initial={{ y: -50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                    delay: 0.3,
                                }}
                                viewport={{ once: true }}
                                key={tag}
                                className="bg-white/40 backdrop-blur-sm border border-gray-200 text-white text-base font-medium px-4 py-1.5 rounded-full shadow-sm font-manrope cursor-pointer hover:scale-105 duration-500 ease-in-out transition-all"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
