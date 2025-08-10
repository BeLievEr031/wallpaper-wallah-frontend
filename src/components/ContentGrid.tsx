import clsx from "clsx";
import type { ReactNode } from "react"

interface IProp {
    children: ReactNode;
    gridTitle: string;
    className?: string;
}

function ContentGrid({ children, gridTitle, className }: IProp) {
    return (
        <div className={clsx(className || "pt-16")}>
            <h1 className="text-3xl font-semibold font-rubik text-zinc-900 capitalize">
                {gridTitle}
            </h1>
            <div className="grid grid-cols-8 mt-5 gap-2">
                {children}
            </div>
        </div>
    )
}

export default ContentGrid