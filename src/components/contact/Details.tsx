import * as motion from "motion/react-client";
import { MessageSquare, Phone, Mail } from "lucide-react";

const contacts = [
    {
        icon: MessageSquare,
        title: "WhatsApp Us",
        subtitle: "Instant response for bookings",
        action: "Chat Now",
        href: "https://wa.me/8801700000000",
    },
    {
        icon: Phone,
        title: "Call Us",
        subtitle: "+880 1234 567 890",
        action: "Call Now",
        href: "tel:+8801234567890",
    },
    {
        icon: Mail,
        title: "Email Us",
        subtitle: "contact@dentalclinic.com.bd",
        action: "Send Email",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=contact@dentalclinic.com.bd",
    },
];

export default function Details() {
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
                        className="inline-flex items-center gap-2 text-teal-700"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2C8 2 5 5 5 8.5c0 3.5 2 6 4 8.5.8 1 1.5 2 2 3 .2.4.5.7 1 .7s.8-.3 1-.7c.5-1 1.2-2 2-3 2-2.5 4-5 4-8.5C19 5 16 2 12 2z" />
                            <circle cx="12" cy="8.5" r="2.5" />
                        </svg>
                        <span className="font-inter text-sm font-semibold">How To Reach Us</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="font-manrope font-extrabold text-3xl md:text-4xl xl:text-5xl text-gray-900"
                    >
                        Get in touch with us
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        className="font-inter text-gray-500 text-base max-w-2xl leading-relaxed"
                    >
                        The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, and specialist dental treatments. With dental practices throughout the world.
                    </motion.p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {contacts.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center gap-4"
                            >
                                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-teal-700" strokeWidth={1.5} />
                                </div>
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <h3 className="font-manrope font-bold text-gray-900 text-lg">{item.title}</h3>
                                    <p className="font-inter text-sm text-teal-700">{item.subtitle}</p>
                                </div>
                                <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full mt-2 bg-teal-700 hover:bg-teal-800 text-white font-inter font-medium text-sm text-center py-3 rounded-full transition-colors duration-300"
                                >
                                    {item.action}
                                </a>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                    className="w-full rounded-2xl overflow-hidden shadow-lg h-112.5"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3760648725!2d90.27923710820312!3d23.780573000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Dental Clinic Location - Dhaka, Bangladesh"
                    />
                </motion.div>

            </div>
        </section>
    );
}
