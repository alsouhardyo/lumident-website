"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PageBanner() {
    const pathname = usePathname().split("/")[1].toUpperCase();
    return (
        <section className="flex justify-center items-center w-screen h-72 text-center bg-linear-to-r from-teal-600 to-teal-700 text-white">
            <div className="space-y-4">
                <p className="font-semibold text-2xl md:text-3xl lg:text-5xl">
                    {pathname}
                </p>
                <Link href="/" className="font-medium">
                    <span className="hover:underline hover:underline-offset-4 duration-500 ease-in-out transition-all">
                        Home
                    </span>{" "}
                    <span>/ {pathname}</span>{" "}
                </Link>
            </div>
        </section>
    );
}
