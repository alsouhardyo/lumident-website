"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import * as motion from "motion/react-client";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const images = [
    {
        src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80",
        alt: "Dentist examining patient",
    },
    {
        src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
        alt: "Dental checkup",
    },
    {
        src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80",
        alt: "Happy patient after treatment",
    },
    {
        src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
        alt: "Dentist with patient",
    },
    {
        src: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
        alt: "Dental equipment",
    },
    {
        src: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
        alt: "Teeth whitening",
    },
    {
        src: "https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=600&q=80",
        alt: "Dental X-ray",
    },
    {
        src: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
        alt: "Orthodontic treatment",
    },
    {
        src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
        alt: "Dental clinic interior",
    },
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const slides = images.map((img) => ({ src: img.src }));
    return (
        <section className="w-full px-4 py-16 md:px-10 lg:px-16 xl:px-24">
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-10">
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
                        <span className="font-inter text-sm font-semibold text-teal-700">
                            Our Gallery
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
                        className="font-manrope font-extrabold text-3xl md:text-4xl xl:text-5xl text-gray-900"
                    >
                        A Glimpse Into Our Clinic
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
                        className="font-inter text-gray-500 text-base max-w-xl leading-relaxed"
                    >
                        Take a look at our modern facilities, caring team, and
                        the smiles we have helped create.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: i * 0.07,
                            }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer"
                            onClick={() => setIndex(i)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/60 transition-all duration-500 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                                    <Plus className="w-6 h-6 text-teal-700" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={slides}
                    plugins={[Fullscreen, Slideshow, Thumbnails]}
                />

            </div>
        </section>
    );
}
