import { ReactNode } from "react";
import clsx from "clsx";

type MainProps = {
    children: ReactNode;
    className?: string;
};

export function Main({children, className}: MainProps){
    return(
        <main className={`w-full grid xl:grid-cols-12 lg:grid-cols-10 md:grid-cols-8 sm:grid-cols-6 gap-4 ${className ?? ""}`}>
            {children}
        </main>
    );
}