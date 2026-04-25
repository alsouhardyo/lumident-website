import Image from "next/image";
import Button from "@/components/ui/Button";
import * as motion from "motion/react-client";
import Link from "next/link";

const reasons = [
    {
        number: "01",
        title: "Advanced Treatments, Comfortable Environment",
        description:
            "We combine the latest dental technology with a welcoming atmosphere to ensure every visit is smooth, stress-free, and focused on your smile goals.",
    },
    {
        number: "02",
        title: "Personalized Dental Care You Can Trust",
        description:
            "Our experienced team takes time to understand your unique needs, offering gentle tailored treatments that support lasting oral health confidence.",
    },
    {
        number: "03",
        title: "Transparent Pricing, No Hidden Costs",
        description:
            "We believe quality dental care should be accessible. Our clear pricing and flexible payment options make your treatment stress-free from start to finish.",
    },
];

export default function WhyUs() {
    return (
        <section className="w-full px-4 py-16 md:px-10 lg:px-16 xl:px-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left Image */}
                <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
                    <motion.div
                        initial={{ opacity: 0, x: -32 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative rounded-3xl overflow-hidden w-full h-120"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=2000&q=80"
                            alt="Friendly dentist welcoming patient"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Floating Doctor Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                        viewport={{ once: true }}
                        className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 bg-white rounded-2xl shadow-xl p-5"
                    >
                        <p className="font-inter text-xs text-gray-400 mb-3 uppercase tracking-wide">
                            Available Doctor
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                                <Image
                                    src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=2000&q=80"
                                    alt="Dr. Rafiq Ahmed"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <p className="font-manrope font-bold text-gray-900 text-sm">
                                    Dr. Rafiq Ahmed, BDS, FCPS
                                </p>
                                <p className="font-inter text-xs text-gray-500">
                                    Specialty:{" "}
                                    <span className="text-teal-700">
                                        Oral Surgery & Implantology
                                    </span>
                                </p>
                                <p className="font-inter text-xs text-gray-500">
                                    Experience:{" "}
                                    <span className="font-medium text-gray-700">
                                        12+ years
                                    </span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Content */}
                <div className="flex-1 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: 16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" />
                            <span className="font-inter text-sm text-gray-600">
                                Why Us
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: 0.1,
                            }}
                            viewport={{ once: true }}
                            className="font-manrope font-extrabold text-3xl md:text-4xl leading-tight text-gray-900"
                        >
                            Discover Your Best Smile Today with Our Experts
                        </motion.h2>
                    </div>

                    {/* Reasons */}
                    <div className="flex flex-col gap-6">
                        {reasons.map((reason, i) => (
                            <motion.div
                                key={reason.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut",
                                    delay: 0.1 + i * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="flex items-start gap-5"
                            >
                                <div className="w-11 h-11 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0">
                                    <span className="font-manrope font-semibold text-sm text-gray-500">
                                        {reason.number}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <h3 className="font-manrope font-bold text-gray-900 text-base md:text-lg">
                                        {reason.title}
                                    </h3>
                                    <p className="font-inter text-sm text-gray-500 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: "easeOut",
                            delay: 0.4,
                        }}
                        viewport={{ once: true }}
                    >
                        <Link href="/contact">
                            <Button>Book Via WhatsApp</Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
