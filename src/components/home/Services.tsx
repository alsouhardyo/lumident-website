import Image from "next/image";
import * as motion from "motion/react-client";
import type { Service } from "@/types";
import Button from "../ui/Button";
import Link from "next/link";

const stats = ["24/7 Support", "Extra Care", "Modern Equipment"];

export default function Services({ services }: { services: Service[] }) {
    return (
        <section className="w-full px-4 py-16 md:px-10 lg:px-16 xl:px-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-12">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-0 justify-between">
                    <div className="flex flex-col gap-4 max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5 w-fit"
                        >
                            <span className="w-2 h-2 rounded-full bg-teal-600 inline-block" />
                            <span className="font-inter text-sm font-semibold text-teal-700">Our Services</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="font-manrope font-extrabold text-3xl md:text-4xl leading-tight text-teal-700"
                        >
                            Smile Solutions for Every Need
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.1,
                            }}
                            viewport={{ once: true }}
                            className="font-inter text-gray-500 text-base leading-relaxed"
                        >
                            From preventive cleanings to dental implants, we
                            provide complete oral care tailored to your needs —
                            all under one roof.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-3"
                    >
                        {stats.map((stat) => (
                            <span
                                key={stat}
                                className="font-inter text-sm text-gray-600 border border-gray-200 rounded-full px-4 py-1.5"
                            >
                                {stat}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service: Service, i: number) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: i * 0.08,
                                }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl overflow-hidden h-72 group cursor-pointer"
                            >
                                {/* Background Image */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-teal-900/65 group-hover:bg-teal-900/75 transition-colors duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                                    <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="font-manrope font-bold text-xl text-white">
                                            {service.title}
                                        </h3>
                                        <p className="font-inter text-sm text-white/80 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Button */}
                {services.length === 3 && (
                    <Link href="/services" className="mx-auto">
                        <Button>See more</Button>
                    </Link>
                )}
            </div>
        </section>
    );
}
