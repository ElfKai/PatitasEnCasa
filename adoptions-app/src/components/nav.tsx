"use client";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/button";

const navigation = [
    { name: "Logo", href: "/" },
    { name: "About", href: "#" },
    { name: "Adoptions", href: "#" }
];

type NavProps = {
    variant?: "mobile" | "desktop";
    className?: string;
};

export function Navbar({ variant = "desktop", className }: NavProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const baseStyles = "shadow-md transition-colors rounded-t-[5px]  bg-amber-800 ";

    const variantStyles = clsx({
        "flex flex-row items-center m-2": variant === "desktop",
        "flex flex-col items-center m-1 md:hidden xl:hidden lg:hidden": variant === "mobile",

    });
    return (

        <nav className={clsx(baseStyles, className, isMenuOpen ? ("rounded-b-[5px]") : ("rounded-b-none"))}>
            <div className=" px-4 py-3 flex justify-self-start items-center ">
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? (<XMarkIcon className=" h-6 w-6" />) : (<Bars3Icon className="h-6 w-6" />)}</button>
                </div>
                <div className="m-auto md:m-0">
                    <Link href="/" className="text-xl font-bold text-blue-600">
                        Mi Logo
                    </Link>
                </div>
                <div className="hidden md:flex items-center space-x-6 pl-10">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href}><Button variant="secondary" className="hover:opacity-60">{item.name}</Button></Link>
                    ))}

                </div>


            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-amber-800 rounded-b-[5px]">
                    {navigation.map((item) => (
                        <Link key={item.name} href={item.href} className="block py-2 px-4 text-sm rounded-md hover:bg-amber-500">{item.name}</Link>
                    ))}
                </div>
            )}
        </nav>
    );
}