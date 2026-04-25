"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import Navbar, { MobileMenu } from "./Navbar";
import Button from "../ui/Button";
import Link from "next/link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const isWindowScrolled = window.scrollY > 250;
            setIsScrolled(isWindowScrolled);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 xl:px-12 xl:py-6 lg:flex lg:justify-between lg:items-center ${
                isScrolled && "scrolled shadow-xl"
            }`}
        >
            {/* Logo Part */}
            <div className="flex justify-between items-center">
                <Link
                    href="/"
                    className="flex justify-between items-center gap-2"
                >
                    <div className="w-10 h-10 relative">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            fill
                            priority={true}
                            sizes="(max-width: 40px) 40px, 40px"
                        />
                    </div>
                    <p className="text-xl font-semibold font-manrope">
                        Lumident
                    </p>
                </Link>
                <button
                    className="lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <X className="absolute top-2 right-2 z-9999" />
                    ) : (
                        <Menu />
                    )}
                </button>
            </div>
            {/* Navbar Part */}
            <Navbar />
            {/* CTA Buttons */}
            <div className="hidden lg:flex lg:justify-between lg:items-center gap-10">
                <div className="hidden xl:flex justify-between items-center gap-4">
                    <div className="p-3 rounded-full border-2 border-gray-200 inline-block">
                        <Phone className="text-teal-700" size={20} />
                    </div>
                    <div>
                        <p className="font-manrope">Call Us</p>
                        <p className="font-semibold hover:text-teal-700 duration-500 ease-in-out cursor-pointer">
                            +880-18348-1287
                        </p>
                    </div>
                </div>
                <a href="https://wa.me/8801700000000" target="_blank">
                    <Button>Book Now</Button>
                </a>
            </div>
            {/* Animated Mobile Menu */}
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    );
};

export default Header;
