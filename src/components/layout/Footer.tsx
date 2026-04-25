import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import * as motion from "motion/react-client";
import navItems from "@/lib/data/navitems";

const serviceLinks = [
    "General Dentistry",
    "Cosmetic Dentistry",
    "Pediatric Dentistry",
    "Restorative Dentistry",
    "Preventive Dentistry",
    "Orthodontics",
];

const socialIcons = [
    { label: "Facebook", src: "/facebook.png" },
    { label: "Twitter", src: "/twitter.png" },
    { label: "WhatsApp", src: "/whatsapp.png" },
    { label: "Instagram", src: "/instagram.png" },
];

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-white">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-16 xl:px-24 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <Link href={"/"} className="flex items-center gap-4">
                            <Image
                                src="/logo.png"
                                alt="Clinic Logo"
                                width={40}
                                height={40}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                            <p className="font-medium text-lg">Lumident</p>
                        </Link>

                        <p className="font-inter text-sm text-slate-400 leading-relaxed">
                            We are dedicated to providing high-quality,
                            personalized dental care for patients of all ages.
                            Our skilled team uses the latest technology to
                            ensure comfortable, efficient treatments and
                            beautiful, healthy smiles for life.
                        </p>
                        <div className="flex items-center gap-4">
                            {socialIcons.map(({ label, src }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border-2 border-slate-700 flex items-center justify-center hover:border-teal-700 transition-colors duration-300"
                                >
                                    <Image src={src} alt={label} width={18} height={18} sizes="18px" className="object-contain" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.1,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <h4 className="font-manrope font-bold text-white text-base">
                            Company
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className="font-inter text-sm text-slate-400 hover:text-teal-400 transition-colors duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.2,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <h4 className="font-manrope font-bold text-white text-base">
                            Our Services
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {serviceLinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        href="/services"
                                        className="font-inter text-sm text-slate-400 hover:text-teal-400 transition-colors duration-300"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.3,
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        <h4 className="font-manrope font-bold text-white text-base">
                            Contact Us
                        </h4>
                        <div className="flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-teal-400 shrink-0" />
                                    <span className="font-manrope font-semibold text-sm text-white">
                                        Clinic Location
                                    </span>
                                </div>
                                <p className="font-inter text-sm text-slate-400 pl-6">
                                    House 12, Road 4, Dhanmondi, Dhaka,
                                    Bangladesh
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                                    <span className="font-manrope font-semibold text-sm text-white">
                                        Call Us
                                    </span>
                                </div>
                                <p className="font-inter text-sm text-slate-400 pl-6">
                                    +880 1700 000 000
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                                    <span className="font-manrope font-semibold text-sm text-white">
                                        Send a Message
                                    </span>
                                </div>
                                <p className="font-inter text-sm text-slate-400 pl-6">
                                    contact@dentalclinic.com.bd
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-slate-800">
                <div className="w-full max-w-7xl mx-auto px-4 md:px-10 lg:px-16 xl:px-24 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-inter text-sm text-slate-500">
                        &copy; {new Date().getFullYear()} — Dental Clinic. All
                        rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="#"
                            className="font-inter text-sm text-slate-500 hover:text-white transition-colors duration-300"
                        >
                            Terms & Conditions
                        </a>
                        <a
                            href="#"
                            className="font-inter text-sm text-slate-500 hover:text-white transition-colors duration-300"
                        >
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
