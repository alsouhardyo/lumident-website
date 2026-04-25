import Image from "next/image";
import Button from "@/components/ui/Button";
import { CircleCheck } from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";

const features = [
    "Personalized Treatment Plans",
    "Gentle Care for Kids",
    "State-of-the-Art Technology",
    "Affordable Pricing",
];

export default function About() {
    return (
        <section className="w-full px-4 py-16 md:px-10 lg:px-16 xl:px-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left Images */}
                <div className="flex-1 flex items-end gap-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative w-1/2 h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGRlbnRpc3QlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D"
                            alt="Dentist examining patient"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 48 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.15,
                        }}
                        viewport={{ once: true }}
                        className="relative w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1663755785915-ef1748dda404?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGRlbnRpc3QlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D"
                            alt="Dentist with happy patient"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col gap-6">
                    <motion.span
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-teal-700 font-semibold font-inter text-sm lg:text-base"
                    >
                        About Us
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
                        className="font-manrope font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight text-gray-900"
                    >
                        Trusted Care for a Brighter Smile
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
                        className="font-inter text-gray-500 text-base md:text-lg leading-relaxed max-w-lg"
                    >
                        We offer high-quality dental care tailored for the whole
                        family. From routine checkups to advanced treatments,
                        our compassionate team ensures your smile stays healthy
                        and confident.
                    </motion.p>

                    <motion.ul
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
                    >
                        {features.map((feature) => (
                            <li
                                key={feature}
                                className="flex items-start gap-2 font-inter text-gray-700 text-sm md:text-base"
                            >
                                <CircleCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                                {feature}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.4,
                        }}
                        viewport={{ once: true }}
                        className="mt-2"
                    >
                        <Link href="/about">
                            <Button>Learn More</Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
