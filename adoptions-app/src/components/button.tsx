import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
    className?: string;
};

export function Button({ children, variant = "primary", onClick, className }: ButtonProps) {
    const baseStyles = "px-5 py-2 rounded-full font-semibold transition-colors";

    const variantStyles = clsx({
        " bg-blue-400 shadow-[2px 2px 2px white] rounded-full m-2 px-5 hover:animate-floated shadow-lg shadow-blue-600/50": variant === "primary",
        " bg-orange-400 shadow-[2px 2px 2px white] rounded-full m-2 px-5 hover:animate-floated shadow-lg shadow-red-600/50": variant === "secondary",
    });

    return (
        <button onClick={onClick} className={clsx(baseStyles, variantStyles, className)}>
            {children}
        </button>
    );
}