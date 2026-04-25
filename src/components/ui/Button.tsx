import React from "react";

export default function Button({
    children,
    variant = "default",
}: Readonly<{
    children: React.ReactNode;
    variant?: "default" | "outlined";
}>) {
    const base =
        "relative overflow-hidden px-6 py-2.5 lg:px-8 lg:py-3 rounded-lg lg:rounded-full font-medium text-sm lg:text-base group";

    if (variant === "default") {
        return (
            <button className={`${base} bg-teal-700 text-white`}>
                <span className="relative z-10 transition-colors duration-500 ease-out">
                    {children}
                </span>
                <div className="absolute inset-0 bg-slate-800 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 origin-left" />
            </button>
        );
    }

    return (
        <button
            className={`${base} border-2 border-teal-700 text-teal-700 group-hover:text-white hover:border-0 hover:border-transparent`}
        >
            <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-white">
                {children}
            </span>
            <div className="absolute inset-0 bg-slate-800 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 origin-left" />
        </button>
    );
}
