import clsx from "clsx";
import type { ReactNode } from "react";

interface IProp {
    className?: string;
    children: ReactNode;
}
function Container({ className, children }: IProp) {
    return (
        <div className={clsx("px-4 md:px-20", className)}>
            {children}
        </div>
    )
}

export default Container