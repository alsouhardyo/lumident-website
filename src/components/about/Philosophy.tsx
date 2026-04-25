import Image from "next/image";
import * as motion from "motion/react-client";

const philosophies = [
    {
        title: "Patient-First Care",
        description: "You are more than just a patient — you are family. We take the time to listen, understand your concerns, and create treatment plans that fit your unique needs. Our goal is to make every visit comfortable, personalized, and stress-free.",
        image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=2000&q=80",
        imageAlt: "Dentist examining patient",
        reverse: false,
    },
    {
        title: "Gentle & Modern Dentistry",
        description: "We combine advanced dental technology with a gentle touch. From pain-free procedures to state-of-the-art equipment, we ensure precision, comfort, and faster recovery. Dentistry doesn't have to be intimidating — with us, it's reassuring and easy.",
        image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=2000&q=80",
        imageAlt: "Modern dental procedure",
        reverse: true,
    },
];

export default function Philosophy() {
    return (
        <section className="w-full px-4 py-16 md:px-10 lg:px-16 xl:px-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-16">

                {/* Header */}
                <div className="flex flex-col items-center gap-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1.5"
                    >
                        <span className="w-2 h-2 rounded-full bg-teal-600 inline-block" />
                        <span className="font-inter text-sm font-semibold text-teal-700">Our Philosophy</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-manrope font-extrabold text-3xl md:text-4xl xl:text-5xl text-gray-900 lg:max-w-xl"
                    >
                        Your Smile Deserves The Best Care.
                    </motion.h2>
                </div>

                {/* Rows */}
                {philosophies.map((item, i) => (
                    <div
                        key={item.title}
                        className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${item.reverse ? "lg:flex-row-reverse" : ""}`}
                    >
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: item.reverse ? 32 : -32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="lg:flex-1 relative w-full rounded-2xl overflow-hidden h-72 md:h-96"
                        >
                            <Image
                                src={item.image}
                                alt={item.imageAlt}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: item.reverse ? -32 : 32 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                            viewport={{ once: true }}
                            className="lg:flex-1 flex flex-col gap-4"
                        >
                            <h3 className="font-manrope font-bold text-2xl md:text-3xl text-gray-900">
                                {item.title}
                            </h3>
                            <p className="font-inter text-gray-500 text-base leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    </div>
                ))}

            </div>
        </section>
    );
}
